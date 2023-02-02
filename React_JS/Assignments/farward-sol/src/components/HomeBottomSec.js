import React from 'react'
import './HomeBottomSec.css'
import { Link } from 'react-router-dom'

function HomeBottomSec() {
    return (
        <>
            <div className="col-12">
                <div className="row m-0 pt-16">
                    <div className="col-md-6 m-0 p-0 h-max banner_image">
                        <Link className=' m-0 p-0' to="/">
                            <img src="images/home-bottom-banner.jpg" className='w-full' alt="BOTTOM BANNER" />
                        </Link>
                    </div>
                    <div className="col-md-6 banner_form_section">
                        <div className='banner_form'>
                            <h3>GET 5% OFF!</h3>
                            <h4>SIGN UP NOW TO OUR NEWSLETTER</h4>

                            <div className="sign-up-input w-full mt-3">
                                <input
                                    type="text"
                                    name="gift_code"
                                    id="gift_code"
                                    className="field px-2"
                                />
                                <button className="sign-up_btn" type="submit">
                                    SIGN ME UP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBottomSec