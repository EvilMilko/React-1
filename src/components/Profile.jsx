import React from 'react';
import cm from './Profile.module.css'

const Profile = () => {

    return (
    <div className={cm.content}>
        <img width="100%" src="https://klike.net/uploads/posts/2019-06/1561182942_2.jpg" />
        <div>
            ava
        </div>
        <div>
           my posts
            <div>
                new post
            </div>

            <div className={cm.posts}>
               <div className={cm.item}>
                    post 1
               </div>
               <div className={cm.item}>
                    post 2
               </div>
            </div>
        </div>
    </div>
    )

}

export default Profile;