import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile, UserProfileType} from "../../redux/redusers/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: UserProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (newProfile: UserProfileType) => void
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
            userID = "2"
        }

        axios.get<UserProfileType>("https://social-network.samuraijs.com/api/1.0/profile/" + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);