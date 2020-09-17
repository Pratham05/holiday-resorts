import React from 'react'
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import {NavLink} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer/RoomsContainer';


const Rooms = () => {
    return (
        <React.Fragment>
            <Hero heroType="roomsHero"> 
                <Banner title="Our Rooms">
                    <NavLink to="/" className="btn-primary">
                        Return Home
                    </NavLink>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </React.Fragment>
    );
}

export default Rooms;
