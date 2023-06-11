import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthType, setUserData} from "../../redux/redusers/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = AuthType
type MapDispatchToPropsType = {setUserData: (id: number, login: string, email: string) => void}

export type HeaderPropsType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        usersAPI.authMe()
            .then(response => {
            const {id, email, login} = response.data
            this.props.setUserData(id, email, login)
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: StateType): MapStateToPropsType => ({
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);