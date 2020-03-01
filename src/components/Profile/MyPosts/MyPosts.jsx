import React from 'react';
import cm from './MyPosts.module.css'
import Post from './Posts/Post';


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
                <Post likescount="5" message="text" />
                <Post likescount="2" message="text2" />
            </div>
        </div>
    )

}

export default MyPosts;