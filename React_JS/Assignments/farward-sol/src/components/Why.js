import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Why.css'
import CountUp from 'react-countup'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollTrigger from 'react-scroll-trigger'

function Why() {
    const [counter, setCounter] = useState(false)
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div className='why px-32'>
                <div className="row">
                    <div className="col-12 py-2 d-flex justify-center">
                        <div className="stat-box" data-aos="fade-down">
                            <img src="images/icons8_microsoft_project_64px.png" alt="Img" />
                            <p>Projects Completed</p>
                            <div className="circle c1">
                                {counter && <CountUp start={100} end={500} duration={3} suffix='+' />}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 py-2 d-flex justify-center">
                        <div className="stat-box" data-aos="fade-right">
                            <img src="images/icons8_person_64px.png" alt="Img" />
                            <p>Team Members</p>
                            <div className="circle c2">
                                {counter && <CountUp start={0} end={100} duration={3} suffix='+' />}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 py-2 d-flex justify-center">
                        <div className="stat-box" data-aos="fade-left">
                            <img src="images/icons8_customer_insight_64px.png" alt="Img" />
                            <p>Happy Clients</p>
                            <div className="circle c3">
                                {counter && <CountUp start={100} end={300} duration={3} suffix='+' />}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 py-2 d-flex justify-center">
                        <div className="stat-box" data-aos="fade-up">
                            <img src="images/icons8_rating_circled_64px.png" alt="Img" />
                            <p>Customer Ratings</p>
                            <div className="circle c4">
                                {counter && <CountUp start={0} end={99} duration={3} suffix='%' />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>

    )
}

export default Why