import React from 'react';

const Testimonial = () => {
    return (
        <div className='md:px-20 px-1'>
            <h4 className='text-primary font-bold text-xl'>Testimonial</h4>
            <h2 className='text-4xl'>What Our Patients Says</h2>
            <div className=' my-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-10'>
                <div className="card  bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions items-center mt-5">
                            <div className="avatar mr-2">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/Xpyfj24/people1.png" alt='' />

                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl'>Winson Herry</h2>
                                <p>California</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions items-center mt-5">
                            <div className="avatar mr-2">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/Jky3v7J/people2.png" alt='' />

                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl'> Herry</h2>
                                <p>India</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl my-10">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions items-center mt-5">
                            <div className="avatar mr-2">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://i.ibb.co/5jS8V1q/people3.png" alt='' />

                                </div>
                            </div>
                            <div>
                                <h2 className='text-2xl'>Bill Gates</h2>
                                <p>Amerika</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Testimonial;