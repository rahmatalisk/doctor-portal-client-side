import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoinmentBanner = ({date, setDate}) => {
    

    // let footer = <p>Please pick a day.</p>;
    // if (date) {
    //   footer = <p>You picked {format(date, 'PP')}.</p>;
    // }
    return (
        <div className="hero min-h-screen md:px-20 px-1 bg-[url('https://i.ibb.co/GtQYcfd/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/1MkX3hS/chair.png" className="max-w-sm rounded-lg shadow-2xl md:w-1/2" alt='' />
                <div className='md:w-1/2'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;