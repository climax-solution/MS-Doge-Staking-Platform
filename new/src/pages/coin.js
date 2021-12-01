import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import AccountBalanceStake from '../components/AccountBalance';
import AcountBalanceBonds from '../components/AcountBalanceBonds';
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import ListOfStakes from '../components/ListOfStakes';
import ListOfBounds from '../components/ListOfBounds';
import TotalMarketInfo from '../components/TotalMarketInfo/index';

import MSDOGE from '../contracts/MSDOGE.json'
import getWeb3 from '../components/utility/getWeb3.js';
import STAKING from "../contracts/Staking.json";
import XMSDOGE from "../contracts/XMSDOGE.json";
import CRYPTOLORIA from "../contracts/CRYPTOLORIA.json";

const StakingAddress = "0x9945996eA20dE6158948D706428EE1bd6607CEde";
const DogeAddress = "0x09C80b6F8Cd84fe90f109BB4Cd2331bE53E2f220";
const LoriaAddress = "0xeA58d5AFddDb7d591aB4783AD07706816e4164Df";
const DogeReward = "0x803bB0c959f4D4c7A588e63914A9E91B971F5862";
const LoriaReward = "0x507A1c5a8041203999cCcaD4d6d9386bfB420757";

export default function Coin() {

    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const [_web3, setWeb3] = useState({});
    const [_Coin, setCoin] = useState({});
    const [_Stake, setStake] = useState({});
    const [_Reward, setReward] = useState({});
    const [_dogeBalance, setDogeBalance] = useState('---');
    const [_loriaBalance, setLoriaBalance] = useState('---');
    const [_ethBalance, setETHBalance] = useState("---");
    const [_LoriaCoin, setLoriaCoin] = useState({});

    const [stakeBalance, setStakeBalance] = useState(false)

    //data-bs-toggle="modal" data-bs-target="#exampleModal"
    useEffect(async() => {
        const web3 = await getWeb3();
        setWeb3(web3);
        const Coin = new web3.eth.Contract(MSDOGE, DogeAddress);
        const Staking = new web3.eth.Contract(STAKING, StakingAddress);
        const RewardToken = new web3.eth.Contract(XMSDOGE, DogeReward);
        const Loria = new web3.eth.Contract(CRYPTOLORIA, LoriaAddress);
        setReward(RewardToken);
        setCoin(Coin);
        setStake(Staking);
        setLoriaCoin(Loria);
    },[])

    useEffect(async () => {
      
        if (account) {
            let doge = await _Coin.methods.balanceOf(account).call();
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
  
     },[account]);
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
                                    coin={_Coin}
                                    dogeB={_dogeBalance}
                                    loriaB={_loriaBalance}
                                    ethB={_ethBalance}
                                    loriaCoin={_LoriaCoin}
                                    stake={_Stake}
                                    reward={_Reward}
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
                                        coin={_Coin}
                                        reward={_Reward}
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
