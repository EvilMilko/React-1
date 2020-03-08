import React from 'react';
import cm from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {
    let postsElements = // Преобразует объект в массив с компонентами 
        props.posts.map((post) => <Post likescount={post.likescount} message={post.message} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
        newPostElement.current.value= '';
    }

    return (
        <div>
            <div className={cm.postsBlock}>
                <h2>my posts</h2>
            </div>
            <div>
                {/* Добавление нового поста */}
                <div className={cm.newPost}>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPost}>+</button>
                </div>
            </div>
            {/* Вывод весх постов */}
            <div className={cm.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;