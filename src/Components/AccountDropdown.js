import React from 'react'
import { Link } from 'react-router-dom'
import './css/AccountDropdown.css'

function AccountDropdown(props) {
    return (
        <div>
            <ul className='dropdown'>
                <li className='userName'>
                    Arwen of Rivendell
                </li>
                <li className='listItem'>
                    <Link 
                        to="/settings" 
                        id="settings"
                        className='listText'
                        style={{ textDecoration: 'none' }}
                        onClick={props.closeMenu}
                    >
                        Settings
                    </Link>
                </li>
                <li className='listItem'>
                    <Link 
                        to="/account" 
                        id="account"
                        className='listText'
                        style={{ textDecoration: 'none' }}
                        onClick={props.closeMenu}
                    >
                        Account
                    </Link>
                </li>
                <li className='listItem'>
                    Log Out
                </li>
            </ul>
        </div>
    );
}

export default AccountDropdown