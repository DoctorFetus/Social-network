import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthType, logout} from "../../redux/redusers/auth-reducer";
import {StoreType} from "../../redux/store";

type MapStateToPropsType = AuthType
type MapDispatchToPropsType = {
    logout: () => void
}

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {logout})(HeaderContainer);