import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import defaultBcg from '../../images/room-1.jpeg';
import {RoomContext} from '../../room-context';
import Error from '../Error';

import classes from './SingleRoom.module.css';


export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    // componentDidMount() {
    //     console.log('*****', this.state.slug)
    //     const {getRoom} = this.context;
    //     const room = getRoom(this.state.slug);
    //     console.log("Naya Method", room);
    // }

    render() {
        console.log("SingleRoomRendered")
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <Error/>
        } 
        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...displayImages] = images;
        return (
            <React.Fragment>
                <Hero heroType='roomsHero' image={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </Hero>
                <section className={classes.singleRoom}>
                    <div className={classes.singleRoomImages}>
                        {displayImages.map((item, index) => {
                            return <img key={index} src={item} alt={name}/>;
                        })}
                    </div>
                    <div className={classes.singleRoomInfo} >
                        <article className={classes.desc}>
                            <h3>details</h3>
                            <p>
                                {description}
                            </p>
                        </article>
                        <article className={classes.info}>
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>max capacity: {
                                    capacity > 1 ? `${capacity} people` : `${capacity} person`
                                }
                            </h6>
                            <h6>
                                {
                                    pets > 1 ? "pets allowed" : "No pets allowed"
                                }
                            </h6>
                            <h6>
                                {
                                    breakfast && "free breakfast"
                                }
                            </h6>
                        </article>
                    </div>
                </section>
                <section className={classes.roomExtras}>
                    <h6>extras</h6>
                    <ul className={classes.extras}>
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </React.Fragment>
        )
    }
}
