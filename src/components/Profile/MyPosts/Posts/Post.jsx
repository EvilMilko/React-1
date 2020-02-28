import React from 'react';
import cm from './Posts.module.css'

const Post = () => {

    return (
        <div className={cm.item}>
            <img className='img' src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="" />
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )

}

export default Post;