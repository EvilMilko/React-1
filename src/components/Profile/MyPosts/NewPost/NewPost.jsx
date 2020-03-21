import React from 'react';
import cm from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        if (text !='') {
            let action = {type: "ADD-POST"}
            props.dispatch(action);
            
        }else
        alert('Введите текст!')
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text}
        props.dispatch(action);
    }

    return (

        <div className={cm.newPost}>
            <textarea value={props.newPostTextData} onChange={onPostChange} ref={newPostElement}/>
            <button onClick={addPost}>+</button>
        </div>

    )

}

export default NewPost;