import React from 'react';
import {getUserProfile, updateProfileData, UserProfileType} from "../../redux/redusers/profile-reducer";
import {connect} from "react-redux";
import {StoreType} from "../../redux/store";
import Settings from "./Settings";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";


type mapStateToPropsType = {
    profile: UserProfileType | null,
    authorizedUserId: number | null
}

type mapDispatchToPropsType = {
    updateProfileData: (profileData: UserProfileType) => void
    getUserProfile: (userId: string) => void
}

export type SettingsPropsType = mapDispatchToPropsType & mapStateToPropsType


const mapStateToProps = (state: StoreType): mapStateToPropsType => ({
    profile: state.profilePage["profile"],
    authorizedUserId: state.auth["id"]
})

class SettingsContainer extends React.Component<SettingsPropsType> {

    componentDidMount() {
        this.props.getUserProfile(this.props.authorizedUserId!.toString())
    }

    render() {

        if (!this.props.profile) {
            return <Preloader/>
        }

        return (
            <div>
                <Settings {...this.props}/>
            </div>
        );
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {updateProfileData, getUserProfile}),
    withRouter,
    withAuthRedirect
)(SettingsContainer);