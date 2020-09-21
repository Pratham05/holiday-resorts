import React from 'react';
import classes from './Title.module.css';

/** 
  * @desc Component used to render a title for a component in the application
*/
const Title = (props) => {
    return (
        <div className={classes.sectionTitle}>
            <h4>{props.title}</h4>
            <div className={classes.titleUnderline}/>
        </div>
    )
}

export default Title;

