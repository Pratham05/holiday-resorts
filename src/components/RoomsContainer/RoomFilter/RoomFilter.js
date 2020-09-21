import React from 'react';
import {useContext, useEffect} from 'react';
import {RoomContext} from '../../../room-context'
import Title from '../../Title/Title';
import classes from './RoomFilter.module.css';

/** 
  * @desc used to get only unique elements from an object
  * @param array $items - An array of items which needs to be filtereds
  * @param string $filterValue - the value of the property on the basis of which 
  * the filtering is warrented
  * @returns - an array of unique values
*/
const getUniqueValues = (items, filterValue) => {
    return [...new Set(items.map(item => item[filterValue]))];
}

/** 
  * @desc Component for rendering the filter feature for room filtering
  * Utilizes context for getting the required parameters for the input elements
  * and function to handle the change made in the input elements
*/
const RoomFilter = () => {
    const {
        rooms, changeHandler, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = useContext(RoomContext);

    let types = getUniqueValues(rooms, 'type');

    // all added as types won't create an all category
    // also create array of options for different categories
    types = ['all', ...types].map((type, index) => {
    return <option value={type} key={index}>{type}</option>
    });

    // array of options to be rendered for selecting the number of persons
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
                        <input type="checkbox" name="breakfast"
                        id="breakfast" checked={breakfast} onChange={changeHandler} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>  
                    <div className={classes.singleExtra}>
                        <input type="checkbox" name="pets"
                        id="pets" checked={pets} onChange={changeHandler} />
                        <label htmlFor="pets">pets</label>
                    </div>  
                </div> 
                {/* End of Extras */}
            </form>
        </section>
    );
}

export default RoomFilter;
