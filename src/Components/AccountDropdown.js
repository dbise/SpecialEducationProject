import React from 'react'
import { Link } from 'react-router-dom'
import './css/AccountDropdown.css'

function AccountDropdown(props) {
    return (
        <div>
            <ul className='dropdown'>
                <li className='username'>
                    Arwen of Rivendell
                </li>
                <li className='list-item'>
                    <Link
                        to="/settings"
                        id="settings"
                        className='list-text'
                        style={{ textDecoration: 'none' }}
                        onClick={props.closeMenu}
                    >
                        Settings
                    </Link>
                </li>
                <li className='list-item'>
                    <Link
                        to="/account"
                        id="account"
                        className='list-text'
                        style={{ textDecoration: 'none' }}
                        onClick={props.closeMenu}
                    >
                        Account
                    </Link>
                </li>
                <li className='list-item'>
                    Log Out
                </li>
            </ul>
        </div>
    );
}

export default AccountDropdown