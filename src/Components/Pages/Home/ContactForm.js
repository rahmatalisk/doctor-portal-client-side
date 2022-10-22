import React from 'react';

const ContactForm = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/M8RddLC/appointment.png)] py-20'>
            <h3 className='text-xl text-secondary text-center'>Contact us</h3>
            <h3 className='text-4xl text-white text-center'>Stay connected with us</h3>
            <div className='flex flex-col mt-10'>
                <input type="email" placeholder="Enter Email Address" className="input input-bordered input-sm w-full max-w-xs my-2 mx-auto" />
                <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs my-2 mx-auto" />
                <textarea className="textarea textarea-bordered input-sm w-full max-w-xs my-2 h-24 mx-auto" placeholder="Message"></textarea>
            </div>
            <button className="btn border-0 bg-gradient-to-r from-primary to-secondary p-3 px-5 text-white block mx-auto mt-2">Submit</button>
        </div>
    );
};

export default ContactForm;