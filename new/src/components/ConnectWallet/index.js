import React, {useState} from "react";
import { useWeb3React } from "@web3-react/core"
import './style.scss';

export default function ConnectWallet () {
  const { account, active } = useWeb3React();
  const [modalAttr, setModalAttr] = useState({
    "data-bs-toggle": "modal",
    "data-bs-target": "#connectWallet"
  })

  return (
    <>
      <a
        className={`wallet_connected ${ active ? 'CWNameTrue' : 'CWNameFalse' }`}
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

