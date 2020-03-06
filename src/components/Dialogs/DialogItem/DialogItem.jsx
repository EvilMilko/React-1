import React from 'react';

import cm from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={cm.dialog}>
            <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt=""/>
            <NavLink activeClassName={cm.active} to={path}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem