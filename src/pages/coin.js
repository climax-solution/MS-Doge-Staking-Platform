import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import AccountBalanceStake from '../components/AccountBalance';
import AcountBalanceBonds from '../components/AcountBalanceBonds';
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import ListOfStakes from '../components/ListOfStakes';
import ListOfBounds from '../components/ListOfBounds';
import ListOfMigrate from '../components/ListOfMigrate';
import TotalMarketInfo from '../components/TotalMarketInfo/index';

import getWeb3 from '../components/utility/getWeb3.js';
import STAKING from "../contracts/Staking.json";
import MSDOGE from '../contracts/MSDOGE.json'
import XMSDOGE from "../contracts/XMSDOGE.json";
import XCRYPTO from "../contracts/XCRYPTO.json";
import CRYPTOLORIA from "../contracts/CRYPTOLORIA.json";
import { connect } from 'react-redux';
import config from "../config.json";
import AccountBalanceMigrate from '../components/AccountBalanceMigrate';
import TotalMarketInfoStake from '../components/TotalMarketInfo/TotalMarketInfoStake';
import TotalMarketMigrate from '../components/TotalMarketInfo/TotalMarketMigrate';
import edenSwap from '../assets/images/coin/edenSwap.png'
import DOGE from '../assets/images/coin/dogecoin.png'
import cryptoLogo from '../assets/images/cryptoLogo.png'

const { StakingAddress, DogeAddress, LoriaAddress, DogeRewardAddress, LoriaRewardAddress } = config;

