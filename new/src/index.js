import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from "@web3-react/core"
import Web3Provider from "web3"
import { Provider } from 'react-redux';
import store from './store';

import './index.css';
import App from './App';

function getLibrary(provider, connector) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
reportWebVitals();
