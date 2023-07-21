import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"
import profileWallpaper from "../../assets/images/profileWallpaper.jpg";
import userPhoto from "../../assets/images/userPhoto.jpg";
import {ProfileProps} from "./ProfileContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props: ProfileProps) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.container}>
            <div className={s.content}>
                <img className={s.wallpaper} src={profileWallpaper}
                     alt="status_bg"/>
                {props.profile.photos.large
                    ? <img className={s.avatar} src={props.profile.photos.large} alt={"avatar"} />
                    : <img className={s.avatar} src={userPhoto} alt={"avatar"} />
                }
            </div>
                <div className={s.blocks}>
                    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    );
}

export default Profile;