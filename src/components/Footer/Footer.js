import React from 'react';
import classes from './Footer.module.css';
import {FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa'


/** 
  * @desc Component for rendering the footer of the application
*/
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.social}>
                <a href="#"><FaFacebookF/></a>
                <a href="#"><FaTwitter/></a>
                <a href="#"><FaYoutube/></a>
                <a href="#"><FaLinkedinIn/></a>
            </div>
            <p>Copyright @2020 - Holiday Resorts</p>
        </div>
    );
}

export default Footer;
