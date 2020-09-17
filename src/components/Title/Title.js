import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
    return (
        <div className={classes.sectionTitle}>
            <h4>{props.title}</h4>
            <div className={classes.titleUnderline}/>
        </div>
    )
}

export default Title;

