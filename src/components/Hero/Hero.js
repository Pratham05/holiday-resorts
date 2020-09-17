import React from 'react';
import classes from './Hero.module.css';

const Hero = (props) => {
    let styleWrap = {};
    if(props.image) {
        styleWrap = {
            background: `url(${props.image})`
        }
    }
    return (
        <header  style={styleWrap} className={classes[props.heroType]}>
            {props.children}
            
        </header>
    );
}

Hero.defaultProps = {
        heroType: "defaultHero"
    };

export default Hero;


