import React from 'react';
import Profile from "./Profile";
import {getUserProfile, UserProfileType} from "../../redux/redusers/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: UserProfileType | null
}

type MapDispatchToPropsType = {
    getUserProfile: (userID: string) => void
}

type PathParamsType = {
    userId: string
}

type WithRouterType = RouteComponentProps<PathParamsType>

type ProfileProps = MapStateToPropsType & MapDispatchToPropsType & WithRouterType

class ProfileContainer extends React.Component<ProfileProps> {


    componentDidMount() {
        let userID = this.props.match.params.userId

        if (!userID) {
            userID = "29052"
        }

        this.props.getUserProfile(userID)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
