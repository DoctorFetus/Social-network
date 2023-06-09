import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/redusers/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        console.log(this.props)
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);