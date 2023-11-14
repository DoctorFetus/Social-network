import React, {useEffect} from 'react';
import {UsersPropsType} from "./UsersContainer";
import Paginator from "../common/Pagination/Paginator";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css'
import {UserSearchForm} from "./UserSearchForm";
import {FilterType} from "../../redux/redusers/users-reducer";
import {useHistory} from "react-router-dom";

const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, onFilterChanged, filter, getUsers, ...props}: UsersPropsType & {
    onPageChanged: (page: number) => void
    onFilterChanged: (filter: FilterType) => void
}) => {

    const history = useHistory()

    useEffect(() => {
        const parsed = new URLSearchParams(history.location.search)
        let activePage = currentPage
        let actualFilter = filter

        if (parsed.has('page')) activePage = Number(parsed.get('page'))
        if (parsed.has('term')) actualFilter = {...filter, term: parsed.get('term') as string}
        if (parsed.get('friend') !== "null") actualFilter = {...actualFilter, friend: parsed.get('friend') === "true" }

        getUsers(activePage, pageSize, actualFilter)

    }, []);

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage]);

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