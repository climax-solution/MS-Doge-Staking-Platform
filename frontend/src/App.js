import React from "react";
import { Web3ReactProvider } from "@web3-react/core"
import Web3Provider from "web3"
import { BrowserRouter as Router, Switch,Route,} from "react-router-dom"
import "./App.css";
import Coin from "./pages/coin";
import CoinBill from "./pages/coinBill";
function getLibrary(provider, connector) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        
        <Router>
          <Switch>
            <Route path="/" component={Coin} />
            <Route path="/coin-bill" component={CoinBill} />
          </Switch>
        </Router>
        
      </div>
    </Web3ReactProvider>
  );
}

export default App;
