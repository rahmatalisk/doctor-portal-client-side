import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='text-white px-1 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-x-10 md:gap-x-5 my-10'>
            <div className="card card-side bg-primary shadow-xl my-5 px-5">
                <figure><img src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className="card card-side bg-neutral shadow-xl my-5 px-5">
                <figure><img src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location</h2>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="card card-side bg-primary shadow-xl my-5 px-5">
                <figure><img  src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;