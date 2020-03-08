import React from 'react';
import cm from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import NewMessage from './Message/NewMessage/NewMessage';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData // Преобразует объект в массив с компонентами 
        .map((dialog) => <DialogItem id={dialog.id} name={dialog.name} />)

    let messagesElements = props.state.messagesData
        .map((message) => <Message id={message.id} message={message.message} />)

    let newMessageElement = React.createRef();

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

                    <NewMessage />
                </div>

            </div>
        </div>

    )
}

export default Dialogs