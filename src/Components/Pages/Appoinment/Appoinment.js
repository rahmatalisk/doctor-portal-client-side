import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AppointmentModal from './AppointmentModal';
import AvalablieAppoinment from './AvalablieAppoinment';
import Footer from '../../Sheared/Footer';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    const [treatment,setTreatment] = useState(null)
    return (
        <div>
            <AppoinmentBanner setDate={setDate} date={date}></AppoinmentBanner>
            <AvalablieAppoinment setTreatment={setTreatment} date={date}></AvalablieAppoinment>
            {
                treatment && <AppointmentModal treatment={treatment} setTreatment={setTreatment} date={date} ></AppointmentModal>
            }
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;