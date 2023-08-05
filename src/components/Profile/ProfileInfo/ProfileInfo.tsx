import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import {UserProfileType} from "../../../redux/redusers/profile-reducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm, {ProfileFormDataType} from "../../Settings/ProfileDataForm/ProfileDataForm";


export type ProfileInfoType = {
    profile: UserProfileType
    status: string | null
    updateStatus: (status: string) => void
    updateProfileData: (profileData: UserProfileType) => Promise<string>
    isOwner: boolean
}

const ProfileInfo = (props: ProfileInfoType) => {


    const handleSubmit = (formData: ProfileFormDataType) => {
        props.updateProfileData(formData)

    }
    return <div className={s.container}>
             <ProfileData profile={props.profile} isOwner={props.isOwner}/>
        <div>Status: <ProfileStatus status={props.status ? props.status : "null"} updateStatus={props.updateStatus}/>
        </div>

    </div>
}

export default ProfileInfo;