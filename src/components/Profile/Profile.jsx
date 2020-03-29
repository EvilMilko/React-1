import React from 'react';
import cm from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.postsData}
                newPostTextData={props.profilePage.newPostTextData}
                dispatch={props.dispatch}
            />
        </div>
    )


}

export default Profile;