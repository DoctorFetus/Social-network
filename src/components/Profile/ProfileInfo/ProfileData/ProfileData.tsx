import React from 'react';
import {ContactsKeyType, UserProfileType} from "../../../../redux/redusers/profile-reducer";
import {v1} from "uuid";
import Button from "@mui/material/Button";


type ProfileDataPropsType = {
    profile: UserProfileType,
    isOwner: boolean
}

const ProfileData = (props: ProfileDataPropsType) => {

    const isPropertyUnspecified = (prop: string) => prop ?  prop : "unspecified"

    return (
        <div>
            <div>Full name: {props.profile.fullName}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
            {props.profile.lookingForAJob && <div>Skills: {isPropertyUnspecified(props.profile.lookingForAJobDescription)}</div>}
            <div>About me: {isPropertyUnspecified(props.profile.aboutMe)}</div>
                Contacts: {Object.keys(props.profile.contacts).map((key) => {
            return <div key={v1()}>{key}: {isPropertyUnspecified(props.profile.contacts[key as ContactsKeyType])}</div>
        })}
        </div>
    );
};

export default ProfileData;