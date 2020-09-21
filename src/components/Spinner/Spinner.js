import React from 'react';
import loadingGif from '../../images/gif/loading-arrow.gif';
import classes from './Spinner.module.css';

/** 
  * @desc Component used to render a spinner for the application
  * Utilizes gifs kept in the images folder
*/
const Spinner = () => {
    return (
        <div className={classes.spinner}>
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="Loading.."/>
        </div>
    );
}

export default Spinner;
