import React from "react";
import s from "./Posts.module.css"
import {UserProfileType} from "../../../../redux/redusers/profile-reducer";
import userPhoto from "../../../../assets/images/userPhoto.jpg"

export type PostsType = {
    id: number,
    message: string,
    likeCounter: number
}

const Posts = (props: PostsType &  {profile: UserProfileType | null}) => {
    return (
        <div className={s.container}>

            <div className={s.item}>
                {props.profile?.photos.large
                    ? <img src={props.profile.photos.large} alt={"avatar"}/>
                    : <img src={userPhoto} alt={"avatar"} /> }
                <div className={s.postText}>
                    {props.message}
                </div>
            </div>
            <div>
                <span>❤ {props.likeCounter}</span>
            </div>
        </div>
    );
}

export default Posts;