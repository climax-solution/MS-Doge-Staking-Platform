import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import MSDOGE from '../contracts/MSDOGE.json'
import Loading from '../components/Loading';
import { NotificationManager } from 'react-notifications';

const DogeAddress = "0x09C80b6F8Cd84fe90f109BB4Cd2331bE53E2f220";
const StakingAddress = "0x9945996eA20dE6158948D706428EE1bd6607CEde";
const RewardAddress = "0x803bB0c959f4D4c7A588e63914A9E91B971F5862";

export default function AccountBalance(props) {
   const {account} = useWeb3React();
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
               <h2 className="mb-2">{loriaB} <span>LORIA</span></h2>
               <h2 className="mb-2">{ethB} <span>ETH</span></h2>
            </div>
            <div className="withdraw-text ms mt-4">
               <div className="row border-top">
                  <div className="col-6 py-2">
                     <h3>{_totalStaking} <span>MSDOGE</span></h3>
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
                     <h3><span>Unclaimed reward</span> </h3>
                  </div>
               </div>
               <div className="row border-top">
                  <div className="col-6 py-2">
                     <h3>{_unClaimedLoria} <span>CRYPTO</span></h3>
                  </div>
                  <div className="col-6 py-2 text-end">
                     <h3><span>Unclaimed reward</span> </h3>
                  </div>
               </div>
               <div className="row border-top">
                  <div className="col-6 py-3 text-center">
                     <button
                        type="button"
                        className={`withdraw-btn mx-auto py-3 px-5 ${ _totalStaking && 'active'}`}
                        onClick={(e) => _totalStaking && withdraw() }
                     >
                        Unstake
                     </button>
                  </div>
                  <div className="col-6 py-3 text-center">
                     <button
                        type="button"
                        className={`withdraw-btn mx-auto py-3 px-5 ${ _unClaimedDoge && 'active'}`}
                        onClick={(e) => _unClaimedDoge && multipleClaim() }
                     >
                     Claim
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}