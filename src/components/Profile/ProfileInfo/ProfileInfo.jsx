import React from 'react';
import cm from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img width="100%" src="https://klike.net/uploads/posts/2019-06/1561182942_2.jpg" />

            </div>
            <div className={cm.descriptionBlock}>
                ava
            </div>
        </div>

    )

}

export default ProfileInfo;