import React from 'react'
import './HomeBottomSec.css'

function HomeBottomSec() {
    return (
        <>
            <div className="banner">
                <div className="banner_image">
                    <h1>STYLE GUIDE</h1>
                    <p>TIPS FROM OUR STYLIST</p>
                </div>
                <div className="banner_form">
                    <h3>GET 5% OFF!</h3>
                    <h4>SIGN UP NOW TO OUR NEWSLETTER</h4>

                    <div className="input">
                        <input
                            type="text"
                            name="gift_code"
                            id="gift_code"
                            className="field"
                        />
                        <button className="sign-up_btn" type="submit">
                            SIGN ME UP
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBottomSec