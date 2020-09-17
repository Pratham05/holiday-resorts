import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice:0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    // get Data from the server
    componentDidMount () {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            maxPrice,
            maxSize
        });
    }

    formatData (items) {
        let rooms = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return rooms;
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        // Here find gets the first object with the slug match
        return tempRooms.find((room) => room.slug === slug);
    }

    changeHandler = event => {
        const value = event.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [event.target.name]: value
        }, 
        this.filterRooms);
    }

    filterRooms = () => {
        let {
            rooms, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state;

        // Get all rooms
        let tempRooms = [...rooms];
        // Change to integer values
        capacity = parseInt(capacity);
        price = parseInt(price);

        // Filter by type
        if(type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        //Filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        } 

        //Filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);

        this.setState({
            sortedRooms: tempRooms
        });
    }



    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom,
                changeHandler: this.changeHandler}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return (props) => {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value}/>}
            </RoomConsumer>
        );
    }
}

export {RoomProvider, RoomConsumer, RoomContext};


