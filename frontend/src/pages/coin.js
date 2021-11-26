import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import AccountBalance from '../components/AccountBalance';
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import ListOfStakes from '../components/ListOfStakes';
import TotalMarketInfo from '../components/TotalMarketInfo/index';
import MSDOGE from '../contracts/MSDOGE.json'
import getWeb3 from '../components/utility/getWeb3.js';
import STAKING from "../contracts/Staking.json";
import Loading from '../components/Loading';

const StakingAddress = "0x8D619aeA6A443c1cE564deF31c287FfEA2B88Fa4";
const DogeAddress = "0x09C80b6F8Cd84fe90f109BB4Cd2331bE53E2f220";
const RewardAddress = "0xd5e1b16d2619049E8a8feeC2557026adD996b672";

export default function coin() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const [_web3, setWeb3] = useState({});
    const [_Coin, setCoin] = useState({});
    const [_Stake, setStake] = useState({});
    const [_balance, setBalance] = useState('---');

    useEffect(async() => {
        const web3 = await getWeb3();
        setWeb3(web3);
        const Coin = new web3.eth.Contract(MSDOGE, DogeAddress);
        const Staking = new web3.eth.Contract(STAKING, StakingAddress);
        setCoin(Coin);
        setStake(Staking);
    },[])

    useEffect(async () => {
      
        if (account) {
           const balance = await _Coin.methods.balanceOf(account).call();
           setBalance(_web3.utils.fromWei(balance, 'gwei'));
        }
        else setBalance("---");
  
     },[account])
    return (
        <React.Fragment>
            <Navbar />
            <Loading/>
            <div className="coin-main py-60 ms">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-12">
                            <TotalMarketInfo />
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <AccountBalance
                                web3={_web3}
                                coin={_Coin}
                                balance={_balance}
                            />
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <ListOfStakes
                                web3={_web3}
                                stake={_Stake}
                                balance={_balance}
                                coin={_Coin}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
