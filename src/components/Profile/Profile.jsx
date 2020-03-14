import React from 'react';
import cm from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                addPost={props.addPost}
                posts={props.profilePage.postsData}
                newPostTextData={props.profilePage.newPostTextData}
                updateNewPostText = {props.updateNewPostText}
            />
        </div>
    )


}

export default Profile;