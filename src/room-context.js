import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

/** 
  * @desc A class based component which is used to create and provide access to a context object
  * Also privides utility methods for performing filters on the basis of some DOM inputs
  * and state values
*/
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

    /** 
      * @desc Used to get data from the database
      * and then perform state changes by extracting the corresponding state values
    */
    componentDidMount () {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        let price = maxPrice;
        this.setState({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false,
            maxPrice,
            price,
            maxSize
        });
    }

    /** 
      * @desc Helper method to format data from the db according to the state variables
      * @param object - containing the data obtained from the db
      * @return object - Rooms object with formated properties
    */
    formatData (items) {
        let rooms = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return rooms;
    }

    /** 
      * @desc Used to find the room on the basis of a slug
      * @param string $slug - the slug passed in the url for identifying the room object
      * @return object - room which has been selected from the url
    */
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        // Here find gets the first object with the slug match
        return tempRooms.find((room) => room.slug === slug);
    }

    /** 
      * @desc Used to handle changes made in the room filter componenet from input elements
      * Updates the corresponding properties of the state
      * @param object $event - The event object which is changed
    */
    changeHandler = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        console.log(event.target.name, value);
        this.setState({
            [event.target.name]: value
        }, // the filterRooms is called with the updated state after successful setState
        this.filterRooms);
    }

    /** 
      * @desc Used to update the state's room property with filtered values 
      * obtained from the filter component through the input elements
    */
    filterRooms = () => {
        let {
            rooms, type, capacity, price, minSize, maxSize, breakfast, pets
        } = this.state;

        console.log(breakfast)

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

        // Filter by size
        tempRooms = tempRooms.filter(room => room.size >=minSize && room.size <= maxSize);

        // Filter by breakfast
        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        // Filter by pets
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        

        // // Filter by pets
        // tempRooms = tempRooms.filter(room => room.pets === pets);

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

// The consumer object for consuming the context in functional components
const RoomConsumer = RoomContext.Consumer;


export { RoomProvider, RoomConsumer, RoomContext };


