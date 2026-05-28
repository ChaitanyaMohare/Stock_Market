import React from 'react';

function OpenAccount() {
    // Replace with your actual dashboard URL after deploying
    const dashboardUrl = "https://your-dashboard.vercel.app/signup";
    
    return (  
        <div className='container text-center p-3 mt-3 mb-3'>
             <h1 className='mt-5'> Open Account </h1>
                <p>Online platform to invest in stocks, derivatice, mutual funds and more...</p>
                <a href={dashboardUrl} target="_blank" rel="noopener noreferrer">
                    <button className="p-2 btn btn-primary mb-5" style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
                </a>
        </div>
    );
}

export default OpenAccount;