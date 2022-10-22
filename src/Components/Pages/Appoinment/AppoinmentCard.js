import React from 'react';

const AppoinmentCard = ({ service,setTreatment }) => {
    const { slots, name } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>

                <p className='text-[red]'>{slots.length === 0 ? "Try another day" : slots[0]}</p>
                <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label disabled={slots.length === 0} onClick={()=> setTreatment(slots)} htmlFor="booking-modal" className="btn border-0 bg-gradient-to-r from-primary to-secondary p-3 px-5 text-white mt-5">Book Appoinment</label>
                    

                </div>
            </div>
        </div>
    );
};

export default AppoinmentCard;