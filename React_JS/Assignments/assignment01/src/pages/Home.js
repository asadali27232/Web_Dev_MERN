import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';


function Home() {
    const [navBg, setNavBg] = useState('transparent');

    const handleWaypointEnter = () => {
        setNavBg('transparent');
    }

    const handleWaypointLeave = () => {
        setNavBg('white');
    }

    return (
        <>
            <Waypoint onEnter={handleWaypointEnter} onLeave={handleWaypointLeave}>
                <div></div>
            </Waypoint>
            <Header navColor={navBg} />
            <hr />
            <Banner />
        </>
    )
}

export default Home