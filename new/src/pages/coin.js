import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import AccountBalanceStake from '../components/AccountBalance';
import AcountBalanceBonds from '../components/AcountBalanceBonds';
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import ListOfStakes from '../components/ListOfStakes';
import ListOfBounds from '../components/ListOfBounds';
import TotalMarketInfo from '../components/TotalMarketInfo/index';

import getWeb3 from '../components/utility/getWeb3.js';
import STAKING from "../contracts/Staking.json";
import MSDOGE from '../contracts/MSDOGE.json'
import XMSDOGE from "../contracts/XMSDOGE.json";
import XCRYPTO from "../contracts/XCRYPTO.json";
import CRYPTOLORIA from "../contracts/CRYPTOLORIA.json";
import { connect } from 'react-redux';
import config from "../config.json";

const {StakingAddress,DogeAddress,LoriaAddress,DogeRewardAddress,LoriaRewardAddress } = config;

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

    const [stakeBalance, setStakeBalance] = useState(false)

    //data-bs-toggle="modal" data-bs-target="#exampleModal"
    useEffect(async() => {
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

    },[])

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
  
     },[account, props]);
    return (
        <>
            <Navbar />
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-12">
                            <TotalMarketInfo />
                        </div>
                        <div className="col-md-5 col-lg-4">

                            {
                                stakeBalance === false ?
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
                                <AcountBalanceBonds
                                
                                />
                            }

                        </div>
                        <div className="col-md-7 col-lg-8">
                            <div className="d-flex justify-content-between">
                                <div className="heading-text-stake ms">
                                    <h2>MsDoge Staking</h2>
                                    <p>List of stakes below</p>
                                </div>
                                <div className="d-flex">
                                    <div className={stakeBalance === false ? "stake-btn" : "stake-btn-outline"}> 
                                        <a className="btn" onClick={() => setStakeBalance(false)}>Stake</a>
                                    </div>

                                    <div className={stakeBalance === false ? "stake-btn-outline" : "stake-btn"}>
                                        <a className="btn" onClick={() => setStakeBalance(true)} >Bonds</a>
                                    </div>

                                    <div className="stake-btn-outline">
                                        <a className="btn" data-bs-toggle="modal" data-bs-target="#msDogeApprove">Migrate</a>
                                    </div>
                                </div>
                            </div>

                            {
                                stakeBalance === false ?
                                    <ListOfStakes
                                        web3={_web3}
                                        stake={_Stake}
                                        dogeB={_dogeBalance}
                                        loriaB={_loriaBalance}
                                        loriaCoin={_LoriaCoin}
                                        coin={_DogeCoin}
                                        reward={_DogeReward}
                                    />
                                : <ListOfBounds />
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const mapStateToProps = ({ changed }) => ({
    updated: changed.updated
})

export default connect(mapStateToProps, null)(Coin);