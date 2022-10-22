import React from 'react';
import { format } from 'date-fns';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const AppointmentModal = ({ treatment, date,setTreatment }) => {
    const [user] = useAuthState(auth);
    const notify = () => toast("Succesfully Booking!");
    const handleSubmit = async (event) => {
        event.preventDefault()
        const date = await event.target.date.value;
        const time = await event.target.time.value;
        const number = await event.target.number.value;
        const email = await event.target.email.value;
        const name = await event.target.name.value;
        console.log(date, time)
        setTreatment(null)
        const booked = {email,name,date,time,number}

        const postBooking = async()=>{
            fetch('http://localhost:5000/booking',{
                method:"POST",
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(booked)
            })
            .then(res => res.json())
            .then(data => {
                console.log(user)
                notify()
                
            })
        }
        postBooking()
        // console.log(treatment)
    }
    return (

        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box py-20 ">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 justify-items-center p-0'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs sm:w-80" name='date' disabled />
                        <select className="select select-bordered w-full max-w-xs" name='time'>
                            {treatment &&
                                treatment.map(treat => <option value={treat}>{treat}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" name='name' value={user?.displayName} disabled/>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" name='email' value={user?.email} disabled />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" name='number'/>
                        <input type="submit" className="input input-bordered w-full max-w-xs btn btn-primary text-white" />

                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;