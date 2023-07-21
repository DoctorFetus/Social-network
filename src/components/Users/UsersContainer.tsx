import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {acceptFollowUser, acceptUnfollowUser, getUsers, UsersPageType} from "../../redux/redusers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    acceptFollowUser: (userId: number) => void
    acceptUnfollowUser: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
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

// export default connect(mapStateToProps,
//     {acceptFollowUser, acceptUnfollowUser, getUsers}
//     )(UsersContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps,{acceptFollowUser, acceptUnfollowUser, getUsers}),
    withAuthRedirect
)(UsersContainer)
