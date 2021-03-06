import React from 'react';
import cm from './MyPosts.module.css'
import Post from './Posts/Post';
import NewPost from './NewPost/NewPost';


const MyPosts = (props) => {

    let postsElements = // Преобразует объект в массив с компонентами 
        props.posts.map((post) => <Post likescount={post.likescount} message={post.message} />)

    return (
        <div>
            <div className={cm.postsBlock}>
                <h2>my posts</h2>
            </div>
            <div>
            {/* Добавление нового поста */}
                <NewPost newPostTextData={props.newPostTextData} dispatch={props.dispatch}/>
            </div>
            {/* Вывод весх постов */}
            <div className={cm.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;