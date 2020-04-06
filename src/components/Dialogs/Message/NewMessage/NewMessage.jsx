import React from 'react';
import cm from './NewMessage.module.css'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/state';

const newMessage = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }


    return (
        <div className={cm.newMessage}>
            <textarea value={props.newMessageTextData}
                onChange={onMessageChange}/>
            <button onClick={addMessage}>+</button>
        </div>

    )
}

export default newMessage