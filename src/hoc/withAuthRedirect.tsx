import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StoreType} from "../redux/store";


const mapStateToProps = (state: StoreType): {isAuth: boolean} => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<any, any> {

        componentDidUpdate() {
        }

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent)

}