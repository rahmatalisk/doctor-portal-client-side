import React from 'react';
 

const Service = () => {
    return (
        <div>
            <h3 className='text-primary text-center text-2xl'>OUR SERVICES</h3>
            <h1 className='text-center text-5xl'>Services We Provide</h1>
            <div className='md:px-20 px-4 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-x-10 md:gap-x-10 my-10'>
                <div className="card bg-base-100 shadow-xl my-5">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Twrwtg1/fluoride.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-5">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/9HL6B2j/cavity.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl my-5">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/wMg8WW6/whitening.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;