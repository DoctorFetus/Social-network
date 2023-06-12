import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowing,
    unfollowUser,
    UsersPageType,
    UserType
} from "../../redux/redusers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowing: (userID: number, isFollowing: boolean) => void
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
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
            })
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
    {followUser, unfollowUser, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching, toggleIsFollowing}
    )(UsersContainer)

