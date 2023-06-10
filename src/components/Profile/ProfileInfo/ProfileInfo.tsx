import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import {UserProfileType} from "../../../redux/redusers/profile-reducer";


export type ProfileInfoType = {
    profile: UserProfileType
}

const ProfileInfo = (props:  ProfileInfoType) => {
        if (!props.profile) {
            return <Preloader />
        }
        return <div className={s.container}>
            <div className={s.name}>
                {props.profile.photos
                    ? props.profile.fullName
                    : "Mikhal Palkin"
                }
            </div>
            <div>{props.profile.aboutMe}</div>
            <div>Looking for job: {props.profile.lookingForAJob ? "YES" : "NO"}</div>
        </div>
}

export default ProfileInfo;