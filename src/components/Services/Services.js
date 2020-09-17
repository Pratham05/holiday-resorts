import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from '../Title/Title';
import classes from './Services.module.css';

export default class Services extends Component {
    state = {
        services : [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam"
            },
            {
                icon: <FaHiking />,
                title: "Hiking Sites",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam"
            },
            {
                icon: <FaShuttleVan />,
                title: "Vans for Travel",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam"
            },
            {
                icon: <FaBeer />,
                title: "Beers from München",
                info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam"
            }
        ]
    }
    render() {
        const services = this.state.services.map((item, index) => {
            return <article key={index} className={classes.service}>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>;
        });
        return (
            <section className={classes.services}>
                <Title title="Services" />
                <div className={classes.servicesCenter}>
                    {services}
                </div>
            </section>
        );
    }
}
