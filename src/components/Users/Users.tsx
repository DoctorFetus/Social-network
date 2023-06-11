import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.jpg";
import {UsersPropsType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props: UsersPropsType & { onPageChanged: (page: number) => void }) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>

            {props.users.map(user => <div key={user.id} className={s.container}>
                <div className={s.ava_btn}>
                    <NavLink to={"/profile/" + user.id}>
                        <img className={s.avatar} src={user.photos.small ? user.photos.small : userPhoto} alt="avatar"/>
                    </NavLink>
                    {user.followed
                        ? <button className={s.btn} onClick={() => {

                            usersAPI.unfollowUser(user.id)
                                .then(response => {
                                if (!response.resultCode) {
                                    props.unfollowUser(user.id)
                                }
                            })

                        }}>unfollow</button>
                        : <button className={s.btn} onClick={() =>{

                            usersAPI.followUser(user.id)
                                .then(response => {
                                if (!response.resultCode) {
                                    props.followUser(user.id)
                                }
                            })}

                        }>follow</button>}
                </div>
                <div className={s.userInfo}>
                    <div className={s.name_status}>
                        <div className={s.name}>{user.name}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={s.location}>
                        {'Russia'}, <br/>
                        {'Moscow'}
                    </div>
                </div>
            </div>)}
            <div className={s.pagesContainer}>
                {pages.map(page => {
                    if (page <= 10) {
                        return <span
                            key={page}
                            className={props.currentPage === page ? `${s.pageSelector} ${s.activePage}` : s.pageSelector}
                            onClick={() => props.onPageChanged(page)}
                        >{page}</span>
                    }
                })}
            </div>
        </div>)
}

export default Users;