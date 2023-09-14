import {connect} from "react-redux";
import {StoreType} from "../../redux/store";
import {
    acceptFollowUser,
    acceptUnfollowUser,
    FilterType,
    requestUsers, setFiler,
    UsersPageType
} from "../../redux/redusers/users-reducer";
import React from "react";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingFilter,
    getIsFetching,
    getPagesSelector,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../redux/selectors/users-selectors";

type mapStateToPropsType = UsersPageType
type mapDispatchToPropsType = {
    acceptFollowUser: (userId: number) => void
    acceptUnfollowUser: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    setFilter: (term: string) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: StoreType) => ({
    users: getUsers(state),
    pageSize: getPagesSelector(state),
    totalUsersCount:getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingFilter: getFollowingFilter(state),
    filter: getUsersFilter(state)
})

class UsersContainer extends React.Component<UsersPropsType, []> {

    componentDidMount() {
        
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    onPageChanged = (page: number) => {
        this.props.getUsers(page, this.props.pageSize, this.props.filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {
        return  <Users {...this.props} onPageChanged={this.onPageChanged} onFilterChanged={this.onFilterChanged}/>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{acceptFollowUser, acceptUnfollowUser, getUsers: requestUsers, setFiler}),
    withAuthRedirect
)(UsersContainer)
