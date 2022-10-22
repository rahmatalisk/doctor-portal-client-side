import React from 'react';
import AppointmentAd from './AppointmentAd';
import Banner from './Banner';
import ContactForm from './ContactForm';
import DentalCare from './DentalCare';
import Footer from '../../Sheared/Footer';
import Info from './Info';
import Service from './Service';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <DentalCare></DentalCare>
            <AppointmentAd></AppointmentAd>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;