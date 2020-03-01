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

let dialogsElements = dialogsData // Преобразует объект в массив с компонентами 
    .map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)


let messagesData = [
    { id: 1, message: 'text1' },
    { id: 2, message: 'text2' },
    { id: 3, message: 'text3' },
    { id: 4, message: 'text4' },
    { id: 5, message: 'text5' },
]

let messagesElements = messagesData
    .map((message) => <Message id={message.id} message={message.message} />)

const Dialogs = (props) => {
    return (
        <div>
            <div className={cm.dialogs}>
                {/* Контакты в диалогах */}
                <div className={cm.dialogsItems}>
                    {dialogsElements}   {/* выводим весь массив с компонентами */}
                </div>
                {/* Окно диалога */}
                <div className={cm.messages}>
                    {messagesElements}
                </div>

            </div>
        </div>

    )
}

export default Dialogs