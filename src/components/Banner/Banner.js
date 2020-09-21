import React from 'react';
import classes from './Banner.module.css';

/** 
  * @desc Component for rendering the banner for a hero component
  * @param object $ props - contains properties for the banner title and subtitle
  * Also the children components wrapped in the Banner component
*/
const Banner = (props) => {
    return (
        <div className={classes.banner}>
            <h1>{props.title}</h1>
            <div></div>
            <p>{props.subtitle}</p>
            {props.children}
        </div>
    );
}

export default Banner;
