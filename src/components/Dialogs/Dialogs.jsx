import React from 'react';

import cm from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={cm.dialog + ' ' + cm.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={cm.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div>
            <div className={cm.dialogs}>

                <div className={cm.dialogsItems}>
                    <DialogItem id='1' name='Dimych' />
                    <DialogItem id='2' name='Dimych2' />

                </div>

                <div className={cm.messages}>
                    <Message message="Test1" />
                    <Message message="Test2" />
                    <Message message="Test3" />

                </div>

            </div>
        </div>

    )
}

export default Dialogs