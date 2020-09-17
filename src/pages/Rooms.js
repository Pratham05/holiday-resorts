import React from 'react'
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import {NavLink} from 'react-router-dom';


const Rooms = () => {
    return (
        <Hero heroType="roomsHero"> 
            <Banner title="Our Rooms">
                <NavLink to="/" className="btn-primary">
                    Return Home
                </NavLink>
            </Banner>
        </Hero>
    );
}

export default Rooms;
