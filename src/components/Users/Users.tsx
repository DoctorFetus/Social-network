import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import Paginator from "../common/Pagination/Paginator";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css'
import {Formik} from "formik";

const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, ...props}: UsersPropsType & {
    onPageChanged: (page: number) => void
}) => {
    return (
        <div className={s.container}>

            <UserSearchForm />

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

const usersSearchFormValidate = (values: any) => {
    return {}
}

const submit = (values: any, {setSubmitting}: any) => {
}

const UserSearchForm = () => {
    return <div>
        <Formik
        initialValues={{term: ''}}
        validate={usersSearchFormValidate}
        onSubmit={submit}
        >

        </Formik>

    </div>
}

export default Users;