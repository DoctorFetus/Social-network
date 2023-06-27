import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {acceptFollowUser, getUsers, acceptUnfollowUser, UsersPageType} from "../../redux/redusers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    acceptFollowUser: (userId: number) => void
    acceptUnfollowUser: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingFilter: state.usersPage.followingFilter
})

class UsersContainer extends React.Component<UsersPropsType, []> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users {...this.props} onPageChanged={this.onPageChanged}/>}
            </>
        )
    }
}

export default connect(mapStateToProps,
    {acceptFollowUser, acceptUnfollowUser, getUsers}
    )(UsersContainer)

