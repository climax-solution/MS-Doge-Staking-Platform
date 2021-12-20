import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { NotificationManager } from 'react-notifications';
import { Dropdown } from 'reactjs-dropdown-component';
import {connect} from "react-redux";
import Loading from '../components/Loading';
import { updateStatus } from "../store/actions/change.action";
import slogo from "../assets/images/icons/logo.png";
import config from "../config.json";

const {StakingAddress} = config;

const duration = 24 * 25 * 3600 ;

const locations = [
   {
      label: <span><img src={slogo} width="20px" height="20px"/>MSDOGE</span>,
      value: 0,
    },
    {
      label: <span><img src={slogo} width="20px" height="20px"/>CRYPTO</span>,
      value: 1,
    }
];

function AccountBalance(props) {
   const { active, account} = useWeb3React();
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

   useEffect(async() => {
      if (account) {
         await getStakedList();
      }
   },[account]);

   const withdraw = async() => {
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
            .on('receipt', async(res) => {
               await props.updateStatus();
               await getStakedList();
               NotificationManager.success(":D");
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
      window.$('#cancelStake').modal('hide');
   }

   const multipleClaim = async() => {
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
            .on('receipt', async(res) => {
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
      window.$('#multiClaimCoinPopup').modal('hide');
      setLoading(false);
   }
   
   const Staking = async() => {
      if (_stakingAmount < 0.5) {
         NotificationManager.warning("Staking amount must be greater or equal that 0.5");
         return;
      }
      setLoading(true);
      try {
         switch(activeCoin) {
            case 0:
               const dogeAmount = web3.utils.toWei(_stakingAmount.toString(), "gwei");
               await _MSDOGE.methods.approve(StakingAddress, dogeAmount).send({ from: account });
               NotificationManager.info("Approved", "Info");
               await _Staking.methods.stake(activeCoin, dogeAmount, counter).send({ from: account })
               .on('receipt', async(receipt) => {
                  NotificationManager.success("Success", ":)");
                  await props.updateStatus();
                  await getStakedList();
                  setLoading(false);
               })
               break;
            case 1:
               const loriaAmount = web3.utils.toWei(_stakingAmount.toString(), "mwei");
               await _CRYPTO.methods.approve(StakingAddress, loriaAmount).send({ from: account });
               NotificationManager.info("Approved", "Info");
               await _Staking.methods.stake(activeCoin, loriaAmount, counter).send({ from: account })
               .on('receipt', async(receipt) => {
                  NotificationManager.success("Success", ":)");
                  await props.updateStatus();
                  await getStakedList();
                  setLoading(false);
               })
               break;
         }
      } catch(err) {
         setLoading(false);
      }
      window.$("#stakingModal").modal('hide');
   }

   const getStakedList = async() => {
      const list = await _Staking.methods.getStakedList().call({ from : account });
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
         { isLoading && <Loading/> }
         <div className="gray-bg ms p-4 mb-4 mb-md-0">
            <div className="acc-heading-text ms">
               <h6 className="mb-3">Account balance</h6>
               <h2>{dogeB} <span>MSDOGE</span></h2>
               <h4 className="mb-2"><span style={{color: "#F7CE0E"}} className="text-bold">{loriaB}</span> <span>CRYPTO</span></h4>
               <h4 className="mt-3">{ethB} <span>ETH</span></h4>
            </div>
            <div className="withdraw-text ms mt-2">
               <div className="row border-top">
                  <div className="col-6 py-2">
                     <h3>{_stakedDoge} <span>MSDOGE</span></h3>
                  </div>
                  <div className="col-6 py-2 text-end">
                     <h3><span>Staked in total</span></h3>
                  </div>
               </div>
               <div className="row border-top">
                  <div className="col-6 py-2">
                     <h3>{_stakedLoria} <span>CRYPTO</span></h3>
                  </div>
                  <div className="col-6 py-2 text-end">
                     <h3><span>Staked in total</span></h3>
                  </div>
               </div>
               <div className="row border-top">
                  <div className="col-6 py-2">
                     <h3>{_unClaimedDoge} <span>MSDOGE</span></h3>
                  </div>
                  <div className="col-6 py-2 text-end">
                     <h3><span>Unclaimed reward</span></h3>
                  </div>
               </div>
               <div className="row border-top">
                  <div className="col-6 py-2">
                     <h3>{_unClaimedLoria} <span>CRYPTO</span></h3>
                  </div>
                  <div className="col-6 py-2 text-end">
                     <h3><span>Unclaimed reward</span></h3>
                  </div>
               </div>
               <div className="row justify-content-center border-top">
                  <div className="col-6 py-3 text-center">
                     <button
                        type="button"
                        className={`withdraw-btn mx-auto py-3 px-5 ${active && "active"}`}
                        {
                           ...(
                              active && {
                                 "data-bs-target" : "#stakingModal",
                                 "data-bs-toggle" : "modal"
                              }
                           )
                        }
                     >
                     Stake
                     </button>
                  </div>
               </div>
               <div className="row border-top">
                  <div className="col-6 py-3 text-center">
                     <button
                        type="button"
                        className="withdraw-btn mx-auto py-3 px-5"
                        {
                           ...(
                              active && {
                                 "data-bs-target" : "#cancelStake",
                                 "data-bs-toggle" : "modal"
                              }
                           )
                        }
                     >
                     Unstake
                     </button>
                  </div>
                  <div className="col-6 py-3 text-center">
                     <button
                        type="button"
                        className="withdraw-btn mx-auto py-3 px-5"
                        {
                           ...(
                              active && {
                                 "data-bs-target" : "#multiClaimCoinPopup",
                                 "data-bs-toggle" : "modal"
                              }
                           )
                        }
                     >
                     Claim
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/* Modal */}
         <div className="modal fade" id="stakingModal" tabIndex="-1" aria-labelledby="stakingModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content icon-text-block-cri">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Transactions</h5>
                        <div action="">
                           <div className="input-bal">
                              <div className="inner-bore p-3">
                                 <div className="row">
                                    <div className="col-6">
                                       <h4 className="mb-3">Input</h4>
                                       <input
                                          type="number"
                                          className="input-box"
                                          placeholder="0.5"
                                          onChange={(e) => setStakingAmount(e.target.value)}
                                       />
                                    </div>
                                    <div className="col-6 text-end">
                                       <h4 className="mb-3">Balance: {dogeB} MSDOGE</h4>
                                       <div className="small-logo-photo d-flex justify-content-end ">
                                          <Dropdown
                                             name="location"
                                             title="Select location"
                                             list={locations}
                                             onChange={(res) => setCoin(res.value)}
                                             styles={{
                                                wrapper : {
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
                                             select={{value: activeCoin}}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row my-3">
                                 <div className="col-md-5">
                                    <div className="d-flex align-items-center sel-number-box">
                                       <div className="number me-3 d-flex justify-content-between">
                                          <span className="minus" onClick={(counter > 1 ? () => setCounter(counter - 1) : () => null)}>
                                             <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.75 0.25H11.25V1.75H0.75V0.25Z" fill="#161F2F" />
                                             </svg>
                                          </span>
                                          <input type="text" value={counter} readOnly/>
                                          <span className="plus" onClick={() => counter < 84 && setCounter(counter + 1)}>
                                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" fill="#161F2F" />
                                             </svg>
                                          </span>
                                       </div>
                                       <p>Months</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-12">
                                    <div className="d-flex mb-5 qu-text">
                                       <div className="icon-box me-2 d-flex">
                                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fillRule="evenodd" clipRule="evenodd" d="M1.5 9C1.5 13.1423 4.85775 16.5 9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9ZM15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9ZM9.75 11.25V12.75H8.25V11.25H9.75ZM9.75029 10.5V10.0162C10.983 9.64878 11.7681 8.44242 11.6048 7.16651C11.4415 5.8906 10.3779 4.92085 9.09237 4.87572C7.80685 4.83059 6.6779 5.72339 6.42554 6.9847L7.89704 7.27945C8.01319 6.69834 8.56023 6.30696 9.14773 6.38467C9.73522 6.46237 10.1617 6.9825 10.1228 7.57383C10.0839 8.16517 9.5929 8.62492 9.00029 8.62495C8.58607 8.62495 8.25029 8.96074 8.25029 9.37495V10.5H9.75029Z" fill="#171717" />
                                          </svg>
                                       </div>
                                       You can stake from 1 month to 7 years.
                                    </div>
                                    <div className="apy-box rel px-3 py-4 text-center">
                                       <h4 className="green-box">0.5% APY</h4>
                                       <p>The APY is calculated by multiplying the amount of months staked with 0.5. Maximum of 20% APY. Please note that cancelling the stake early will penalize you. Refer to our documentation: <a href="#" className="click-btn">Click Here</a> </p>
                                    </div>
                                    <button
                                       className="mt-3 approve-btn text-white text-center py-4 w-100"
                                       onClick={Staking}
                                    >Approve</button>
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

         <div className="modal fade" id="cancelStake" tabIndex="-1" aria-labelledby="cancelStake" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Stake Settings</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Stake 1: </small></div>
                                    <div><small><b>{_stakedDoge}</b> MSDOGE</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Stake 2: </small></div>
                                    <div><small><b>{_stakedLoria}</b> CRYPTO</small></div>
                                 </div>

                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button
                                          type="button"
                                          className="table-btn color5 py-2 px-4 w-100 mb-3 text-white"
                                          onClick={withdraw}
                                       >Cancel Stake</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div className="modal fade" id="multiClaimCoinPopup" tabIndex="-1" aria-labelledby="multiClaimCoinPopup" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Claim</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Reward 1</small></div>
                                    <div><small>{_unClaimedDoge} MSDODGE</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Reward 2</small></div>
                                    <div><small>{_unClaimedLoria} CRYPTO</small></div>
                                 </div>

                                 {/* <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Penalty</small></div>
                                    <div><small>0.000</small></div>
                                 </div> */}
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button
                                          type="button"
                                          className="table-btn btn py-2 px-4 w-100 mb-3"
                                          onClick={multipleClaim}
                                       >Claim</button>
                                       {/* <div className="claim-btn-failed color5 py-2 px-4 w-100 text-center"><b>Transcation failed</b></div> */}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
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
export default connect(null, mapDispatchToProps)(AccountBalance);