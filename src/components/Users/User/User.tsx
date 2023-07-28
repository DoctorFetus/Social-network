import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import {UserType} from "../../../redux/redusers/users-reducer";


type UserPropsType = Omit<UserType, 'uniqueUrlName'> & {
    followingFilter: number[]
    acceptUnfollowUser: (id: number) => void
    acceptFollowUser: (id: number) => void
}
const User = (props: UserPropsType ) => {
    return (
        <div className={s.container}>
            <div className={s.ava_btn}>
                <NavLink to={"/profile/" + props.id}>
                    <img className={s.avatar} src={props.photos.small ? props.photos.small : userPhoto} alt="avatar"/>
                </NavLink>
                {props.followed
                    ? <button className={s.btn}
                              disabled={props.followingFilter.some(id => props.id == id)}
                              onClick={() => {
                                  props.acceptUnfollowUser(props.id)
                              }}
                    >unfollow</button>
                    : <button className={s.btn}
                              disabled={props.followingFilter.some(id => props.id == id)}
                              onClick={() => {
                                  props.acceptFollowUser(props.id)
                              }}
                    >follow</button>}
            </div>
            <div className={s.userInfo}>
                <div className={s.name_status}>
                    <div className={s.name}>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div className={s.location}>
                    {'Russia'}, <br/>
                    {'Moscow'}
                </div>
            </div>
        </div>
        );
};

export default User;