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
import XMSDOGE from "../contracts/XMSDOGE.json";

const StakingAddress = "0x7192Fc21292691aDC99c9012B43481f390b9A329";
const DogeAddress = "0x09C80b6F8Cd84fe90f109BB4Cd2331bE53E2f220";
const RewardAddress = "0x803bB0c959f4D4c7A588e63914A9E91B971F5862";

export default function coin() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const [_web3, setWeb3] = useState({});
    const [_Coin, setCoin] = useState({});
    const [_Stake, setStake] = useState({});
    const [_Reward, setReward] = useState({});
    const [_balance, setBalance] = useState('---');

    useEffect(async() => {
        const web3 = await getWeb3();
        setWeb3(web3);
        const Coin = new web3.eth.Contract(MSDOGE, DogeAddress);
        const Staking = new web3.eth.Contract(STAKING, StakingAddress);
        const RewardToken = new web3.eth.Contract(XMSDOGE, RewardAddress);
        setReward(RewardToken);
        setCoin(Coin);
        setStake(Staking);
    },[])

    useEffect(async () => {
      
        if (account) {
           const balance = await _Coin.methods.balanceOf(account).call();
           setBalance(_web3.utils.fromWei(balance, 'gwei'));
        }
        else setBalance("---");
  
     },[account]);

    return (
        <React.Fragment>
            <Navbar />
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
                                reward={_Reward}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
