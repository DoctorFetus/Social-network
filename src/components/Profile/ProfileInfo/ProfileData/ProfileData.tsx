import React from 'react';
import {ContactsKeyType, UserProfileType} from "../../../../redux/redusers/profile-reducer";
import {v1} from "uuid";


type ProfileDataPropsType = {
    profile: UserProfileType,
    changeEditMode: (isEditMode: boolean) => void
}

const ProfileData = (props: ProfileDataPropsType) => {

    const isPropertyUnspecified = (prop: string) => prop ?  prop : "unspecified"

    return (
        <div>
            <button onClick={() => props.changeEditMode(true)}>edit</button>
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