import React from 'react';
import cm from './SideBar.module.css'
import Frend from './Frends/Frend';


const SideBar = (props) => {
    
    let frends = props.state // Преобразует объект в массив с компонентами 
        .map((frend) => <Frend name={frend.name}/>)

    return (
        <div className={cm.frends}>
            {frends}
        </div>
    )
}

export default SideBar