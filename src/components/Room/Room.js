import React from 'react';
import {Link} from 'react-router-dom';

import classes from './Room.module.css';
import defaultImg from '../../images/room-1.jpeg';
import PropTypes from 'prop-types';

const Room = (props) => {
    const {name, slug, images, price} = props.room;

    return (
        <article className={classes.room}>
            <div className={classes.imgContainer} >
                {/* Default image set in case the image doesnt come up from the server */}
                <img src={images[0] || defaultImg} alt="single room" />
                <div className={classes.priceTop}>
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                {/* btn-primary comes from global styles */}
                <Link to={`/rooms/${slug}`} className={[classes.roomLink, "btn-primary"].join(' ')}>
                    Features
                </Link>
            </div>
            <p className={classes.roomInfo}>{name}</p>
        </article>
    );
}

Room.protoTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.number.isRequired,
    })
}

export default Room;
