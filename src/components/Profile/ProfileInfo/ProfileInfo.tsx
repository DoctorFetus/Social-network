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
    console.log(props.profile)
        return <div>
            <div className={s.content}>
                <img src="https://i.pinimg.com/originals/8b/93/0a/8b930aa82d8528c370b28718c52461eb.jpg"
                     alt="status_bg"/>
            </div>
            <div className={s.info}>
                {props.profile
                    ? props.profile.fullName
                    : "Mikhal Palkin"
                }
            </div>
        </div>
}

export default ProfileInfo;