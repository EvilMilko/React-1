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

let dialogsData = [
    { id: 1, name: "Dimych1" },
    { id: 2, name: "Dimych2" },
    { id: 3, name: "Dimych3" },
    { id: 4, name: "Dimych4" },
    { id: 5, name: "Dimych5" },
]

let messagesData = [
    { id: 1, message: 'text1' },
    { id: 2, message: 'text2' },
    { id: 3, message: 'text3' },
    { id: 4, message: 'text4' },
    { id: 5, message: 'text5' },
]

const Dialogs = (props) => {
    return (
        <div>
            <div className={cm.dialogs}>

                <div className={cm.dialogsItems}>
                    <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                    <DialogItem id={dialogsData[1].id} name={dialogsData[1].name} />

                </div>

                <div className={cm.messages}>
                    <Message id={messagesData[0].id} message={messagesData[0].message} />
                    <Message id={messagesData[1].id} message={messagesData[1].message} />


                </div>

            </div>
        </div>

    )
}

export default Dialogs