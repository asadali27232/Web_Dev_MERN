import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

function Footer() {
    return (
        <footer className=''>
            <div className="foot1 px-32">
                <div className="row px-32">
                    <div className="col col-3" style={{ paddingLeft: '0px' }}>
                        <img src="images/logo.png" alt="Logo" width='150px' style={{ marginBottom: '12px' }} />
                        <p>We develope a comprehensive suite of technical business solutions, digital marketing services, and trainings to help businesses succeed in the digital age.</p>
                    </div>
                    <div className="col col-3">
                        <h3>SERVICES</h3>
                        <p>Technical Business Solutions</p>
                        <p>Website Development</p>
                        <p>Mobile App Development</p>
                        <p>Digital Marketing</p>
                        <p>Technical Skills Trainings</p>
                        <p>Shopify/Wordpress Development</p>
                    </div>
                    <div className="col col-3">
                        <h3>CONTACTS</h3>
                        <p>Address: Forward Solutions 3rd Floor Arfa Tower, Ferozpur Road, Lahore</p>
                        <p>Email: forwardlogics@gmail.com</p>
                        <p>Phone: +92 321 8720063</p>
                    </div>
                    <div className="col col-3" style={{ paddingRight: '0px' }}>
                        <h3>FOLLOW US</h3>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/forwardsols">
                                    <div className="social-icon fb-icon"></div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/forwardsols">
                                    <div className="social-icon in-icon"></div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/forwardsols">
                                    <div className="social-icon instagram-icon"></div>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/forwardsols">
                                    <div className="social-icon whatsapp-icon"></div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="foot2 px-32 ">
                <span>Copyright © 2023 Forward Solutions. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer