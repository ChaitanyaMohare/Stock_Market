import React from 'react';
 
function Education() {
    return ( 
         <div className="container">
            <div className="row">
                <div className="col-6 p-3 mt-5">
                    <img src='/images/education.svg' alt='Education'/>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col p-3 mt-5">
                        <h1 className='mb-3 mt-5'>Free and open Market Education</h1>
                        <p>Versity, the largest education platform on the stock market which will teach you, every thing related to the stocks how to buy how to cell</p>
                        <a  class className=" mt-3" href=''>Versity<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <p></p>
                        <p>Trading Q&A, the largest education platform on the stock market which will teach you, every thing related to the stocks how to buy how to cell</p>
                        <a  class className=" mt-3" href=''>Trading Q&A<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;