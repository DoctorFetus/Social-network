import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import Paginator from "../common/Pagination/Paginator";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css'

const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, ...props}: UsersPropsType & {
    onPageChanged: (page: number) => void
}) => {
    return (
        <div className={s.container}>

            <Paginator currentPage={currentPage}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       onPageChanged={onPageChanged}/>

            {props.isFetching
                ? <Preloader/>
                : props.users.map(user =>
                    <User
                        key={user.id}
                        name={user.name}
                        id={user.id}
                        status={user.status}
                        followed={user.followed}
                        photos={user.photos}
                        followingFilter={props.followingFilter}
                        acceptUnfollowUser={props.acceptUnfollowUser}
                        acceptFollowUser={props.acceptFollowUser}/>
                )
            }
        </div>)
}

export default Users;