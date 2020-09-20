import React from 'react';
import {useContext, useEffect} from 'react';
import {RoomContext} from '../../../room-context'
import Title from '../../Title/Title';
import classes from './RoomFilter.module.css';

// get all unique values

const getUniqueValues = (items, filterValue) => {
    return [...new Set(items.map(item => item[filterValue]))];
}

const RoomFilter = () => {
    const {
        rooms, changeHandler, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = useContext(RoomContext);

    let types = getUniqueValues(rooms, 'type');
    types = ['all', ...types].map((type, index) => {
    return <option value={type} key={index}>{type}</option>
    });

    let people = getUniqueValues(rooms, 'capacity').map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));

    return (
        <section className={classes.filterContainer}>
            <Title title="search rooms"/>
            <form className={classes.filterForm} >
                {/* Select type */}
                <div className={classes.formGroup}>
                    <label htmlFor="type">room type</label>
                    <select name="type" 
                    id="type" value={type} 
                    className={classes.formControl} onChange={changeHandler}>
                    {types}
                    </select>
                </div>
                {/* end of select type */}
                {/* Guests */}
                <div className={classes.formGroup}>
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" 
                    id="capacity" value={capacity} 
                    className={classes.formControl} onChange={changeHandler}>
                    {people}
                    </select>
                </div>
                {/* end of guests */}
                {/* Price Range */}
                <div className={classes.formGroup}>
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice}
                    id="price" value={price} onChange={changeHandler} className={classes.formControl}/>
                </div> 
                {/* Price Range Ends */}
                {/* size */}
                <div className={classes.formGroup}>
                    <label htmlFor="size">Room Size(Sq. Ft)</label>
                    <div className={classes.sizeInputs}>
                        <input type="number" name="minSize"
                        id="size" value={minSize} onChange={changeHandler} className={classes.sizeInput}/>
                        <input type="number" name="maxSize"
                        id="size" value={maxSize} onChange={changeHandler} className={classes.sizeInput}/>
                    </div>  
                </div> 
                {/* end of size */}
                {/* Extras */}
                <div className={classes.formGroup}>
                    <div className={classes.singleExtra}>
                        <label htmlFor="breakfast">breakfast</label>
                        <input type="checkbox" name="breakfast"
                        id="breakfast" checked={breakfast} onChange={changeHandler} />
                    </div>  
                </div> 

                <div className={classes.formGroup}>
                    <div className={classes.singleExtra}>
                        <label htmlFor="pets">pets</label>
                        <input type="checkbox" name="pets"
                        id="pets" checked={pets} onChange={changeHandler} />
                    </div>  
                </div> 
                {/* End of Extras */}
            </form>
        </section>
    );
}

export default RoomFilter;
