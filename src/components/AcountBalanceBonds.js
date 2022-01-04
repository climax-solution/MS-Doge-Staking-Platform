import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { NotificationManager } from 'react-notifications';
import { Dropdown } from 'reactjs-dropdown-component';
import { connect } from "react-redux";
import Loading from '../components/Loading';
import { updateStatus } from "../store/actions/change.action";
import slogo from "../assets/images/icons/logo.png";
import cryptoLogo from '../assets/images/cryptoLogo.png'
import config from "../config.json";
import logo from '../assets/images/favicon.png';

const { StakingAddress } = config;
const duration = 24 * 25 * 3600;

const optionMsDogeData = [
   {
      label: <span><img src={slogo} width="18px" height="18px" /> MsDoge</span>,
      value: 0,
   },
   {
      label: <span><img src={slogo} width="18px" height="18px" /> MsDoge</span>,
      value: 1,
   }
]


const AcountBalanceBonds = (props) => {

   const { active, account } = useWeb3React();
   const [boundTabs, setBoundTabs] = useState(false);
   
   const {
      web3,
      dogeB,
      loriaB,
      ethB,
      loriaCoin: _CRYPTO,
      dogeCoin: _MSDOGE,
      stake: _Staking,
      dogeReward: _XMSDOGE,
      loriaReward: _XCRYPTO
   } = props;

   const [counter, setCounter] = useState(1);
   const [_stakedDoge, setStakedDoge] = useState(0);
   const [_stakedLoria, setStakedLoria] = useState(0);
   const [_unClaimedDoge, setUnClaimedDoge] = useState(0);
   const [_unClaimedLoria, setUnClaimedLoria] = useState(0);
   const [isLoading, setLoading] = useState(false);
   const [activeCoin, setCoin] = useState(0);
   const [_stakingAmount, setStakingAmount] = useState('');

   useEffect(async () => {
      if (account) {
         await getStakedList();
      }
   }, [account]);

   const withdraw = async () => {
      setLoading(true);
      try {
         const totalDoge = web3.utils.toWei(_stakedDoge.toString(), 'gwei');
         const totalLoria = web3.utils.toWei(_stakedLoria.toString(), 'mwei');
         let flag = false;
         if (totalDoge > 0) {
            await _XMSDOGE.methods.approve(StakingAddress, totalDoge).send({ from: account });
            await _MSDOGE.methods.approve(StakingAddress, totalDoge).send({ from: account });
            flag = true;
         }

         if (totalLoria > 0) {
            await _CRYPTO.methods.approve(StakingAddress, totalLoria).send({ from: account });
            await _XCRYPTO.methods.approve(StakingAddress, totalLoria).send({ from: account });
            flag = true;
         }

         if (flag) {
            await _Staking.methods.allWithdraw().send({ from: account })
               .on('receipt', async (res) => {
                  await props.updateStatus();
                  await getStakedList();
                  NotificationManager.success(":D")
                  setLoading(false);
               })
         }

         else {
            NotificationManager.warning("No staked!", "Warning");
            setLoading(false);
         }

      } catch (err) {
         setLoading(false);
      }
   }

   const multipleClaim = async () => {
      setLoading(true);
      setLoading(true);
      try {
         const totalDoge = web3.utils.toWei(_unClaimedDoge.toString(), 'gwei');
         const totalLoria = web3.utils.toWei(_unClaimedLoria.toString(), 'mwei');
         let flag = false;
         if (totalDoge > 0) {
            await _XMSDOGE.methods.approve(StakingAddress, totalDoge).send({ from: account });
            await _MSDOGE.methods.approve(StakingAddress, totalDoge).send({ from: account });
            flag = true;
         }

         if (totalLoria > 0) {
            await _CRYPTO.methods.approve(StakingAddress, totalLoria).send({ from: account });
            await _XCRYPTO.methods.approve(StakingAddress, totalLoria).send({ from: account });
            flag = true;
         }

         if (flag) {
            await _Staking.methods.multipleClaim().send({ from: account })
               .on('receipt', async (res) => {
                  await props.updateStatus();
                  await getStakedList();
                  NotificationManager.success(":D")
                  setLoading(false);
               })
         }

         else {
            NotificationManager.warning("No available claim!", "Warning");
            setLoading(false);
         }

      } catch (err) {
         setLoading(false);
      }

      setLoading(false);
   }

   const Staking = async () => {
      if (_stakingAmount < 0.5) {
         NotificationManager.warning("Staking amount must be greater or equal that 0.5");
         return;
      }
      setLoading(true);
      try {
         switch (activeCoin) {
            case 0:
               const dogeAmount = web3.utils.toWei(_stakingAmount.toString(), "gwei");
               await _MSDOGE.methods.approve(StakingAddress, dogeAmount).send({ from: account });
               NotificationManager.info("Approved1", "Info");
               await _XMSDOGE.methods.approve(StakingAddress, dogeAmount).send({ from: account })
               NotificationManager.info("Approved2", "Info");
               await _Staking.methods.stake(activeCoin, dogeAmount, counter).send({ from: account })
                  .on('receipt', async (receipt) => {
                     NotificationManager.success("Success", ":)");
                     await props.updateStatus();
                     await getStakedList();
                     setLoading(false);
                  })
               break;
            case 1:
               const loriaAmount = web3.utils.toWei(_stakingAmount.toString(), "mwei");
               await _CRYPTO.methods.approve(StakingAddress, loriaAmount).send({ from: account });
               NotificationManager.info("Approved1", "Info");
               await _XCRYPTO.methods.approve(StakingAddress, loriaAmount).send({ from: account })
               NotificationManager.info("Approved2", "Info");
               await _Staking.methods.stake(activeCoin, loriaAmount, counter).send({ from: account })
                  .on('receipt', async (receipt) => {
                     NotificationManager.success("Success", ":)");
                     await props.updateStatus();
                     await getStakedList();
                     setLoading(false);
                  })
               break;
         }
      } catch (err) {
         setLoading(false);
      }
   }

   const getStakedList = async () => {
      const list = await _Staking.methods.getStakedList().call({ from: account });
      const now = await _Staking.methods.getNow().call();

      let stakedDogeAmount = 0,
         stakedLoriaAmount = 0,
         rewardDogeAmount = 0,
         rewardLoriaAmount = 0;

      list.map(item => {
         const updated_at = item._updated_at;

         let count = Math.floor((now - updated_at) / (duration * item._dogeEli));

         if (item._stakedToken == 0) {
            stakedDogeAmount += item._initBalance;
            if (count > 0) rewardLoriaAmount += count * item._initBalance * item._dogeAPY / 100 / 1000;
         }

         else {
            stakedLoriaAmount += item._initBalance;
            if (count > 0) rewardDogeAmount += count * item._initBalance * item._dogeAPY / 100 * 1000;
         }

      })

      setStakedDoge(web3.utils.fromWei(stakedDogeAmount.toString(), "gwei"));
      setStakedLoria(web3.utils.fromWei(stakedLoriaAmount.toString(), "mwei"));
      setUnClaimedDoge(web3.utils.fromWei(rewardDogeAmount.toString(), "gwei"));
      setUnClaimedLoria(web3.utils.fromWei(rewardLoriaAmount.toString(), "mwei"));
   }

return (
<React.Fragment>
   <div className="gray-bg ms p-4 mb-4 mb-md-0">
      <div className="acc-heading-text ms">
         <h6 className="mb-3">Account balance</h6>
         <h2>574.00 <span>MSDOGE</span></h2>
         <h4 className="mb-2"><span style={{color: "#F7CE0E"}}>0.0448859</span> <span style={{fontWeight: "500"}}>CRYPTO</span></h4>
         <h4 className="mt-3">1.852342129 <span>ETH</span></h4>
      </div>
      <div className="withdraw-text ms mt-2">
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>MSDOGE</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Bonds in total</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>CRYPTO</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Bonds in total</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>MSDOGE</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Unclaimed reward</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>CRYPTO</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Unclaimed reward</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-12 py-3 text-center">
               <button data-bs-toggle="modal" data-bs-target="#msDogeApprove" onClick={() => setBoundTabs(false)} type="button" className="withdraw-btn mx-auto py-3 px-5">
               Stake
               </button>
            </div>
            {/* <div className="col-6 py-3 text-center">
               <button data-bs-toggle="modal" data-bs-target="#msDogeApprove" onClick={() => setBoundTabs(true)} type="button" className="withdraw-btn mx-auto py-3 px-5">
               Claim
               </button>
            </div> */}
         </div>
      </div>
   </div>

     {/*** Stake MsDoge Modal - 2 ***/}
      <div className="modal fade" id="stakeMsDogeModal" tabIndex="-1" aria-labelledby="stakeCryptoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content icon-text-block-cri">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Stake</h5>
                        <div action="">
                           <div className="input-bal">
                              <div className="inner-bore p-3">
                                 <div className="row">
                                    <div className="col-6">
                                       <h4 className="mb-3">Stake</h4>
                                    </div>
                                    <div className="col-6 text-end">
                                       <h4 className="mb-3">Balance: {dogeB} MSDOGE</h4>
                                    </div>

                                    <div className="col-sm-12 d-flex justify-content-center flex-column align-items-center">
                                       <div className="crypto-select-icon">
                                          <Dropdown
                                             name="location"
                                             title="Select location"
                                             list={optionMsDogeData}
                                             onChange={(res) => setCoin(res.value)}
                                             select={{ value: activeCoin }}
                                             styles={{
                                                wrapper: {
                                                   width: '130px'
                                                },
                                                header: {
                                                   border: 'none',
                                                   backgroundColor: 'transparent'
                                                },
                                                headerTitle: {
                                                   fontSize: '15px',
                                                   fontWeight: 'bold',
                                                   alignItems: 'center'
                                                },
                                                scrollList: {
                                                   padding: '10px',
                                                },
                                                listItem: {
                                                   fontSize: '15px',
                                                   fontWeight: 'initial',
                                                   padding: '0',
                                                   overflow: 'initial',
                                                }
                                             }}
                                          />
                                       </div>
                                       <div className="mt-2">
                                          <input
                                             type="number"
                                             className="input-box text-center"
                                             placeholder="0.5"
                                             onChange={(e) => setStakingAmount(e.target.value)}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row mt-5">
                                 <div className="col-12">
                                    <div className="apy-box rel px-3 py-4 text-center">
                                       <h4 className="green-box">0.5% APY</h4>
                                       <p>The APY is calculated by multiplying the amount of months staked with 0.5. Maximum of 20% APY. Please note that cancelling the stake early will penalize you. Refer to our documentation: <a href="#" className="click-btn">Click Here</a> </p>
                                    </div>
                                    <button
                                       className="mt-3 approve-btn text-white text-center py-4 w-100"
                                       onClick={Staking}
                                    >Approve 0.5 MSDOGE</button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

          {/* Modal */}
          <div className="modal fade" id="msDogeApprove" tabIndex="-1" aria-labelledby="msDogeApprove" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <header className="d-flex justify-content-between pt-0 pb-0 align-items-center" style={{ background: "none" }}>
                        <div type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                           </svg>
                        </div>

                        <div className="position-absolute d-flex justify-content-between align-items-center" style={{ left: "50%", top: "1px", transform: "translate(-50%, 0)" }}>
                           <img src={logo} width="30px" height="30px" />
                           <h5 className="my-3 text-center">MsDoge</h5>
                        </div>

                        <div data-bs-toggle="modal" data-bs-target="#hadesPopup" className="cursor-pointer position-absolute" style={{ right: "15px", top: "15px" }}>
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.8194 20H8.1794C7.95133 20 7.7301 19.9221 7.5524 19.7792C7.3747 19.6362 7.2512 19.4368 7.2024 19.214L6.7954 17.33C6.25245 17.0921 5.73763 16.7946 5.2604 16.443L3.4234 17.028C3.20596 17.0973 2.97135 17.0902 2.75852 17.0078C2.54569 16.9254 2.36745 16.7727 2.2534 16.575L0.429396 13.424C0.316541 13.2261 0.274179 12.9958 0.309238 12.7708C0.344298 12.5457 0.454705 12.3392 0.622396 12.185L2.0474 10.885C1.98259 10.2961 1.98259 9.70189 2.0474 9.113L0.622396 7.816C0.454467 7.66177 0.343911 7.45507 0.308845 7.22978C0.273779 7.00449 0.316285 6.77397 0.429396 6.576L2.2494 3.423C2.36345 3.22532 2.54169 3.07259 2.75452 2.99019C2.96735 2.90778 3.20196 2.90066 3.4194 2.97L5.2564 3.555C5.5004 3.375 5.7544 3.207 6.0164 3.055C6.2694 2.913 6.5294 2.784 6.7954 2.669L7.2034 0.787C7.25197 0.564198 7.37523 0.364688 7.55274 0.221549C7.73026 0.0784098 7.95136 0.000239966 8.1794 0H11.8194C12.0474 0.000239966 12.2685 0.0784098 12.446 0.221549C12.6236 0.364688 12.7468 0.564198 12.7954 0.787L13.2074 2.67C13.4874 2.794 13.7614 2.933 14.0264 3.088C14.2734 3.231 14.5124 3.388 14.7424 3.557L16.5804 2.972C16.7977 2.90292 17.0321 2.91017 17.2447 2.99256C17.4573 3.07495 17.6354 3.22753 17.7494 3.425L19.5694 6.578C19.8014 6.985 19.7214 7.5 19.3764 7.817L17.9514 9.117C18.0162 9.70589 18.0162 10.3001 17.9514 10.889L19.3764 12.189C19.7214 12.507 19.8014 13.021 19.5694 13.428L17.7494 16.581C17.6353 16.7787 17.4571 16.9314 17.2443 17.0138C17.0314 17.0962 16.7968 17.1033 16.5794 17.034L14.7424 16.449C14.2655 16.8003 13.751 17.0975 13.2084 17.335L12.7954 19.214C12.7466 19.4366 12.6233 19.6359 12.4458 19.7788C12.2683 19.9218 12.0473 19.9998 11.8194 20V20ZM9.9954 6C8.93453 6 7.91711 6.42143 7.16697 7.17157C6.41682 7.92172 5.9954 8.93913 5.9954 10C5.9954 11.0609 6.41682 12.0783 7.16697 12.8284C7.91711 13.5786 8.93453 14 9.9954 14C11.0563 14 12.0737 13.5786 12.8238 12.8284C13.574 12.0783 13.9954 11.0609 13.9954 10C13.9954 8.93913 13.574 7.92172 12.8238 7.17157C12.0737 6.42143 11.0563 6 9.9954 6V6Z" fill="black" />
                           </svg>
                        </div>
                     </header>

                     <div className="heading-text-popupm">

                        <main className="d-flex justify-content-between w-100 " style={{ marginTop: "60px", marginBottom: "10px" }}>
                           <div>
                              <h6>Bond Discount</h6>
                              <h3><b className="text-gold">$838</b></h3>
                           </div>

                           <div>
                              <h6>Market Price</h6>
                              <h3><b className="text-gold">$878</b></h3>
                           </div>
                        </main>

                        <div className="boundTabs_container">
                           <button className={boundTabs === false ? "active" : ""} onClick={() => setBoundTabs(false)}>Bond</button>
                           <button className={boundTabs === false ? "" : "active"} onClick={() => setBoundTabs(true)}>Redeem</button>
                        </div>

                        {
                           boundTabs === false ? <form action="" style={{ marginTop: "15px" }}>
                              <div className="input-bal">
                                 <div className="row">
                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Your Balance</small></div>
                                       <div><small>0.0 Frax</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>You will get</small></div>
                                       <div><small>0 OHM</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Max you can buy</small></div>
                                       <div><small>172.4828 OHM</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>ROI</small></div>
                                       <div><small>1,64%</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Debt Ratio</small></div>
                                       <div><small>1,64%</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Vesting Term</small></div>
                                       <div><small>5 days</small></div>
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="mt-3 mb-3">
                                          <p className="w-100 text-center">
                                             <h6>First time bonding MsDoge?Please approve olympus dao to use your MsDoge for bonding.</h6>
                                          </p>
                                       </div>
                                       <div className="p-2 stake-btn">
                                          <a type="button" className="table-btn btn w-100">Approve 0.5 URUS</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>

                              :

                              <form action="" style={{ marginTop: "15px" }}>
                                 <div className="input-bal">
                                    <div className="row">
                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Pending Rewards</small></div>
                                          <div><small>0.0 Frax</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Claimable Rewards</small></div>
                                          <div><small>0 OHM</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Time untill fully vested</small></div>
                                          <div><small></small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>ROI</small></div>
                                          <div><small>1,64%</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Debt Ratio</small></div>
                                          <div><small>1,64%</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Vesting Term</small></div>
                                          <div><small>5 days</small></div>
                                       </div>
                                       <div className="col-sm-12">
                                          <div className="p-2 stake-btn">
                                             <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim</button>
                                             <button type="button" className="table-btn btn px-4 w-100">Claim & Autostake</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                        }


                     </div>
                  </div>
               </div>
            </div>
         </div>
</React.Fragment>
)
}

const mapDispatchToProps = (dispatch) => ({
   updateStatus: () => dispatch(updateStatus())
})
export default connect(null, mapDispatchToProps)(AcountBalanceBonds);