function Coin(props) {

    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const [_web3, setWeb3] = useState({});
    const [_Stake, setStake] = useState({});
    const [_DogeCoin, setDogeCoin] = useState({});
    const [_LoriaCoin, setLoriaCoin] = useState({});
    const [_DogeReward, setDogeReward] = useState({});
    const [_LoriaReward, setLoriaReward] = useState({});
    const [_dogeBalance, setDogeBalance] = useState('---');
    const [_loriaBalance, setLoriaBalance] = useState('---');
    const [_ethBalance, setETHBalance] = useState("---");

    const [stakeBalance, setStakeBalance] = useState("stake")

    //data-bs-toggle="modal" data-bs-target="#exampleModal"
    useEffect(async () => {
        const web3 = await getWeb3();
        const Staking = new web3.eth.Contract(STAKING, StakingAddress);
        const Doge = new web3.eth.Contract(MSDOGE, DogeAddress);
        const Loria = new web3.eth.Contract(CRYPTOLORIA, LoriaAddress);
        const dogeReward = new web3.eth.Contract(XMSDOGE, DogeRewardAddress);
        const loriaReward = new web3.eth.Contract(XCRYPTO, LoriaRewardAddress);

        setWeb3(web3);
        setStake(Staking);
        setDogeCoin(Doge);
        setLoriaCoin(Loria);
        setDogeReward(dogeReward);
        setLoriaReward(loriaReward);

    }, [])

    useEffect(async (preprops) => {

        if (account || account && preprops != props) {
            let doge = await _DogeCoin.methods.balanceOf(account).call();
            let loria = await _LoriaCoin.methods.balanceOf(account).call();
            let eth = await _web3.eth.getBalance(account);
            doge = _web3.utils.fromWei(doge, 'gwei');
            eth = _web3.utils.fromWei(eth, 'ether');
            loria = _web3.utils.fromWei(loria, 'mwei');
            setETHBalance(Number(eth).toFixed(2));
            setDogeBalance(Number(doge).toFixed(2));
            setLoriaBalance(Number(loria).toFixed(2));
        }

        else {
            setDogeBalance("---");
            setLoriaBalance("---");
        }

    }, [account, props]);
    return (
        <>
            <Navbar />
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-coin-title">
                                {
                                    stakeBalance === "stake" ?
                                        <TotalMarketInfoStake />
                                        :
                                        stakeBalance === "bonding"

                                            ?

                                            <TotalMarketInfo />

                                            :

                                            <TotalMarketMigrate />
                                }
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">

                            {
                                stakeBalance === "stake" ?
                                    <AccountBalanceStake
                                        web3={_web3}
                                        dogeCoin={_DogeCoin}
                                        loriaCoin={_LoriaCoin}
                                        dogeReward={_DogeReward}
                                        loriaReward={_LoriaReward}
                                        dogeB={_dogeBalance}
                                        loriaB={_loriaBalance}
                                        ethB={_ethBalance}
                                        stake={_Stake}
                                    />
                                    :
                                    <AcountBalanceBonds />
                            }

                        </div>
                        <div className="col-md-7 col-lg-8" style={{padding: "0 0 0 calc(var(--bs-gutter-x) * .5)"}}>
                            <div className="msDogeStaking-container">
                                <div className="heading-text-stake ms">
                                    <h2>
                                        {
                                            stakeBalance === "stake" ?
                                                "MsDoge Staking"
                                                :
                                                "MsDoge Bonding"
                                        }
                                    </h2>
                                    <p>
                                        {
                                            stakeBalance === "stake" ?
                                                "List of stakes below"
                                                :
                                                "List of bonds below"
                                        }

                                    </p>
                                </div>
                                <div className="stake-bonds-outline-container">
                                    <div className={stakeBalance === "stake" ? "stake-btn" : stakeBalance === "bonding" ? "stake-btn-outline" : "stake-btn-outline"}>
                                        <a className="btn" onClick={() => setStakeBalance("stake")}>Stake</a>
                                    </div>

                                    <div className={stakeBalance === "bonding" ? "stake-btn" : stakeBalance === "bonding" ? "stake-btn-outline" : "stake-btn-outline"}>
                                        <a className="btn" onClick={() => setStakeBalance("bonding")} >Bonds</a>
                                    </div>

                                    <div data-bs-toggle="modal" data-bs-target="#migrateTransactionPopup" className={stakeBalance === "migrate" ? "stake-btn" : stakeBalance === "bonding" ? "stake-btn-outline" : "stake-btn-outline"}>
                                        <a className="btn" onClick={() => setStakeBalance("migrate")} >Migrate</a>
                                    </div>

                                    {/* <div data-bs-toggle="modal" data-bs-target="#migrateTransactionPopup" className={stakeBalance === "migrate" ? "stake-btn" : stakeBalance === "bonding" ? "stake-btn-outline" : "stake-btn-outline"}>
                                        <a className="btn" onClick={() => setStakeBalance("migrate")} >Migrate</a>
                                    </div> */}
                                </div>
                            </div>


                            {
                                stakeBalance === "stake" ?
                                    <ListOfStakes
                                        web3={_web3}
                                        dogeCoin={_DogeCoin}
                                        loriaCoin={_LoriaCoin}
                                        dogeReward={_DogeReward}
                                        loriaReward={_LoriaReward}
                                        dogeB={_dogeBalance}
                                        loriaB={_loriaBalance}
                                        ethB={_ethBalance}
                                        stake={_Stake}
                                    />
                                    :
                                    <ListOfBounds
                                    web3={_web3}
                                    stake={_Stake}
                                    dogeB={_dogeBalance}
                                    loriaB={_loriaBalance}
                                    loriaCoin={_LoriaCoin}
                                    coin={_DogeCoin}
                                    reward={_DogeReward} 
                                />

                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            { /* MODAL */}
         <div className="modal fade" id="migrateTransactionPopup" tabIndex="-1" aria-labelledby="msDogeApprove" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content migrateTransactionPopupContent">
                  <div className="modal-body popup-card-container rel">
                     <header className="d-flex justify-content-between pt-0 pb-0 align-items-center" style={{ background: "none" }}>
                        <div type="button" className="closebtn">
                           <img src={edenSwap} width="30" />
                        </div>

                        <div data-bs-toggle="modal" data-bs-target="#migrateTransactionPopup" className="cursor-pointer position-absolute migrateTransactionClose" style={{ right: "15px", top: "15px" }}>
                           <i className="fas fa-times-circle"></i>
                        </div>
                     </header>

                     <div className="heading-text-popupm">
                        <div className="input-bal">
                           <div className="row pt-5">

                              <div className="col-12">
                                 <div className="mt-3 mb-3">
                                    <div className="w-100 text-center">
                                       <div className="w-100 mb-2">
                                          <span><img src={DOGE} width="48px" /></span>
                                          <span><img src={cryptoLogo} width="48px" /></span>
                                       </div>
                                       <h3 className="mb-2"><b>72.4982</b></h3>
                                       <h6 className="mb-2"><b>USDC/UNI Pool Tokens</b></h6>
                                       <small>Learn more about Uniswap, chat with the team, <br />others in the community, Demo text. </small>
                                    </div>
                                 </div>
                              </div>

                              <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                 <b><small>MSDOGE Deposited:</small></b>
                                 <b><small>0.00007645</small></b>
                              </div>

                              <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                 <b><small>CRYPTO Deposited:</small></b>
                                 <b><small>1252526</small></b>
                              </div>

                              <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                 <b><small>Rates:</small></b>
                                 <b><small>1 MSDOGE = 0.000088374</small></b>
                              </div>

                              <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                 <b><small></small></b>
                                 <b><small>1 CRYPTO = 162738</small></b>
                              </div>

                              <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                 <b><small>Share of pool:</small></b>
                                 <b><small>0.00007645%</small></b>
                              </div>


                              <div className="col-sm-12">
                                 <div className="p-2 stake-btn">
                                    <a type="button" className="table-btn btn w-100">Confirm Transaction</a>
                                 </div>
                              </div>
                           </div>
                        </div>


                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    )
}

const mapStateToProps = ({ changed }) => ({
    updated: changed.updated
})

export default connect(mapStateToProps, null)(Coin);