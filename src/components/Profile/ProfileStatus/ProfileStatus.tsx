import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfileInfoType} from "../ProfileInfo/ProfileInfo";

const ProfileStatus = (props: Omit<ProfileInfoType, "profile">) => {

    const [editMode, setEditMode] = useState(false)
    const [currentStatus, setCurrentStatus] = useState(props.status)

    useEffect(() => {
        setCurrentStatus(props.status)
    }, [props.status])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentStatus(e.currentTarget.value)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(currentStatus!)
    }
    return <span>
            {!editMode
                ? <span onDoubleClick={() => activateEditMode()}>{currentStatus}</span>
                : <input onChange={onChangeHandler}
                         onBlur={() => deactivateEditMode()}
                         autoFocus
                         value={currentStatus!}/>}
        </span>
}

export default ProfileStatus;