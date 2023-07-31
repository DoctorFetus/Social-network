import React, {ChangeEvent} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"
import profileWallpaper from "../../assets/images/profileWallpaper.jpg";
import userPhoto from "../../assets/images/userPhoto.jpg";
import {ProfileProps} from "./ProfileContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props: ProfileProps & {isOwner: boolean}) => {

    if (!props.profile) {
        return <Preloader />
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.files) {
            props.updatePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            <div className={s.container}>
            <div className={s.content}>
                <img className={s.wallpaper} src={profileWallpaper}
                     alt="status_bg"/>
                <img className={s.avatar} src={props.profile.photos.large || userPhoto} alt={"avatar"} />
                {props.isOwner && <input onChange={onFileChange} className={s.chooseFile} type="file"/>}
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