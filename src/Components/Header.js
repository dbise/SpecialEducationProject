import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './css/Header.css'
import logo from '../resources/SE.png'
import profile from '../resources/arwen.png'
import AccountDropdown from './AccountDropdown'
import Assignments from './Assignments'

function Header(props){
    const [showDropdown, setShowDropdown] = useState(false)

    let dropdown
    let dropdownMask
    if(showDropdown){
        dropdown = <AccountDropdown closeMenu={() => setShowDropdown(false)}/>
        dropdownMask =
        <div className='dropdownMask' onClick={() => setShowDropdown(false)} />
    }

    return (
        <div>
            <header className='header'>
                <img className="logo" src={logo} alt="Logo"/> 
                <div className="navBar">
                    <Link 
                        to="/students" 
                        id="students" 
                        className="navItem" 
                        style={{ textDecoration: 'none' }}
                        onClick={() => setShowDropdown(false)}
                    >
                        Students
                    </Link>
                    <Link 
                        to="/assignments" 
                        id="assignments" 
                        className="navItem" 
                        style={{ textDecoration: 'none' }}
                        onClick={() => setShowDropdown(false)}
                    >
                        Assignments
                    </Link>
                    <Link 
                        to="/reporting" 
                        id="reporting" 
                        className="navItem" 
                        style={{ textDecoration: 'none' }}
                        onClick={() => setShowDropdown(false)}
                    >
                        Reporting
                    </Link>
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