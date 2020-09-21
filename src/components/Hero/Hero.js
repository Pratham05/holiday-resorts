import React from 'react';
import classes from './Hero.module.css';

/** 
  * @desc Component for rendering the hero component
  * Has a default value, a class which can be set and also an image prop for custom images
  * @param object $props - contains the image property with the path to the image to be displayed
*/
const Hero = (props) => {
    let styleWrap = {};
    if(props.image) {
        styleWrap = {
            background: `url(${props.image})`
        }
    }
    return (
        <header  style={styleWrap} className={[classes[props.heroType], classes.overlay].join(' ')}>
            {props.children}
            
        </header>
    );
}

Hero.defaultProps = {
        heroType: "defaultHero"
    };

export default Hero;


