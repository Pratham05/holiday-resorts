import React from 'react';
import RoomList from './RoomList/RoomList';
import RoomFilter from './RoomFilter/RoomFilter';
import Spinner from '../Spinner/Spinner';
import {useContext} from 'react';
import {RoomContext} from '../../room-context';

/** 
  * @desc Component used for rendering the rooms page
  * It further calls the roomfilter component for providing filtering features
  * and the RoomList componenet for rendering the rooms in a sorted form
  * Utilizes context for getting the loading state and the sorted list of rooms
*/
const RoomsContainer = () => {
    const {loading, sortedRooms} = useContext(RoomContext);
    if (loading) {
        return <Spinner/>;
    }
    return(
        <div>
            <RoomFilter/>
            <RoomList rooms={sortedRooms}/>
        </div>
    );  
}

export default RoomsContainer;