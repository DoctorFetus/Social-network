import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import Paginator from "../common/Pagination/Paginator";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css'
import {UserSearchForm} from "./UserSearchForm";
import {FilterType} from "../../redux/redusers/users-reducer";

const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, onFilterChanged, ...props}: UsersPropsType & {
    onPageChanged: (page: number) => void
    onFilterChanged: (filter: FilterType) => void
}) => {
    return (
        <div className={s.container}>

            <UserSearchForm onFilterChanged={onFilterChanged}/>

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