import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="foot1">
                <ul className="foot1-ul">
                    <li><Link to="/">WHO WE ARE</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">CONTACT US</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">OUR RESPONSIBILITY</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">EXCHANGE & REFUND</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">EXCHANGE FORM</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">SHIPPING</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">LOOK BOOK</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">SERVICE WE PROVIDE</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">TRACK YOUR ORDER</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">ORDER CANCELLATION FORM</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">CAREERS</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">LEGAL</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">FAQ's</Link></li>
                    <div className="ver_bar"></div>
                    <li><Link to="/">PRIVACY & POLICY</Link></li>
                </ul>
                <div className="social_icons">
                    <ul>
                        <li>
                            <img
                                src="images/facebook.png"
                                width="25px"
                                alt='social-link'
                            />
                        </li>
                        <li>
                            <img
                                src="images/Instagram.png"
                                width="25px"
                                alt='social-link'
                            />
                        </li>
                        <li>
                            <img
                                src="images/tiktok.png"
                                width="25px"
                                alt='social-link'
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="foot2">
                <span>ALL RIGHTS RESERVED TO BAROQUE 2022</span>
            </div>
        </footer>
    )
}

export default Footer