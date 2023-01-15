import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'
import Banner from '../components/Banner'
import { Waypoint } from 'react-waypoint';
import { useState } from 'react';
import Card from '../components/Card';
import Categories from '../data/Categories';
import HomeBottomSec from '../components/HomeBottomSec';

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
            <div className='row h-max m-0 w-full md:py-16 sm:px-4 md:px-12 lg:px-20 xl:px-32'>
                {Categories.map((cat) => (
                    <div key={cat.key} className='col-12 col-md-4'>
                        <Card category={`${cat.category}`} imageSrc={`${cat.imgSrc}`} />
                    </div>
                ))}
                <HomeBottomSec />
            </div>
        </>
    )
}

export default Home