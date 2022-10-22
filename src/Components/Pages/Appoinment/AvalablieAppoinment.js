import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentCard from './AppoinmentCard';

const AvalablieAppoinment = ({ date,setTreatment }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/available')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    //  let footer = <p>Please pick a day.</p>;
    // if (date) {
    //   footer = <p>You picked {format(date, 'PP')}.</p>;
    // }
    return (
        <div className='md:px-20 mb-10 px-1'>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <p className='text-center text-2xl'>Please book a appointment!!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppoinmentCard key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppoinmentCard>)
                }
            </div>

        </div>
    );
};

export default AvalablieAppoinment;