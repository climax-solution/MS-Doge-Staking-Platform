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

const StakingAddress = "0x091b55913bc4Bfaa0a89B4C65a193870c6C902C2";
const DogeAddress = "0xA80A864d3B01532844c19001bFfd494e50382686";

export default function coin() {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const [_web3, setWeb3] = useState({});
    const [_Coin, setCoin] = useState({});
    const [_Stake, setStake] = useState({});

    useEffect(async() => {
        const web3 = await getWeb3();
        setWeb3(web3);
        const Coin = new web3.eth.Contract(MSDOGE, DogeAddress);
        const Staking = new web3.eth.Contract(STAKING, StakingAddress);
        setCoin(Coin);
        setStake(Staking);
    },[])

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
                            />
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <ListOfStakes
                                web3={_web3}
                                stake={_Stake}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
