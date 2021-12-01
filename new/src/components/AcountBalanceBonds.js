import React from 'react'
export default function AcountBalanceBonds() {
return (
<React.Fragment>
   <div className="gray-bg ms p-4 mb-4 mb-md-0">
      <div className="acc-heading-text ms">
         <h6 className="mb-3">Account balance</h6>
         <h2>574.00 <span>MSDOGE</span></h2>
         <h4 className="mb-2"><span style={{color: "#F7CE0E"}}>0.0448859</span> <span>CRYPTO</span></h4>
         <h4 className="mt-3">1.852342129 <span>ETH</span></h4>
      </div>
      <div className="withdraw-text ms mt-2">
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>MSDOGE</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Bonds in total</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>CRYPTO</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Bonds in total</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>MSDOGE</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Unclaimed reward</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-2">
               <h3>0 <span>CRYPTO</span></h3>
            </div>
            <div className="col-6 py-2 text-end">
               <h3><span>Unclaimed reward</span></h3>
            </div>
         </div>
         <div className="row border-top">
            <div className="col-6 py-3 text-center">
               <button type="button" className="withdraw-btn mx-auto py-3 px-5">
               Unstake
               </button>
            </div>
            <div className="col-6 py-3 text-center">
               <button type="button" className="withdraw-btn mx-auto py-3 px-5">
               Claim
               </button>
            </div>
         </div>
      </div>
   </div>
</React.Fragment>
)
}

