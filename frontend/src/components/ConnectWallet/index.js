import React, {useState} from "react";
import { useWeb3React } from "@web3-react/core"
import './style.scss';

export default function ConnectWallet () {
  const [ConnectWallet, setConnectWallet] = React.useState(0);
  const { active, account, library, connector, activate, deactivate } = useWeb3React();
  const [modalAttr, setModalAttr] = useState({
    "data-bs-toggle": "modal",
    "data-bs-target": "#connectWallet"
  })
  // change useStare to 0 and 1
  // wallet connect = 1
  // wallet not connect = 0
  let CWName = '';
  if( active ){
    CWName = "CWNameTrue";
  }else{
    CWName = "CWNameFalse";
  }
  console.log(account);
  return (
    <>
      <a
        className={`wallet_connected ${CWName}`}
        { ...(!active && modalAttr)}
      >
        {
          active ? 
          <div className="Wallet-Connect">
            <p>{account.substr(0, 6) + "..." + account.substr(-4)}</p>
          </div>
          :
          <div className="Wallet-NotConnect">
            <p>Connect Wallet</p>
          </div>
        }
      </a>
    </>
  );
}