import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile  = () => {
    return (
        <div className="content">
            <div>
                <img src="https://i.pinimg.com/originals/8b/93/0a/8b930aa82d8528c370b28718c52461eb.jpg"
                     alt="status_bg"/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;