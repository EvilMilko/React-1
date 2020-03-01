import React from 'react';
import cm from './MyPosts.module.css'
import Post from './Posts/Post';

let postData = [
    { id: 1, message: "First post", likescount: 5 },
    { id: 2, message: "Bleat", likescount: 1 },
]

const MyPosts = () => {

    return (
        <div>
            <div className={cm.postsBlock}>
                <h2>my posts</h2>
            </div>
            <div>
                <div className={cm.newPost}>
                    <textarea></textarea>
                    <button>+</button>
                </div>
            </div>

            <div className={cm.posts}>
                <Post likescount={postData[1].likescount} message={postData[1].message} />
                <Post likescount={postData[0].likescount} message={postData[0].message} />

            </div>
        </div>
    )

}

export default MyPosts;