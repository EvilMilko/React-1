import React from 'react';
import cm from './NavBar.module.css'
const NavBar = () => {

    return (
        <nav className={cm.nav}>
            <div className={cm.item}>Profile</div>
            <div className={cm.item}>Messages</div>
            <div className={cm.item}>News</div>
            <div className={cm.item}>Music</div>
            <div className={cm.item}>Settings</div>
        </nav>

    )

}

export default NavBar;