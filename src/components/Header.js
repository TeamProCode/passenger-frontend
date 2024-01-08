import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            Passenger🛫
            <Nav className='navi-bar'
                justified
                pills
            ><NavItem >
                    <NavLink
                        to="/"
                        className='navi-font'>
                          Home   
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink to="/destinationshow"
                        className='navi-font'>
                          Take Me to Destinations  
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink to="/destinationnew"
                        className='navi-font'>
                         Add to Destinations 
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink to="/aboutus"
                        className='navi-font'>
                         About Us 
                    </NavLink>
                </NavItem>
                <NavItem >
                    <NavLink to="/signin"
                        className='navi-font'>
                         Sign-in/Sign-up
                    </NavLink>
                </NavItem>
            </Nav >
        </header>
    )
}

export default Header