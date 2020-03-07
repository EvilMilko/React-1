import React from 'react';
import cm from './Frend.module.css'


const Frend = (props) => {
    return (
        
            <div className={cm.item}>
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="" />
                <div>{props.name}</div>
            </div>

       
    )
}

export default Frend