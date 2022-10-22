import React from 'react';

const DentalCare = () => {
    return (
        <div className="hero min-h-screen bg-base-200 md:px-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='md:w-1/2 md:px-20'>
                    <img src="https://i.ibb.co/XLypN0Z/treatment.png" className=" rounded-lg shadow-2xl w-100 " alt='' />
                </div>
                <div className='md:w-1/2 '>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn border-0 bg-gradient-to-r from-primary to-secondary p-3 px-5 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;