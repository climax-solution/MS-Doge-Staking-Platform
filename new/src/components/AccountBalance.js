import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import Loading from '../components/Loading';
import { NotificationManager } from 'react-notifications';
import slogo from "../assets/images/icons/logo.png";

const StakingAddress = "0x9945996eA20dE6158948D706428EE1bd6607CEde";

export default function AccountBalance(props) {
   const { active, account} = useWeb3React();
   const {
      web3,
      dogeB,
      loriaB,
      ethB,
      loriaCoin: _LORIACOIN,
      coin: _MSDOGE,
      stake: _Staking,
      reward: _XMSDOGE
   } = props;
   const [counter, setCounter] = useState(1);
   const [_totalStaking, setTotalStaking] = useState(0);
   const [_unClaimedDoge, setUnClaimedDoge] = useState(0);
   const [_unClaimedLoria, setUnClaimedLoria] = useState(0);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(async() => {
      if (account) {
         const list = await _Staking.methods.getStakedList().call({ from : account });
         let totalStaking = 0;
         let unCliamedDoge = 0;
         let unClaimedLoria = 0;

         list.map(item => {
            const initDoge = Number(web3.utils.fromWei(item._initBalance, 'gwei'));
            const initLoria = Number(web3.utils.fromWei(item._initBalance, 'mwei'));
            const rate = Number(item._rate);
            totalStaking += initDoge;
            const updatedAt = Number(item._updated_at) * 1000;
            const now = Date.now();
            const duration = 24 * 25 * 3600 * 1000;
            let diffDoge = (now - updatedAt) / duration;
            let diffLoria = (now - updatedAt) / duration;
            // diff = Math.floor(diff);
            diffDoge = 1; diffLoria = 1;
            if (diffDoge > 0) {
               unCliamedDoge += initDoge * rate / 100 * diffDoge;
               unClaimedLoria += initLoria * rate / 100 / 1000 * diffLoria;
            }
         })
         setTotalStaking(totalStaking);
         setUnClaimedDoge(unCliamedDoge);
         setUnClaimedLoria(unClaimedLoria);
      }
   },[account]);

   const withdraw = async() => {
      setIsLoading(true);
      try {
         const total = web3.utils.toWei(_totalStaking.toString(), 'gwei');
         await _XMSDOGE.methods.approve(StakingAddress, total).send({ from: account });
         await _MSDOGE.methods.approve(StakingAddress, total).send({ from: account });
         await _Staking.methods.withdraw(total).send({ from: account })
         .on('receipt', res => {
            NotificationManager.succes(":D")
            setIsLoading(false);
         })
      } catch (err) {
         setIsLoading(false);
      }
   }

   const multipleClaim = async() => {
      setIsLoading(true);
      await _MSDOGE.methods.approve(StakingAddress, web3.utils.toWei((_unClaimed * 2).toString(), 'gwei')).send({ from: account });
      await _Staking.methods.multipleClaim().send({ from: account });
      NotificationManager.info(";)");
      setIsLoading(false);
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
                     <h3>0 <span>LORIA</span></h3>
                  </div>
                  <div className="col-6 py-2 text-end">
                     <h3><span>Unclaimed reward</span></h3>
                  </div>
               </div>
               <div className="row justify-content-center border-top">
                  <div className="col-6 py-3 text-center">
                     <button
                        type="button"
                        className="withdraw-btn mx-auto py-3 px-5"
                        {
                           ...(
                              active && {
                                 "data-bs-target" : "#exampleModal",
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
                     <button type="button" className="withdraw-btn mx-auto py-3 px-5">
                     Unstake
                     </button>
                  </div>
                  <div className="col-6 py-3 text-center">
                     <button type="button" className="withdraw-btn mx-auto py-3 px-5">
                     Claim
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/* Modal */}
         <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <form action="">
                           <div className="input-bal">
                              <div className="inner-bore p-3">
                                 <div className="row">
                                    <div className="col-6">
                                       <h4 className="mb-3">Input</h4>
                                       <input type="text" className="input-box" placeholder="0.5" />
                                    </div>
                                    <div className="col-6 text-end">
                                       <h4 className="mb-3">Balance: {dogeB} MSDOGE</h4>
                                       <div className="small-logo-photo d-flex justify-content-end">
                                          <img src={slogo} width="20" />
                                          <div style={{marginLeft: "10px"}}>MsDoge</div>
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
                                          <span className="plus" onClick={() => setCounter(counter + 1)}>
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
                                    <button className="mt-3 approve-btn text-white text-center py-4 w-100">Approve 0.5 MSDOGE</button>
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

