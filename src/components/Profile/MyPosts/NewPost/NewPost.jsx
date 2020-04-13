import React from 'react';
import cm from './NewPost.module.css'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/profilePageReducer';

const NewPost = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (

        <div className={cm.newPost}>
            <textarea value={props.newPostTextData}
                onChange={onPostChange}/>
            <button onClick={addPost}>+</button>
        </div>

    )
}

export default NewPost;