import React from 'react';

const AppointmentAd = () => {
    return (
        <div className="hero bg-[url(https://i.ibb.co/M8RddLC/appointment.png)] text-white px-1 md:px-20 p-0 my-24">
            <div className="hero-content flex-col lg:flex-row p-0">
                <div className='md:w-1/2 mr-auto hidden md:block'>
                    <img src="https://i.ibb.co/4RN4RK8/doctor-small.png" className="rounded-lg  mt-[-100px] bg-none h-96" alt='' />
                </div>
                <div className='md:w-1/2 p-1 mx-auto'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-0 bg-gradient-to-r from-primary to-secondary p-3 px-5 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentAd;