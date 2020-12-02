import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import './css/Header.css'
import logo from '../resources/SE.png'
import profile from '../resources/arwen.png'
import AccountDropdown from './AccountDropdown'

function Header(props){
    const [showDropdown, setShowDropdown] = useState(false)
    const [activeTab, setActiveTab] = useState(false)
    const setActive = (event, newValue) => {
        setActiveTab(newValue)
    }

    let dropdown
    let dropdownMask
    if(showDropdown){
        dropdown = <AccountDropdown closeMenu={() => setShowDropdown(false)}/>
        dropdownMask =
        <div className="dropdownMask" onClick={() => setShowDropdown(false)} />
    }

    return (
        <div>
            <header className="header">
                <img className="logo" src={logo} alt="Logo"/> 
                <div className="navBar">
                    <NavLink 
                        to="/students" 
                        id="students" 
                        className="navItem"
                        style={{ textDecoration: 'none' }}
                        activeStyle={{borderBottom: '5px solid lightskyblue'}}
                        onClick={ () => setShowDropdown(false) }
                    >
                        Students
                    </NavLink>
                    <NavLink 
                        to="/assignments" 
                        id="assignments" 
                        className="navItem"
                        style={{ textDecoration: 'none' }}
                        activeStyle={{borderBottom: '5px solid lightskyblue'}}
                        onClick={ () => setShowDropdown(false) }
                    >
                        Assignments
                    </NavLink>
                    <NavLink 
                        to="/reporting" 
                        id="reporting" 
                        className="navItem" 
                        style={{ textDecoration: 'none' }}
                        activeStyle={{borderBottom: '5px solid lightskyblue'}}
                        onClick={ () => setShowDropdown(false) }
                    >
                        Reporting
                    </NavLink>
                    <div className="border">
                        |
                    </div>
                    <img 
                        className="profile" 
                        src={profile} alt="Profile" 
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                </div>
            </header>
            {dropdownMask}
            {dropdown}
        </div>
    );
}

export default Header;