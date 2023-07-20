import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       name={"email"}
                       placeholder={"Login"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"password"}
                    // type={"password"}
                    validate={[required]}
                    placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export default LoginForm;