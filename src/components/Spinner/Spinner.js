import React from 'react';
import loadingGif from '../../images/gif/loading-arrow.gif';
import classes from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={classes.spinner}>
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt="Loading.."/>
        </div>
    );
}

export default Spinner;
