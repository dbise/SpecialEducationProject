import React from 'react'
import { Link } from "react-router-dom"
import './css/Header.css'
import logo from '../resources/SE.png'
import profile from '../resources/arwen.png'

function Header(props){
    return (
        <header className='header'>
            <img className="logo" src={logo} alt="Logo"/> 
            <div className="navBar">
                <Link to="/students" id="students" className="navItem" style={{ textDecoration: 'none' }}>
                    Students
                </Link>
                <Link to="/assignments" id="assignments" className="navItem" style={{ textDecoration: 'none' }}>
                    Assignments
                </Link>
                <Link to="/reporting" id="reporting" className="navItem" style={{ textDecoration: 'none' }}>
                    Reporting
                </Link>
                <div className="border">
                    |
                </div>
                <img className="profile" src={profile} alt="Profile"/>
            </div>
        </header>
    );
}

export default Header;