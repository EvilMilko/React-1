import React from 'react';
import cm from './MyPosts.module.css'
import Post from './Posts/Post';


const MyPosts = () => {

    return (
        <div>
            my posts
            <div>
                new post
            </div>

            <div className={cm.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )

}

export default MyPosts;