import React from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/redusers/profile-reducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import {ProfileFormDataType} from "../../Settings/ProfileDataForm/ProfileDataForm";
import Typography from '@mui/material/Typography';


export type ProfileInfoType = {
    profile: UserProfileType
    status: string | null
    updateStatus: (status: string) => void
    updateProfileData: (profileData: UserProfileType) => Promise<string>
    isOwner: boolean
}

const ProfileInfo = (props: ProfileInfoType) => {

    return <div className={s.container}>
        <Typography variant={"h5"}>{props.profile.fullName}</Typography>
        <div>Status: <ProfileStatus status={props.status ? props.status : "null"} updateStatus={props.updateStatus}/>
        </div>
        <ProfileData profile={props.profile} isOwner={props.isOwner}/>


    </div>
}

export default ProfileInfo;