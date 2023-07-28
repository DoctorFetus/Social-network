import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import Paginator from "../common/Pagination/Paginator";
import User from "./User/User";

const Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, ...props}: UsersPropsType & { onPageChanged: (page: number) => void }) => {
    return (
        <div>

            {props.users.map(user => <User
                key={user.id}
                name={user.name}
                id={user.id}
                status={user.status}
                followed={user.followed}
                photos={user.photos}
                followingFilter={props.followingFilter}
                acceptUnfollowUser={props.acceptUnfollowUser}
                acceptFollowUser={props.acceptFollowUser} />
            )}
            <Paginator currentPage={currentPage}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
                       onPageChanged={onPageChanged}/>
        </div>)
}

export default Users;