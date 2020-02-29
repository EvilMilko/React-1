import React from 'react';

import cm from './NavBar.module.css'
const NavBar = () => {

    return (
        <nav className={cm.nav}>
            <div className={cm.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={cm.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={cm.item}>
                <a href="/news">News</a>
            </div>
            <div className={cm.item}>
                <a href="/music">Music</a>
            </div>
            <div className={cm.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>

    )

}

export default NavBar;