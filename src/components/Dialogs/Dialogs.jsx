import React from 'react';
import cm from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData // Преобразует объект в массив с компонентами 
        .map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)



    let messagesElements = props.state.messagesData
        .map((message) => <Message id={message.id} message={message.message} />)

    console.log(dialogsElements);

    return (
        <div>
            <div className={cm.dialogs}>
                {/* Контакты в диалогах */}
                <div className={cm.dialogsItems} >
                    {dialogsElements}   {/* выводим весь массив с компонентами */}
                </div>
                {/* Окно диалога */}
                <div className={cm.messages}>
                    <div className={cm.head}>Имя</div>
                    <hr></hr>
                    {messagesElements}
                </div>

            </div>
        </div>

    )
}

export default Dialogs