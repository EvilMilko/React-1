import React from 'react';
import cm from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {

    return (
    <div className={cm.content}>
        <img width="100%" src="https://klike.net/uploads/posts/2019-06/1561182942_2.jpg" />
        <div>
            ava
        </div>
        <MyPosts/>
    </div>
    )

}

export default Profile;