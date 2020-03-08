import React from 'react';
import cm from './NewPost.module.css'

const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
        newPostElement.current.value = '';
    }

    return (

        <div className={cm.newPost}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>+</button>
        </div>

    )

}

export default NewPost;