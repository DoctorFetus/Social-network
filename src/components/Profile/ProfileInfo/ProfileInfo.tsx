import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="https://i.pinimg.com/originals/8b/93/0a/8b930aa82d8528c370b28718c52461eb.jpg"
                     alt="status_bg"/>
            </div>
            <div className={s.info}>
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;