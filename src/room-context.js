import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };

    // get Data from the server

    componentDidMount () {
        console.log("Context Mounted");
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false
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

    render() {
        console.log("Context Rendered");
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};