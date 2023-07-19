import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, AuthType} from "../../redux/redusers/auth-reducer";
import {StoreType} from "../../redux/redux-store";

type MapStateToPropsType = AuthType
type MapDispatchToPropsType = {getAuthUserData: () => void}

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);