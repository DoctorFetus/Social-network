import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";
import style from "./../../common/FormsControl/FormControl.module.css"

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
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
                        type={"password"}
                        validate={[required]}
                        placeholder={"Password"}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} checked type="checkbox"/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>

    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export default LoginForm;