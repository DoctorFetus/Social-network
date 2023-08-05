import React from "react";
import s from "./Settings.module.css"
import {SettingsPropsType} from "./SettingsContainer";
import ProfileDataForm, {ProfileFormDataType} from "./ProfileDataForm/ProfileDataForm";

const Settings = (props: SettingsPropsType) => {

    const handleSubmit = (formData: ProfileFormDataType) => {
        props.updateProfileData(formData)
    }
    return (
        <div>
            <ProfileDataForm initialValues={props.profile!} onSubmit={handleSubmit}/>
        </div>
    );
}

export default Settings;