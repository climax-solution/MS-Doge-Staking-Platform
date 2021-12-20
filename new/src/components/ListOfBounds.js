import React, { useState } from 'react'
import slogo from "../assets/images/icons/logo.png";

import metamask from "../assets/images/icons/metamask-icon.svg";
import coin from "../assets/images/icons/coin-base.jpg";
import fortmatic from "../assets/images/icons/fortmatic-icon.svg";
import wallet from "../assets/images/icons/wallet-icon.svg";

import logo from '../assets/images/favicon.png';

export default function ListOfBounds() {
   const [counter, setCounter] = useState(1);
   const [boundTabs, setBoundTabs] = useState(false);

   return (
      <React.Fragment>
         <div className="list-stake ms">
            <div className="row">
               <div className="col-12">
                  <table className="stake-list-sel fliter-box w-100 my-4 d-none d-md-block">
                     <tr>
                        <td className="p-2">
                           <select>
                              <option>Asset</option>
                              <option>Asset</option>
                              <option>Asset</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Balance</option>
                              <option>Balance</option>
                              <option>Balance</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Price</option>
                              <option>Price</option>
                              <option>Price</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>ROI</option>
                              <option>ROI</option>
                              <option>ROI</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Purchased</option>
                              <option>Purchased</option>
                              <option>Purchased</option>
                           </select>
                        </td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons eth">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI-ETH</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons eth">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI-ETH</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>

                  </table>
                  <ul className="stake-list-sel fliter-box d-flex flex-wrap my-4 ls p-0 d-block d-md-none">
                     <li className="col mb-3 mb-md-0 me-3">
                        <select>
                           <option>Asset</option>
                           <option>Asset</option>
                           <option>Asset</option>
                        </select>
                        <h5 className="mt-3"><b>09/10/2021</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Balance</option>
                           <option>Balance</option>
                           <option>Balance</option>
                        </select>
                        <h5 className="mt-3"><b>1.0 </b> MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Price</option>
                           <option>Price</option>
                           <option>Price</option>
                        </select>
                        <h5 className="mt-3"><b>0.5%</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>ROI</option>
                           <option>ROI</option>
                           <option>ROI</option>
                        </select>
                        <h5 className="mt-3">MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Purchased</option>
                           <option>Purchased</option>
                           <option>Purchased</option>
                        </select>
                        <h5 className="mt-3"><b className="text-read">$3,462,530</b></h5>
                     </li>
                     <li>
                        <button type="button" className="table-btn py-2 px-4">Bond</button>
                     </li>
                  </ul>

               </div>
            </div>
         </div>

         <div className="list-stake ms">
            <div className="d-flex justify-content-between list-stake-flexbox">
               <div className="heading-text-stake ms">
                  <p>List of Bonds Market below</p>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <table className="stake-list-sel fliter-box w-100 my-4 d-none d-md-block">
                     <tr>
                        <td className="p-2">
                           <select>
                              <option>Asset</option>
                              <option>Asset</option>
                              <option>Asset</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Bond</option>
                              <option>Bond</option>
                              <option>Bond</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Price</option>
                              <option>Price</option>
                              <option>Price</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>ROI</option>
                              <option>ROI</option>
                              <option>ROI</option>
                           </select>
                        </td>
                        <td className="p-2">
                           <select>
                              <option>Purchased</option>
                              <option>Purchased</option>
                              <option>Purchased</option>
                           </select>
                        </td>
                        <td className="p-2"></td>
                        <td className="p-2"></td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons eth">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI-ETH</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons eth">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI-ETH</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons eth">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI-ETH</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2"> <button style={{ fontSize: "11px" }} data-bs-toggle="modal" data-bs-target="#claimCoinPopup" type="button" className="table-btn btn py-2 px-4">Sold Out</button></td>
                        <td className="p-2">
                           <a className="dots text-read" data-bs-toggle="modal" data-bs-target="#cancelStake">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                     <tr className="m-0">
                        <td className="p-2">
                           <div className="bonds_data_set_coin_icons">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>

                           <div className="bonds_data_set_coin_icons eth">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0ZM15.829 8H9.277V13.194H7V15.055H9.277V17.008H7V18.868H9.277V24H15.829C19.769 24 22.767 21.905 23.92 18.869H26V17.009H24.376C24.416 16.679 24.436 16.341 24.436 15.999V15.953C24.436 15.649 24.42 15.349 24.389 15.055H26V13.195H23.959C22.835 10.114 19.814 8 15.829 8ZM21.913 18.869C20.906 20.944 18.742 22.331 15.829 22.331H11.109V18.869H21.913ZM22.477 15.055C22.519 15.362 22.541 15.677 22.541 15.999V16.044C22.541 16.373 22.518 16.694 22.474 17.008H11.108V15.055H22.478H22.477ZM15.83 9.666C18.756 9.666 20.927 11.09 21.928 13.194H11.108V9.666H15.828H15.83Z" fill="black" />
                              </svg>
                           </div>
                        </td>
                        <td className="p-2">
                           <h5><b>DAI-ETH</b> </h5>
                        </td>
                        <td className="p-2">
                           <h5><b>$838</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b>1.64%</b></h5>
                        </td>
                        <td className="p-2">
                           <h5><b className="text-read">$3,462,530</b></h5>
                        </td>
                        <td className="p-2 stake-btn"> <button type="button" className="table-btn btn py-2 px-4">Bond</button></td>
                        <td className="p-2">
                           <a href="#" className="dots">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                              </svg>
                           </a>
                        </td>
                     </tr>
                  </table>
                  <ul className="stake-list-sel fliter-box d-flex flex-wrap my-4 ls p-0 d-block d-md-none">
                     <li className="col mb-3 mb-md-0 me-3">
                        <select>
                           <option>Asset</option>
                           <option>Asset</option>
                           <option>Asset</option>
                        </select>
                        <h5 className="mt-3"><b>09/10/2021</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Bond</option>
                           <option>Bond</option>
                           <option>Bond</option>
                        </select>
                        <h5 className="mt-3"><b>1.0 </b> MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Price</option>
                           <option>Price</option>
                           <option>Price</option>
                        </select>
                        <h5 className="mt-3"><b>0.5%</b></h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>ROI</option>
                           <option>ROI</option>
                           <option>ROI</option>
                        </select>
                        <h5 className="mt-3">MsDoge</h5>
                     </li>
                     <li className="col mb-3 mb-md-0 me-3 text-center">
                        <select>
                           <option>Purchased</option>
                           <option>Purchased</option>
                           <option>Purchased</option>
                        </select>
                        <h5 className="mt-3"><b className="text-read">$3,462,530</b></h5>
                     </li>
                     <li>
                        <button type="button" className="table-btn py-2 px-4">Bond</button>
                     </li>
                  </ul>

               </div>
            </div>
         </div>
         {/* Modal */}
         <div className="modal fade" id="stakingModal" tabIndex="-1" aria-labelledby="stakingModalLabel" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content icon-text-block-cri">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Transactions</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="inner-bore p-3">
                                 <div className="row">
                                    <div className="col-6">
                                       <h4 className="mb-3">Input</h4>
                                       <input type="text" className="input-box" placeholder="0.5" />
                                    </div>
                                    <div className="col-6 text-end">
                                       <h4 className="mb-3">Balance: 1.14005 URUS</h4>
                                       <div className="small-logo-photo d-flex justify-content-end">
                                          <img src={slogo} width="20" />
                                          <div style={{ marginLeft: "10px" }}>MsDoge</div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row my-3">
                                 <div className="col-md-5">
                                    <div className="d-flex align-items-center sel-number-box">
                                       <div className="number me-3 d-flex justify-content-between">
                                          <span className="minus" onClick={(counter > 1 ? () => setCounter(counter - 1) : "")}>
                                             <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.75 0.25H11.25V1.75H0.75V0.25Z" fill="#161F2F" />
                                             </svg>
                                          </span>
                                          <input type="text" value={counter} />
                                          <span className="plus" onClick={() => setCounter(counter + 1)}>
                                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z" fill="#161F2F" />
                                             </svg>
                                          </span>
                                       </div>
                                       <p>Months</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-12">
                                    <p className="d-flex mb-5 qu-text">
                                       <div className="icon-box me-2 d-flex">
                                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fillRule="evenodd" clipRule="evenodd" d="M1.5 9C1.5 13.1423 4.85775 16.5 9 16.5C13.1423 16.5 16.5 13.1423 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5C4.85775 1.5 1.5 4.85775 1.5 9ZM15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9ZM9.75 11.25V12.75H8.25V11.25H9.75ZM9.75029 10.5V10.0162C10.983 9.64878 11.7681 8.44242 11.6048 7.16651C11.4415 5.8906 10.3779 4.92085 9.09237 4.87572C7.80685 4.83059 6.6779 5.72339 6.42554 6.9847L7.89704 7.27945C8.01319 6.69834 8.56023 6.30696 9.14773 6.38467C9.73522 6.46237 10.1617 6.9825 10.1228 7.57383C10.0839 8.16517 9.5929 8.62492 9.00029 8.62495C8.58607 8.62495 8.25029 8.96074 8.25029 9.37495V10.5H9.75029Z" fill="#171717" />
                                          </svg>
                                       </div>
                                       You can stake from 1 month to 7 years</p>
                                    <div className="apy-box rel px-3 py-4 text-center">
                                       <h4 className="green-box">0.5% APY</h4>
                                       <p>The APY is calculated by multiplying the amount of months staked with 0.5. Maximum of 20% APY. Please note that cancelling the stake early will penalize you. Refer to our documentation: <a href="#" className="click-btn">Click Here</a> </p>
                                    </div>
                                    <a className="mt-3 approve-btn text-white text-center py-4 w-100" data-bs-toggle="modal" data-bs-target="#msDogeApprove">Approve 0.5 MSDOGE</a>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}
         <div className="modal fade" id="connectWallet" tabIndex="-1" aria-labelledby="connectWallet" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content gray-bg">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close" style={{ right: "15px" }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.0001 8.82227L14.1251 4.69727L15.3034 5.8756L11.1784 10.0006L15.3034 14.1256L14.1251 15.3039L10.0001 11.1789L5.87511 15.3039L4.69678 14.1256L8.82178 10.0006L4.69678 5.8756L5.87511 4.69727L10.0001 8.82227Z" fill="black" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Connect to wallet</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12">
                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Metamask</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={wallet} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>WalletConnect</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={coin} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Coinbase</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={fortmatic} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Fortmatic</div>
                                    </div>

                                    <div className="connect-wallet-login-border d-flex">
                                       <img src={metamask} width="20" height="20" />
                                       <div style={{ margin: "auto auto" }}>Portis</div>
                                    </div>
                                 </div>

                                 <div className="col-sm-12">
                                    <div className="connect-wallet-popup text-center">
                                       <small><p>New to Ethereum? <a href="#" className="click-btn"> Learn more about MsDoge</a> </p></small>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div className="modal fade" id="claimCoinPopup" tabIndex="-1" aria-labelledby="claimCoinPopup" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Claim</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Reward 1</small></div>
                                    <div><small>1.14005 MSDODGE</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Reward 2</small></div>
                                    <div><small>234.145 CRYPTO</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Penalty</small></div>
                                    <div><small>0.000</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Bond</button>
                                       {/* <div className="claim-btn-failed color5 py-2 px-4 w-100 text-center"><b>Transcation failed</b></div> */}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div className="modal fade" id="cancelStake" tabIndex="-1" aria-labelledby="cancelStake" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center ">Stake Settings</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool reward</small></div>
                                    <div><small>1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Pool Stake</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>

                                 <div className="mb-4 col-sm-12 d-flex justify-content-between">
                                    <div><small>Penalty Pool reward</small></div>
                                    <div><small>Balance: 1.14005 URUS</small></div>
                                 </div>
                                 <div className="col-sm-12">
                                    <div className="p-2 stake-btn">
                                       <button type="button" className="table-btn color5 py-2 px-4 w-100 mb-3">Cancel Stake</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* Modal */}

         <div className="modal fade" id="msDogeApprove" tabIndex="-1" aria-labelledby="msDogeApprove" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <header className="d-flex justify-content-between pt-0 pb-0 align-items-center">
                        <div type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                           </svg>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                           <img src={logo} width="30px" height="30px" />
                           <h5 className="my-3 text-center">MsDoge</h5>
                        </div>

                        <div className="cursor-pointer">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.8194 20H8.1794C7.95133 20 7.7301 19.9221 7.5524 19.7792C7.3747 19.6362 7.2512 19.4368 7.2024 19.214L6.7954 17.33C6.25245 17.0921 5.73763 16.7946 5.2604 16.443L3.4234 17.028C3.20596 17.0973 2.97135 17.0902 2.75852 17.0078C2.54569 16.9254 2.36745 16.7727 2.2534 16.575L0.429396 13.424C0.316541 13.2261 0.274179 12.9958 0.309238 12.7708C0.344298 12.5457 0.454705 12.3392 0.622396 12.185L2.0474 10.885C1.98259 10.2961 1.98259 9.70189 2.0474 9.113L0.622396 7.816C0.454467 7.66177 0.343911 7.45507 0.308845 7.22978C0.273779 7.00449 0.316285 6.77397 0.429396 6.576L2.2494 3.423C2.36345 3.22532 2.54169 3.07259 2.75452 2.99019C2.96735 2.90778 3.20196 2.90066 3.4194 2.97L5.2564 3.555C5.5004 3.375 5.7544 3.207 6.0164 3.055C6.2694 2.913 6.5294 2.784 6.7954 2.669L7.2034 0.787C7.25197 0.564198 7.37523 0.364688 7.55274 0.221549C7.73026 0.0784098 7.95136 0.000239966 8.1794 0H11.8194C12.0474 0.000239966 12.2685 0.0784098 12.446 0.221549C12.6236 0.364688 12.7468 0.564198 12.7954 0.787L13.2074 2.67C13.4874 2.794 13.7614 2.933 14.0264 3.088C14.2734 3.231 14.5124 3.388 14.7424 3.557L16.5804 2.972C16.7977 2.90292 17.0321 2.91017 17.2447 2.99256C17.4573 3.07495 17.6354 3.22753 17.7494 3.425L19.5694 6.578C19.8014 6.985 19.7214 7.5 19.3764 7.817L17.9514 9.117C18.0162 9.70589 18.0162 10.3001 17.9514 10.889L19.3764 12.189C19.7214 12.507 19.8014 13.021 19.5694 13.428L17.7494 16.581C17.6353 16.7787 17.4571 16.9314 17.2443 17.0138C17.0314 17.0962 16.7968 17.1033 16.5794 17.034L14.7424 16.449C14.2655 16.8003 13.751 17.0975 13.2084 17.335L12.7954 19.214C12.7466 19.4366 12.6233 19.6359 12.4458 19.7788C12.2683 19.9218 12.0473 19.9998 11.8194 20V20ZM9.9954 6C8.93453 6 7.91711 6.42143 7.16697 7.17157C6.41682 7.92172 5.9954 8.93913 5.9954 10C5.9954 11.0609 6.41682 12.0783 7.16697 12.8284C7.91711 13.5786 8.93453 14 9.9954 14C11.0563 14 12.0737 13.5786 12.8238 12.8284C13.574 12.0783 13.9954 11.0609 13.9954 10C13.9954 8.93913 13.574 7.92172 12.8238 7.17157C12.0737 6.42143 11.0563 6 9.9954 6V6Z" fill="black" />
                           </svg>
                        </div>
                     </header>

                     <div className="heading-text-popupm">

                        <main className="d-flex justify-content-between w-100 " style={{ marginTop: "60px", marginBottom: "10px" }}>
                           <div>
                              <h6>Bond Discount</h6>
                              <h3><b className="text-gold">$838</b></h3>
                           </div>

                           <div>
                              <h6>Market Price</h6>
                              <h3><b className="text-gold">$878</b></h3>
                           </div>
                        </main>

                        <div className="boundTabs_container">
                           <button className={boundTabs === false ? "active" : ""} onClick={() => setBoundTabs(false)}>Bond</button>
                           <button className={boundTabs === false ? "" : "active"} onClick={() => setBoundTabs(true)}>Redeem</button>
                        </div>

                        {
                           boundTabs === false ? <form action="" style={{ marginTop: "15px" }}>
                              <div className="input-bal">
                                 <div className="row">
                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Your Balance</small></div>
                                       <div><small>0.0 Frax</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>You will get</small></div>
                                       <div><small>0 OHM</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Max you can buy</small></div>
                                       <div><small>172.4828 OHM</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>ROI</small></div>
                                       <div><small>1,64%</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Debt Ratio</small></div>
                                       <div><small>1,64%</small></div>
                                    </div>

                                    <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                       <div><small>Vesting Term</small></div>
                                       <div><small>5 days</small></div>
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="mt-3 mb-3">
                                          <p className="w-100 text-center">
                                             <h6>First time bonding MsDoge?Please approve olympus dao to use your MsDoge for bonding.</h6>
                                          </p>
                                       </div>
                                       <div className="p-2 stake-btn">
                                          <a type="button" className="table-btn btn py-2 px-4 w-100 mb-3" data-bs-toggle="modal" data-bs-target="#hadesPopup">Approve 0.5 URUS</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>

                              :

                              <form action="" style={{ marginTop: "15px" }}>
                                 <div className="input-bal">
                                    <div className="row">
                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Pending Rewards</small></div>
                                          <div><small>0.0 Frax</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Claimable Rewards</small></div>
                                          <div><small>0 OHM</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Time untill fully vested</small></div>
                                          <div><small></small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>ROI</small></div>
                                          <div><small>1,64%</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Debt Ratio</small></div>
                                          <div><small>1,64%</small></div>
                                       </div>

                                       <div className="mb-3 col-sm-12 d-flex justify-content-between">
                                          <div><small>Vesting Term</small></div>
                                          <div><small>5 days</small></div>
                                       </div>
                                       <div className="col-sm-12">
                                          <div className="mt-3 mb-3">
                                             <p className="w-100 text-center">
                                                <h6>First time bonding MsDoge?Please approve olympus dao to use your MsDoge for bonding.</h6>
                                             </p>
                                          </div>
                                          <div className="p-2 stake-btn">
                                             <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim</button>
                                             <button type="button" className="table-btn btn py-2 px-4 w-100 mb-3">Claim & Autostake</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                        }


                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}

         <div className="modal fade" id="hadesPopup" tabIndex="-1" aria-labelledby="hadesPopup" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-body popup-card-container rel">
                     <button type="button" className="closebtn" data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                     </button>
                     <div className="heading-text-popupm">
                        <h5 className="my-3 text-center">Hades</h5>
                        <form action="">
                           <div className="input-bal">
                              <div className="row">
                                 <div className="mb-4 col-sm-12">
                                    <div><small>Slippage</small></div>
                                    <div className="slippage_input_container">
                                       <input type="text" placeholder="0.5" />
                                       <span>%</span>
                                    </div>
                                    <p className="pl-3 slippage_description">
                                       <small> Transaction may revert if revert if price changes by more than slippage %</small>
                                    </p>
                                 </div>

                                 <div className="mb-4 col-sm-12 ">
                                    <div><small>Recipient Address</small></div>
                                    <div className="slippage_input_container">
                                       <input type="text" placeholder="" value="0xbaf9aklkrnlig832lflwe932l" />
                                       <span>%</span>
                                    </div>
                                    <p className="pl-3 slippage_description">
                                       <small> Choose recipient address. By default, this is your currently connected address</small>
                                    </p>
                                 </div>

                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </React.Fragment>
   )
}

