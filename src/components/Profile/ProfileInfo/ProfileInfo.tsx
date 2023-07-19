import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import {UserProfileType} from "../../../redux/redusers/profile-reducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


export type ProfileInfoType = {
    profile: UserProfileType
    status: string | null
    updateStatus: (status: string) => void
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
            <div>Status: <ProfileStatus status={props.status ? props.status : "null"} updateStatus={props.updateStatus}/></div>
        </div>
}

export default ProfileInfo;