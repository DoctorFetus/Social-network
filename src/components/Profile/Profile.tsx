import React, {ChangeEvent} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"
import profileWallpaper from "../../assets/images/profileWallpaper.jpg";
import userPhoto from "../../assets/images/userPhoto.jpg";
import {ProfileProps} from "./ProfileContainer";
import Preloader from "../common/Preloader/Preloader";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const Profile = (props: ProfileProps & { isOwner: boolean }) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.files) {
            props.updatePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div className={s.container}>
            <img className={s.wallpaper} src={profileWallpaper}
                 alt="status_bg"/>
            <div className={s.content}>
                <div className={s.profileBlock}>
                    <div className={s.avatar}>
                        <img className={s.avatarImage} src={props.profile.photos.large || userPhoto} alt={"avatar"}/>
                        {props.isOwner && <>
                            <IconButton aria-label="delete" size="small"
                                        style={{
                                            "marginLeft": "-45px"
                            }}>
                                <label>
                                    <AddAPhotoIcon fontSize="medium"/>
                                    <input id="fileBtn" onChange={onFileChange} style={{"display": "none"}}
                                           className={s.chooseFile} type="file"/>
                                </label>
                            </IconButton>
                        </>}
                    </div>
                    <div className={s.blocks}>
                        <ProfileInfo profile={props.profile}
                                     status={props.status}
                                     updateStatus={props.updateStatus}
                                     updateProfileData={props.updateProfileData}
                                     isOwner={props.isOwner}
                        />
                    </div>
                </div>
                <div className={s.postsBlock}>
                    <MyPostsContainer/>
                </div>
            </div>
        </div>
    );
}

export default Profile;