import React from 'react';
import logo from "./img/logo.png";
import img1 from "./img/26.jpg";
import img2 from "./img/27.jpg";
import img3 from "./img/28.jpg";
import img4 from "./img/29.jpg";
import img5 from "./img/30.jpg";

import { CiLocationOn } from "react-icons/ci";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaXTwitter, FaDribbble, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    const footerImages = [img1, img2, img3, img4, img5];

    const iconStyle = {
        fontSize: '16px',
        color: '#64B496'
    };

    const textStyle = { fontSize: '14px' };

    return (
        <footer className='border-top' style={{ marginTop: '100px', backgroundColor: '#f1f1f1' }}>
            <div className="container">
                <div className="row border-bottom" style={{ padding: '100px 0' }}>
                    
                    {/* Left Column */}
                    <div className="col-md-4">
                        <ul className='ps-0 pe-3 text-secondary d-flex flex-column row-gap-3 list-unstyled'>
                            <li style={textStyle}><img src={logo} alt="Logo" /></li>
                            <li style={textStyle}>Carrot is the biggest market of grocery products. Get your daily needs from our store.</li>
                            <li style={textStyle}><CiLocationOn style={{ fontSize: '25px', color: '#64B496' }} /> 51 Green St. Huntington Ohio Beach, Ontario, NY 11746 KY 4783, USA.</li>
                            <li style={textStyle}>
                                <FiMail style={{ fontSize: '25px', color: '#64B496' }} className="pe-2" />
                                <a href="#" className='text-secondary text-decoration-none' style={textStyle}>example@email.com</a>
                            </li>
                            <li style={textStyle}>
                                <FiPhone style={{ fontSize: '25px', color: '#64B496' }} className="pe-2" />
                                <a href="#" className='text-secondary text-decoration-none' style={textStyle}>+91 123 4567890</a>
                            </li>
                        </ul>
                    </div>

                    {/* Middle Column */}
                    <div className="col-md-4">
                        <div className="row">
                            <ul className='col-6 ps-0 d-flex flex-column row-gap-3 list-unstyled'>
                                <li><h5>Company</h5></li>
                                {['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center'].map((item, idx) => (
                                    <li key={idx} style={textStyle}>
                                        <a href="#" className='text-secondary text-decoration-none' style={textStyle}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className='col-6 ps-0 d-flex flex-column row-gap-3 list-unstyled'>
                                <li><h5>Category</h5></li>
                                {['Dairy & Bakery', 'Fruits & Vegetable', 'Snack & Spice', 'Juice & Drinks', 'Chicken & Meat', 'Fast Food'].map((item, idx) => (
                                    <li key={idx} style={textStyle}>
                                        <a href="#" className='text-secondary text-decoration-none' style={textStyle}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-4">
                        <ul className='ps-0 d-flex flex-column row-gap-3 list-unstyled'>
                            <li style={textStyle}><h5>Subscribe Our Newsletter</h5></li>
                            <li style={textStyle}>
                                <input
                                    type="text"
                                    placeholder='Enter your email'
                                    className='border rounded px-3 py-2'
                                    style={{ width: '100%', fontSize: '14px' }}
                                />
                            </li>
                            <li>
                                <div className="d-flex">
                                    {[FaFacebookF, FaXTwitter, FaDribbble, FaInstagram].map((Icon, idx) => (
                                        <a key={idx} href="#" className="d-inline-flex justify-content-center align-items-center bg-white border text-black rounded me-2 text-decoration-none" style={{ width: '35px', height: '35px' }}>
                                            <Icon style={iconStyle} />
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className='footer-img d-flex justify-content-between'>
                                {footerImages.map((image, index) => (
                                    <a key={index} href="#" className='position-relative' style={{ width: '18%' }}>
                                        <img src={image} alt={`footer-${index + 1}`} className='rounded w-100' />
                                        <FaInstagram className="position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0', visibility: 'hidden', fontSize: '16px', color: '#64B496' }} />
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="row py-3 text-center">
                    <span className='fw-semibold' style={textStyle}>© 2024 <a href="#" className='text-success text-decoration-none' style={textStyle}>Carrot</a>, All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
