import React from 'react';

import cm from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={cm.message}>{props.message}</div>
    )
}

export default Message