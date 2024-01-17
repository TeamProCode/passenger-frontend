import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom';
import Pass from '../assests/Pass.svg'

const Header = ({ logout }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        logout()
        navigate("/")
      }
    return (
       <>
        <img
        alt="logo"
        src={Pass}
        width={"480"}
        height={"80"}
        style={{ marginLeft: '0 auto', display: 'block' }}
        />
        <header className='header'>
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
                    <NavLink to="/destinationindex"
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
                <NavItem >
                    <NavLink 
                    className='navi-font'>
                        <button onClick={handleClick}>
                         Log Out
                         </button> 
                    </NavLink>
                </NavItem>

            </Nav >
        </header>
        </> 
    )
}

export default Header