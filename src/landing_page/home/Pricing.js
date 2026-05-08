import React from 'react';
 function Pricing() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-4 p-3 mt-5">
                    <h1>Unbeatable Pricing</h1>
                    <p>The concept of discount broking and price consolation in India.We the revolution has came to the peak</p>
                    <a href=''>See Pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col p-3 border mt-5">
                        <h1 className='mb-3'>$0</h1>
                        <p>Free equity delivery and </p><p>mutual funds in bank</p>
                        </div>
                        <div className="col p-3 border mt-5">
                            <h1 className='mb-3'>$20</h1>
                            <p>Interday F&0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 }
 
 export default Pricing;