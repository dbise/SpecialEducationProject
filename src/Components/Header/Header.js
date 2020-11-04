import React from 'react'
import './Header.css'
import logo from '../../resources/SE.png'
import profile from '../../resources/arwen.png'

// function selectNavItem() {
//     document.getElementById("navItem").style.border = "2px solid blue";
// }

function Header(props){
    return (
        <header className='header'>
            <img className="logo" src={logo} alt="Logo"/> 
            <div className="navBar">
                <div id="navItem" className="navItem">
                    Students
                </div>
                <div id="navItem" className="navItem">
                    Assignments
                </div>
                <div id="navItem" className="navItem">
                    Reporting
                </div>
                <div className="border">
                    |
                </div>
                <img className="profile" src={profile} alt="Profile"/>
            </div>
        </header>
    );
}

export default Header;