import React from 'react';
import './Footer.css';
import { FaSquareTwitter } from "react-icons/fa6";
import {
    FaFacebookSquare,
    FaInstagramSquare,

    FaLinkedin,
} from "react-icons/fa";

import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer-section ">
                <div className="container">

                    <div className="footer-content pt-5 pb-5">
                        <div className="row my-1">
                            <div className="ccol-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-logo">

                                        <a href="index.html"><img src="./img/tutorlogo.png" className="img-fluid1" alt="logo" /></a>
                                        <p style={{ padding: "20px 70px 0px 2px", color: "white", fontSize: "13px" }}>Copyright © 2021 InfixLMS. All rights reserved | Made By <a href=''
                                            style={{ color: "#FEB249" }}>CodeThemes</a> </p>


                                        <a
                                            href="#"
                                            target="_thapa">
                                            <FaFacebookSquare className="facebook bu" />
                                        </a>
                                        <a
                                            href="#"
                                            target="_thapa">
                                            <FaSquareTwitter className="youtube bu" /> </a>
                                        <a
                                            href="#"
                                            target="_thapa">
                                            <FaInstagramSquare className="instagram bu" /> </a>
                                        <a
                                            href="#"
                                            target="_thapa">
                                            <FaLinkedin className="Linkedin bu" /> </a>

                                    </div>


                                </div>
                            </div>
                            <div className="ccol-xl-2 col-lg-2  mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Support Zone</h3>
                                    </div>
                                    <ul>






                                        <li><a href="#">Unlock Your Potential</a></li>
                                        <li><a href="#">Privacy policy and cookie policy</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Featured courses</a></li>
                                        <li><a href="#">Join Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ccol-xl-2 col-lg-2 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Company Info</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">InfixEdu for Business</a></li>
                                        <li><a href="#">Teach on InfixEdu</a></li>
                                        <li><a href="#">Get the app</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ccol-xl-2 col-lg-2 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Explore Services</h3>
                                    </div>
                                    <ul>
                                    <li><a href="#">Careers</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Help and Support</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Certificate Verification</a></li>
                                        <li><a href='#'>Free Course</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="ccol-xl-2 col-lg-2 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Dummy</h3>
                                    </div>
                                    <ul>
                                    <li><a href="#">Careers</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href='#'>Help and Support</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Certificate Verification</a></li>
                                        <li><a href='#'>Free Course</a></li>


                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                    <br></br> <br></br>
                    {/* <hr className='bor1' /> */}
                </div>
                {/* <div className="copyright-area">
                    <div className="container">



                        <div className="copyright-text">
                            <p className='text-center'>Copyright © 1998 - 2024 Trade Guru Academy</p>
                        </div>





                    </div>
                </div> */}
            </footer>
        </div>
    )
}

export default Footer
