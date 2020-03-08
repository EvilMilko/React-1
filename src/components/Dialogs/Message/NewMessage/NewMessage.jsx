import React from 'react';
import cm from './NewMessage.module.css'

const newMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
        newMessageElement.current.value = '';
    }

    return (

        <div className={cm.newMessage}>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>+</button>
        </div>

    )
}

export default newMessage