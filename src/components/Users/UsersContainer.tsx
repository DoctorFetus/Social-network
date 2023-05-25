import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followUserAC,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC,
    UsersPageType,
    UserType
} from "../../redux/redusers/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios, {AxiosResponse} from "axios";
import Users from "./Users";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (usersCount: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
})

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
    followUser: (userID) => {
        dispatch(followUserAC(userID))
    },
    unfollowUser: (userID) => {
        dispatch(unfollowUserAC(userID))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
        dispatch(setCurrentPageAC(page))
    },
    setTotalUsersCount: (usersCount) => {
        dispatch(setTotalUsersCountAC(usersCount))
    }
})

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get<Array<UserType>>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get<Array<UserType>>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged}/>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
