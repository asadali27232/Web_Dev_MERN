import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter';

function Banner(props) {
    return (
        <div className="Banner">
            <div className="intro-box row px-32 pt-40">
                <div className="intro-text col-6">
                    <h1>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={50}
                            deleteSpeed={20}
                            delaySpeed={2000}
                            words={['Technical Business Solutions',
                                'Website Development',
                                'Mobile App Development',
                                'Digital Marketing',
                                'Technical Skills Trainings',
                                'Shopify/WP Development']}
                        />
                    </h1>
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