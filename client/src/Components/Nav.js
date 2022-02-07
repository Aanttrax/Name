import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import add from '../img/add.png';
import about from '../img/about.png';
//import './Nav.css'

function Nav() {
    return (
        <div className = 'cont'>
            <div className = 'nav'>
                <NavLink className = 'link' to = '/home/1'>
                    <img src = {logo} alt='logo' width="50" height="50"/>
                    Home
                </NavLink>
                <NavLink className = 'link' to = '/add'>
                    <img src = {add} alt = 'act' width = '50' height = '50'/>
                    Add Name
                </NavLink>
                <NavLink className = 'link' to = '/about'>
                    <img src = {about} alt ='ab' width = '50' height = '50' />
                    About
                </NavLink>
            </div>
        </div>
    )
};

export default Nav;