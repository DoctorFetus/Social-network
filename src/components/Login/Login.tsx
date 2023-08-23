import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {LoginType} from "./LoginContainer";
import {Redirect} from "react-router-dom";

const Login = (props: LoginType) => {

    const onSubmitHandler = (formData: FormDataType) => {
        props.loginIn(formData)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmitHandler}/>
        </div>

    );
};

export default Login;