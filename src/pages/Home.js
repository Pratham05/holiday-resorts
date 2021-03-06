import React from 'react';
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import {NavLink} from 'react-router-dom';
import Services from '../components/Services/Services';
import FeaturedRooms from '../components/FeaturedRooms/FeaturedRooms';

/** 
  * @desc Used for rendering the home page for the application
  * Calls different components which are required for the home page
*/
const Home = () => {
    return (
        <React.Fragment>
            <Hero> 
                <Banner title="Luxurious Rooms" 
                subtitle="Deluxe Suits starting at $500">
                    <NavLink to="/rooms" className="btn-primary">
                        Our Rooms
                    </NavLink>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms />
        </React.Fragment>
    );
}

export default Home;
