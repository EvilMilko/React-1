import React from 'react';

import cm from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
const NavBar = (props) => {

    return (
        <nav className={cm.nav}>
            <div>
                <NavLink className={cm.item} activeClassName={cm.active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={cm.item} activeClassName={cm.active} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={cm.item} activeClassName={cm.active} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={cm.item} activeClassName={cm.active} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink className={cm.item} activeClassName={cm.active} to="/settings">Settings</NavLink>
            </div>
            <hr></hr>
            <SideBar state={props.state.sideBar}/>
        </nav>

    )

}

export default NavBar;