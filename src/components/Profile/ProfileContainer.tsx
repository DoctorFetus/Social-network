import React from 'react';
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateStatus, UserProfileType} from "../../redux/redusers/profile-reducer";
import {connect} from "react-redux";
import {StoreType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    profile: UserProfileType | null
    status: string | null
    authorizedUserId: number | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
    getUserStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string
}

type WithRouterType = RouteComponentProps<PathParamsType>

export type ProfileProps = MapStateToPropsType & MapDispatchToPropsType & WithRouterType

class ProfileContainer extends React.Component<ProfileProps> {


    componentDidMount() {
        let userID = this.props.match.params.userId

        if (!userID) {
            userID = (this.props.authorizedUserId)!.toString()

        }

        this.props.getUserProfile(userID)
        this.props.getUserStatus(userID)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage["profile"],
    status: state.profilePage["status"],
    authorizedUserId: state.auth["id"]
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
