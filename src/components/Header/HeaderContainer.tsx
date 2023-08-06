import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/redusers/auth-reducer";
import {StoreType} from "../../redux/store";
import ButtonAppBar from "./Header2";
import {UserProfileType} from "../../redux/redusers/profile-reducer";

type MapStateToPropsType = {
    isAuth: boolean,
    profile: UserProfileType | null
}
type MapDispatchToPropsType = {
    logout: () => void
}

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        // return <Header {...this.props}/>
        return <ButtonAppBar {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile

})

export default connect(mapStateToProps, {logout})(HeaderContainer);