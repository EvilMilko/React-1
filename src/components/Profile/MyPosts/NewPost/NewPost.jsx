import React from 'react';
import cm from './NewPost.module.css'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/state';

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        if (text != '') {
      
            props.dispatch(addPostActionCreator());
        } else
            alert('Введите текст!')
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (

        <div className={cm.newPost}>
            <textarea value={props.newPostTextData} onChange={onPostChange} ref={newPostElement} />
            <button onClick={addPost}>+</button>
        </div>

    )

}

export default NewPost;