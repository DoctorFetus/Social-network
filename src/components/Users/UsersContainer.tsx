import {connect} from "react-redux";
import {StoreType} from "../../redux/store";
import {acceptFollowUser, acceptUnfollowUser, requestUsers, UsersPageType} from "../../redux/redusers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFollowingFilter, getIsFetching,
    getPagesSelector,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    acceptFollowUser: (userId: number) => void
    acceptUnfollowUser: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
    users: getUsers(state),
    pageSize: getPagesSelector(state),
    totalUsersCount:getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingFilter: getFollowingFilter(state)
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
                {/*{this.props.isFetching*/}
                {/*    ? <Preloader/>*/}
                {/*    : */}
                    <Users {...this.props} onPageChanged={this.onPageChanged}/>
                {/*// }*/}
            </>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{acceptFollowUser, acceptUnfollowUser, getUsers: requestUsers}),
    withAuthRedirect
)(UsersContainer)
