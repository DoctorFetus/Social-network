import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";


const mapStateToProps = (state: StateType): {isAuth: boolean} => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)

}