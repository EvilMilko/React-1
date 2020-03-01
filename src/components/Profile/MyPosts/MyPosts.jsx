import React from 'react';
import cm from './MyPosts.module.css'
import Post from './Posts/Post';

let postsData = [
    { id: 1, message: "First post", likescount: 5 },
    { id: 2, message: "Bleat", likescount: 1 },
]

let postsElements = postsData // Преобразует объект в массив с компонентами 
    .map((post) => <Post likescount={post.likescount} message={post.message} />)

const MyPosts = () => {

    return (
        <div>
            <div className={cm.postsBlock}>
                <h2>my posts</h2>
            </div>
            <div>
                {/* Добавление нового поста */}
                <div className={cm.newPost}>
                    <textarea></textarea>
                    <button>+</button>
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