import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 md:px-20 bg-[url('https://i.ibb.co/GtQYcfd/bg.png')]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='md:w-1/2' src="https://i.ibb.co/1MkX3hS/chair.png" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn border-0 bg-gradient-to-r from-primary to-secondary p-3 px-5 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;