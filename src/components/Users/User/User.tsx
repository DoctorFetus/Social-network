import React from 'react';
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/userPhoto.jpg";
import {UserType} from "../../../redux/redusers/users-reducer";
import Button from '@mui/material/Button';


type UserPropsType = Omit<UserType, 'uniqueUrlName'> & {
    followingFilter: number[]
    acceptUnfollowUser: (id: number) => void
    acceptFollowUser: (id: number) => void
}
const User = (props: UserPropsType) => {
    return (
        <div className={s.container}>
            <div className={s.commonInfo}>
                <NavLink to={"/profile/" + props.id}>
                    <img className={s.avatar} src={props.photos.small ? props.photos.small : userPhoto} alt="avatar"/>
                </NavLink>

                <div className={s.userInfo}>
                    <div className={s.name}>{props.name}</div>
                </div>
            </div>

            <div>{props.status}</div>

            {props.followed
                ? <Button variant={'contained'}
                          disabled={props.followingFilter.some(id => props.id == id)}
                          onClick={() => {
                              props.acceptUnfollowUser(props.id)
                          }}
                >unfollow</Button>
                : <Button variant={'contained'}
                          disabled={props.followingFilter.some(id => props.id == id)}
                          onClick={() => {
                              props.acceptFollowUser(props.id)
                          }}
                >follow</Button>}
        </div>
    );
};

export default User;