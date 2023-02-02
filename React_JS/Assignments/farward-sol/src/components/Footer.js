import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="foot1">
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