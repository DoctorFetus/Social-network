import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollowUser,
    UsersPageType,
    UserType
} from "../../redux/redusers/users-reducer";
import React from "react";
import axios, {AxiosResponse} from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

class UsersContainer extends React.Component<UsersPropsType, []> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<Array<UserType>>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(page)
        axios.get<Array<UserType>>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
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
    {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}
    )(UsersContainer)

