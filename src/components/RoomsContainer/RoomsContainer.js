import React from 'react';
import RoomList from './RoomList/RoomList';
import RoomFilter from './RoomFilter/RoomFilter';
import Spinner from '../Spinner/Spinner';
import {useContext} from 'react';
import {RoomContext} from '../../room-context';


const RoomsContainer = () => {
    const {loading, sortedRooms, rooms} = useContext(RoomContext);
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


// import React from 'react';
// import RoomList from './RoomList';
// import RoomFilter from './RoomFilter';
// import {RoomConsumer} from '../../room-context';
// import Spinner from '../Spinner/Spinner';

// const RoomsContainer = () => {
//     return (
//         //For rooms filter and rooms list
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value;
//                     if (loading) {
//                         return <Spinner/>;
//                     }
//                     return(
//                         <div>
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>
//                     );         
//             }}
//         </RoomConsumer>     
//     );
// }

// export default RoomsContainer;
