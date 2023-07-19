import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";

const Login = () => {

    const onSubmitHandler = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>

    );
};

export default Login;