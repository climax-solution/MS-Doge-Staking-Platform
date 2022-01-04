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

const { StakingAddress } = config;

const duration = 24 * 25 * 3600;

const optionMsCryptoData = [
   {
      label: <span><img src={slogo} width="18px" height="18px" /> MsDoge</span>,
      value: 0,
   },
   {
      label: <span><img src={slogo} width="18px" height="18px" /> MsDoge</span>,
      value: 1,
   }
]

const optionData = [
   {
      label: <span><img src={cryptoLogo} width="18px" height="18px" /> Crypto</span>,
      value: 0,
   },
   {
      label: <span><img src={cryptoLogo} width="18px" height="18px" /> Crypto</span>,
      value: 1,
   }
];

const AccountBalanceMigrate = (props) => {

   const { active, account } = useWeb3React();
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
         <h2>1.140.05 <span>MSDOGE</span></h2>
         <h4 className="mb-2"><span style={{color: "#F7CE0E"}}>0.0448859</span> <span style={{fontWeight: "500"}}>CRYPTO</span></h4>
         <h4 className="mt-3">1.852342129 <span>ETH</span></h4>
      </div>
      <div className="withdraw-text ms mt-2">
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>MSDOGE</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Staked in total</span></h3>
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
               <h3>0 <span>MSDOGE</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Unclaimed reward</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-3 text-center">
               <button type="button" className="withdraw-btn mx-auto py-3 px-5">
               Unstake
               </button>
            </div>
            <div className="col-6 py-3 text-center">
               <button data-bs-toggle="modal" data-bs-target="#stakeCryptoMsDogeModal" type="button" className="withdraw-btn mx-auto py-3 px-5">
               Claim
               </button>
            </div>
         </div>
      </div>
   </div>


         {/*** Stake Crypto Modal - 3 ***/}
         <div className="modal fade" id="stakeCryptoMsDogeModal" tabIndex="-1" aria-labelledby="stakeCryptoModalLabel" aria-hidden="true">
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
                                             list={optionMsCryptoData}
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
                                       <div className="small-logo-photo">
                                          <Dropdown
                                             name="location"
                                             title="Select location"
                                             list={optionData}
                                             onChange={(res) => setCoin(res.value)}
                                             styles={{
                                                wrapper: {
                                                   width: '130px'
                                                },
                                                header: {
                                                   borderRadius: '25px',
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
                                                   borderTop: '1px solid #eee'
                                                }
                                             }}
                                             select={{ value: activeCoin }}
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
</React.Fragment>
)
}


const mapDispatchToProps = (dispatch) => ({
   updateStatus: () => dispatch(updateStatus())
})
export default connect(null, mapDispatchToProps)(AccountBalanceMigrate);