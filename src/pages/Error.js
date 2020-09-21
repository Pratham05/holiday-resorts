import React from 'react'
import Banner from '../components/Banner/Banner';
import Hero from '../components/Hero/Hero';
import {NavLink} from 'react-router-dom';

/** 
  * @desc Component for display of incorrect urls
  * Every incorrect url routes to this component
*/
const Error = () => {
    return (
        <Hero>
            <Banner title="Page Not Found" 
            subtitle="You may try visiting our Home Page">
                <NavLink to="/" className="btn-primary">
                    Home Page
                </NavLink>
            </Banner>
        </Hero>
    );
}

export default Error
