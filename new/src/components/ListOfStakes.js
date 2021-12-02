import React, { useEffect, useState } from 'react'
import { useWeb3React } from "@web3-react/core"
import { NotificationManager } from "react-notifications";
import HumanizeDuration from "humanize-duration";
import { injected } from "../components/wallet/connectors"
import Loading from '../components/Loading';
import metamask from "../assets/images/icons/metamask-icon.svg";
import coin from "../assets/images/icons/coin-base.jpg";
import fortmatic from "../assets/images/icons/fortmatic-icon.svg";
import wallet from "../assets/images/icons/wallet-icon.svg";
import logo from '../assets/images/favicon.png';
import { connect } from 'react-redux';
const StakingAddress = "0x9945996eA20dE6158948D706428EE1bd6607CEde";

function ListOfStakes(props) {
   const { account, activate } = useWeb3React();
   const [boundTabs, setBoundTabs] = useState(false);
   const {
      web3,
      stake: _Staking,
      balance,
      coin: _MSDOGE,
      reward: _XMSDOGE, 
      loriaCoin: _LORIACOIN,
   } = props;

   const [_stakedList, setStakedList] = useState([]);
   const [_stakingAmount, setStakingAmount] = useState('');
   const [isLoading, setLoading] = useState(false);
   const [activeIdx, setActiveIdx] = useState(-1);
   const [modalAttr, setModalAttr] = useState({
      "data-bs-toggle": "modal",
      "data-bs-target": "#exampleModal"
   })

   useEffect(async() => {
      if  (account && _Staking) await getStakedList();
   },[account])

   useEffect(async(preprops) => {
      if (preprops != props && account && _Staking) await getStakedList();
   },[props])

   const connectMetamask = () => {
      try {
         activate(injected)
       } catch (ex) {
         console.log(ex);
       }
   }

   const getStakedList = async() => {
      const list = await _Staking.methods.getStakedList().call({ from : account });
      setStakedList(list);
   }

   
   
   const Claim = async() => {
      setLoading(true);
      const DogeR = _stakedList[activeIdx]._initBalance;
      const LoriaR = _stakedList[activeIdx]._initBalance / 1000;

      await _MSDOGE.methods.approve(StakingAddress, DogeR).send({ from: account });
      await _LORIACOIN.methods.approve(StakingAddress, LoriaR).send({ from: account });

      const receipt = await _Staking.methods.claim(activeIdx).send({ from: account });
      NotificationManager.success('Claimed Success', ':O');
      setLoading(false);
   }

   return (
      <React.Fragment>
         { isLoading && <Loading/> }
         <div className="list-stake ms">
           
            <div className="row">
               <div className="col-12">
                  <table className="stake-list-sel fliter-box w-100 my-4 d-none d-md-block">
                     <thead>
                        <tr>
                           <td className="p-2">
                              <select>
                                 <option>Start date</option>
                                 <option>Start date</option>
                                 <option>Start date</option>
                              </select>
                           </td>
                           <td className="p-2">
                              <select>
                                 <option>Amount of stake</option>
                                 <option>Amount of stake</option>
                                 <option>Amount of stake</option>
                              </select>
                           </td>
                           <td className="p-2">
                              <select>
                                 <option>APY</option>
                                 <option>APY</option>
                                 <option>APY</option>
                              </select>
                           </td>
                           <td className="p-2">
                              <select>
                                 <option>Amount of reward</option>
                                 <option>Amount of reward</option>
                                 <option>Amount of reward</option>
                              </select>
                           </td>
                           <td className="p-2">
                              <select>
                                 <option>Remaining time</option>
                                 <option>Remaining time</option>
                                 <option>Remaining time</option>
                              </select>
                           </td>
                           <td className="p-2"></td>
                           <td className="p-2"></td>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           _stakedList.map((item, idx) => {
                              const createdAt = new Date(Number(item._created_at) * 1000);
                              const updatedDoge = Number(item._updated_doge) * 1000;
                              const updatedLoria = Number(item._updated_loria) * 1000;
                              const now = Date.now();
                              const duration = 24 * 25 * 3600 * 1000;
                              const elig = item._stakedToken ? item._dogeEli : item._loriaEli;
                              const claimable = now - updatedDoge >= elig * duration ? true : false;
                              return (
                                 <tr className="m-0 mt-1" key={idx}>
                                    <td className="p-2">
                                       <h5><b>{createdAt.toLocaleDateString()}</b></h5>
                                    </td>
                                    <td className="p-2">
                                       <h5>
                                          <b>
                                             {
                                                web3.utils.fromWei(item._initBalance, `${item._stakedToken == 0 ? "gwei" : "mwei"}`)
                                             }
                                          </b> {item._stakedToken == 0 ? "MSDOGE" : "CRYPTO"}</h5>
                                    </td>
                                    <td className="p-2">
                                       <h5><b>{item._dogeAPY}%</b> <br /><b>{item._loriaAPY}%</b></h5>
                                    </td>
                                    <td className="p-2">
                                       <h5>
                                          {web3.utils.fromWei(item._claimedDoge, "gwei")} MSDOGE <br /> {web3.utils.fromWei(item._claimedLoria, "mwei")} LORIA</h5>
                                    </td>
                                    <td className="p-2">
                                       <h5>
                                          {
                                             claimable ? <b className="text-read green">Ready to claim</b>
                                             :<b className="text-read red">
                                                {
                                                   HumanizeDuration(now - updatedDoge, {
                                                      round: true,
                                                      units: ["d", "h","m"],
                                                      language: "shortEn",
                                                      languages: {
                                                         shortEn: {
                                                            y: () => "y",
                                                            mo: () => "mo",
                                                            w: () => "w",
                                                            d: () => "d",
                                                            h: () => "h",
                                                            m: () => "min",
                                                            s: () => "s",
                                                            ms: () => "ms",
                                                         },
                                                      },
                                                   })
                                                }
                                                <br/>
                                                {
                                                   HumanizeDuration(now - updatedLoria, {
                                                      round: true,
                                                      units: ["d", "h","m"],
                                                      language: "shortEn",
                                                      languages: {
                                                         shortEn: {
                                                            y: () => "y",
                                                            mo: () => "mo",
                                                            w: () => "w",
                                                            d: () => "d",
                                                            h: () => "h",
                                                            m: () => "min",
                                                            s: () => "s",
                                                            ms: () => "ms",
                                                         },
                                                      },
                                                   })
                                                }
                                             </b>
                                          }
                                       </h5>
                                    </td>
                                    <td className="p-2">
                                       <button
                                          type="button"
                                          {
                                             ...(claimable && {
                                                "data-bs-toggle" : "modal",
                                                "data-bs-target" : "#claimCoinPopup"
                                             })
                                          }
                                          className={`table-btn py-2 px-4 ${claimable && 'btn'}`}
                                          onClick={( claimable ? () => setActiveIdx(idx) : () => null )}
                                       >Claim</button>
                                    </td>
                                    <td className="p-2">
                                       <a
                                          href="#"
                                          className="dots"
                                          data-bs-toggle="modal"
                                          {
                                             ...(claimable &&
                                                {
                                                   "data-bs-target" : "#cancelStake"
                                                }
                                             )
                                          }
                                       >
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                          </svg>
                                       </a>
                                    </td>
                                 </tr>
                              )
                           })
                        }
                        
                        {/* <tr className="m-0 mt-1">
                           <td className="p-2">
                              <h5><b>09/10/2021</b></h5>
                           </td>
                           <td className="p-2">
                              <h5><b>1.0 </b> MsDoge</h5>
                           </td>
                           <td className="p-2">
                              <h5><b>0.5%</b> <br /><b>0.5%</b></h5>
                           </td>
                           <td className="p-2">
                              <h5>10 MSDOGE <br /> 10 LORIA</h5>
                           </td>
                           <td className="p-2">
                              <h5><b className="text-read green">Ready to claim</b></h5>
                           </td>
                           <td className="p-2 stake-btn"> <button data-bs-toggle="modal" data-bs-target="#claimCoinPopup" type="button" className="table-btn btn py-2 px-4">Claim</button></td>
                           <td className="p-2">
                              <a className="dots text-read" data-bs-toggle="modal" data-bs-target="#cancelStake">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                 </svg>
                              </a>
                           </td>
                        </tr> */}
                        {
                           !_stakedList.length &&
                              <tr className="empty-row pt-3 pb-3 mt-1">
                                 <td colSpan="7" className="justify-content-center w-100">No Stake</td>
                              </tr>
                        }
                     </tbody>
                  </table>
                  <ul className="stake-list-sel fliter-box d-flex flex-wrap my-4 ls p-0 d-block d-md-none">
                     <li className="col mb-3 mb-md-0 me-3">
                        <select>
                           <option>Start date</option>
                           <option>Start date</option>
                           <option>Start date</option>
                        </select>
                        <h5 className="mt-3"><b>09/10/2021</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Amount of stake</option>
                           <option>Amount of stake</option>
                           <option>Amount of stake</option>
                        </select>
                        <h5 className="mt-3"><b>1.0 </b> MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>APY</option>
                           <option>APY</option>
                           <option>APY</option>
                        </select>
                        <h5 className="mt-3"><b>0.5%</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Amount of reward</option>
                           <option>Amount of reward</option>
                           <option>Amount of reward</option>
                        </select>
                        <h5 className="mt-3">MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Remaining time</option>
                           <option>Remaining time</option>
                           <option>Remaining time</option>
                        </select>
                        <h5><b className="text-read red">30d 10:28 <br /> 30d 10:28</b></h5>
                     </li>
                     <li>
                        <button type="button" className="table-btn py-2 px-4">Claim</button>
                     </li>
                  </ul>

               </div>
            </div>
         </div>
         

         {/* Modal */}
         <div className="modal fade" id="connectWallet" tabIndex="-1" aria-labelledby="connectWallet" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content gray-bg">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close" style={{ right: "15px" }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.0001 8.82227L14.1251 4.69727L15.3034 5.8756L11.1784 10.0006L15.3034 14.1256L14.1251 15.3039L10.0001 11.1789L5.87511 15.3039L4.69678 14.1256L8.82178 10.0006L4.69678 5.8756L5.87511 4.69727L10.0001 8.82227Z" fill="black" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Connect to wallet</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12">
                                    <div className="connect-wallet-login-border d-flex" onClick={() => connectMetamask() }>
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Metamask</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={wallet} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>WalletConnect</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={coin} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Coinbase</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={fortmatic} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Fortmatic</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Portis</div>
                                    </div>
                                 </div>

                                 <div className="col-sm-12">
                                    <div className="connect-wallet-popup text-center">
                                       <small><p>New to Ethereum? <a href="#" className="click-btn"> Learn more about MsDoge</a> </p></small>
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

         <div className="modal fade" id="claimCoinPopup" tabIndex="-1" aria-labelledby="claimCoinPopup" aria-hidden="true">
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
                                    <div><small>1.14005 MSDODGE</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Reward 2</small></div>
                                    <div><small>234.145 CRYPTO</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Penalty</small></div>
                                    <div><small>0.000</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim</button>
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
                                    <div><small>Pool reward</small></div>
                                    <div><small>1.14005 MSDOGE</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Stake</small></div>
                                    <div><small>Balance: 1.14005 MSDOGE</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Penalty Pool reward</small></div>
                                    <div><small>Balance: 1.14005 MSDOGE</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn color5 py-2 px-4 w-100 mb-3">Cancel Stake</button>
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

         <div className="modal fade" id="msDogeApprove" tabIndex="-1" aria-labelledby="msDogeApprove" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <header className="d-flex justify-content-between pt-0 pb-0 align-items-center">
                        <div type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                           </svg>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                           <img src={logo} width="30px" height="30px" />
                           <h5 className="my-3 text-center">MsDoge</h5>
                        </div>

                        <div className="cursor-pointer">
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
                                          <div className="w-100 text-center">
                                             <h6>First time bonding MsDoge?Please approve olympus dao to use your MsDoge for bonding.</h6>
                                          </div>
                                       </div>
                                       <div className="p-2 stake-btn">
                                          <a type="button" className="table-btn btn py-2 px-4 w-100 mb-3" data-bs-toggle="modal" data-bs-target="#hadesPopup">Approve 0.5 URUS</a>
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
                                          <div className="mt-3 mb-3">
                                             <div className="w-100 text-center">
                                                <h6>First time bonding MsDoge?Please approve olympus dao to use your MsDoge for bonding.</h6>
                                             </div>
                                          </div>
                                          <div className="p-2 stake-btn">
                                             <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim</button>
                                             <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim & Autostake</button>
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

         {/* Modal */}

         <div className="modal fade" id="hadesPopup" tabIndex="-1" aria-labelledby="hadesPopup" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center">Hades</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12">
                                    <div><small>Slippage</small></div>
                                    <div className="slippage_input_container">
                                       <input type="text" placeholder="0.5" />
                                       <span>%</span>
                                    </div>
                                    <p className="pl-3 slippage_description">
                                       <small> Transaction may revert if revert if price changes by more than slippage %</small>
                                    </p>
                                 </div>

                                 <div className="mb-4 col-sm-12 ">
                                    <div><small>Recipient Address</small></div>
                                    <div className="slippage_input_container">
                                       <input
                                          type="text"
                                          placeholder=""
                                          value="0xbaf9aklkrnlig832lflwe932l"
                                          readOnly
                                       />
                                       <span>%</span>
                                    </div>
                                    <p className="pl-3 slippage_description">
                                       <small> Choose recipient address. By default, this is your currently connected address</small>
                                    </p>
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

const mapStateToProps = ({ changed }) => ({
   updated: changed.updated
})

export default connect(mapStateToProps, null)(ListOfStakes);