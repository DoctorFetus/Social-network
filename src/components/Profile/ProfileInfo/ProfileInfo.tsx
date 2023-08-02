import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import {updateProfileData, UserProfileType} from "../../../redux/redusers/profile-reducer";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm, {ProfileFormDataType} from "./ProfileData/ProfileDataForm";


export type ProfileInfoType = {
    profile: UserProfileType
    status: string | null
    updateStatus: (status: string) => void
    updateProfileData: (profileData: UserProfileType) => Promise<string>
}

const ProfileInfo = (props: ProfileInfoType) => {

    const [editMode, setEditMode] = useState(false)

    const changeEditMode = (isEditMode: boolean) => setEditMode(isEditMode)

    const handleSubmit = (formData: ProfileFormDataType) => {
        props.updateProfileData(formData)
            .then(() => changeEditMode(false))

    }
    return <div className={s.container}>
        {editMode
            ? <ProfileDataForm initialValues={props.profile} onSubmit={handleSubmit}/>
            : <ProfileData profile={props.profile} changeEditMode={changeEditMode}/>
        }
        <div>Status: <ProfileStatus status={props.status ? props.status : "null"} updateStatus={props.updateStatus}/>
        </div>

    </div>
}

export default ProfileInfo;