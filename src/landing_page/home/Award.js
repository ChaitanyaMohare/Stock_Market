import React from 'react';

function Award() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-6 p-5 mb-5">
                    <img src='/images/largestBroker.svg' alt='award'/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>Largest Stock Broker in INDIA</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order in India this is a huge trade mark of the company:</p>
                    <div className="row mt-2">
                        <div className="col-6">
                            <ul>
                                <p><li>Future stock</li></p>
                                  <p><li>Future stock</li></p>
                                    <p><li>Future stock</li></p>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                  <p><li>Future stock</li></p>
                                  <p><li>Future stock</li></p>
                                    <p><li>Future stock</li></p>
                            </ul>
                        </div>
                    </div>
                     <img src='/images/pressLogos.png' alt='News Logos' style={{width:"80%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Award;