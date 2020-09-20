import React, {useEffect}from 'react';
import Room from '../../Room/Room';
import classes from './RoomList.module.css';

const RoomList = ({rooms}) => {
    if (!rooms.length) {
        return (
            <div className={classes.emptySearch}>
                <h3>Unfortunately no rooms match your search parameters</h3>
            </div>
        );
    }
    return (
        <section className={classes.roomslist}>
            <div className={classes.roomslistCenter}>
                {
                    rooms.map(item => {
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    );   
}

export default RoomList;
