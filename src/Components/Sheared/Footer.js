import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=" text-black bg-[url(https://i.ibb.co/vx1G2f4/footer.png)] md:px-20">
            <div className='footer p-10'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Branding</Link>
                    <Link to='' className="link link-hover">Design</Link>
                    <Link to='' className="link link-hover">Marketing</Link>
                    <Link to='' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <p className='text-center'>Copyright 2022 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;