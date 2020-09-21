import React, { Component } from 'react';
import {RoomContext} from '../../room-context';
import Spinner from '../../components/Spinner/Spinner';
import Room from '../../components/Room/Room';
import Title from '../Title/Title';

import classes from './FeaturedRooms.module.css';

/** 
  * @desc Component for rendering the featured rooms 
  * Utlises context for getting the featured rooms
*/
export default class FeaturedRooms extends Component {

    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
            <section className={classes.featuredRooms}>
                <Title title="featured rooms" />
                <div className={classes.featuredRoomsCenter}>
                    {loading ? <Spinner/> : rooms}
                </div>     
            </section>
        );
    }
}
