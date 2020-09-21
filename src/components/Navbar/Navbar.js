import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../images/logo.svg';
import classes from './Navbar.module.css';
import {FaAlignRight} from 'react-icons/fa';

/** 
  * @desc Component for rendering the Navbar for the application
*/
export default class Navbar extends Component {
    // the state property is used for storing the state of menu (Open/Closed)
    // when on mobile display
    state = {
        isOpen: false
    }

    /** 
      * @desc Handles toggle for hamburger icon when on mobile display
    */
    toggleHandler = () => {
        // Toggling the state immutably using the prevstate
        this.setState(prevState => ({isOpen: !prevState.isOpen}));
    }

    render() {
        let ulClasses = [classes.navLinks];
        if (this.state.isOpen) {
            ulClasses.push(classes.showNav);
        }
        ulClasses = ulClasses.join(' ');
        return (
            <nav className={classes.navbar}>
                <div className={classes.navCenter}>
                    <div className={classes.navHeader}>
                        <NavLink to ="/">
                            <img src={logo} alt="Holiday Resorts"></img>
                        </NavLink>
                        <button type="button" onClick={this.toggleHandler} className={classes.navBtn}>
                            <FaAlignRight className={classes.navIcon}/>
                        </button>
                    </div>
                    <ul className={ulClasses}>
                        <li>
                            <NavLink exact activeClassName={classes.isActive} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.isActive} to="/rooms">Rooms</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
