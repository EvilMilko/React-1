import React from 'react';

import cm from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={cm.message}>
            <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="" />
            <span className={cm.isent}>{props.message}</span>

        </div>
    )
}

export default Message