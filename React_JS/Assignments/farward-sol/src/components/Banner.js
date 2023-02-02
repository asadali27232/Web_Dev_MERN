import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'

function Banner(props) {
    return (
        <div className="Banner">
            <div className="intro-box row px-32 pt-40">
                <div className="intro-text col-6">
                    <h1>Revolutionizing Business Outcomes with Cutting-Edge Technical Solutions</h1>
                    <p>Empowering businesses to thrive in the digital age, we provides a comprehensive suite of technical solutions, digital marketing services, and trainings to help you reach your goals.</p>
                    <button type="button" onClick={props.handleClick}>
                        Request a Service
                    </button>
                </div>
                <div className="intro-img col-6"></div>
            </div>
        </div>
    )
}

export default Banner