import React from 'react';

import cm from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <NavLink className={cm.dialog} activeClassName={cm.active} to={path}>
            <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="" />
            <div>{props.name}</div>

        </NavLink>
    )
}

export default DialogItem