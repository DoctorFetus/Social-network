import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";
import style from "./../../common/FormsControl/FormControl.module.css"

export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captchaUrl: string | null
}

type RestProps = {
    captchaUrl: string | null
}

const LoginForm = ({error, handleSubmit, captchaUrl}: InjectedFormProps<FormDataType, RestProps> & RestProps) => {
    return (
        <>
            {error && <div className={style.formSummaryError}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <Field component={Input}
                           name={"email"}
                           placeholder={"Login"}
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
                    <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
                </div>
                { captchaUrl &&
                    <>
                    <img src={captchaUrl} alt={"captcha"}/>
                        <Field
                            component={Input}
                            name={"captcha"}
                            validate={[required]}
                            placeholder={"captcha"}/>
                    </>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>

    );
};

export const LoginReduxForm = reduxForm<FormDataType, RestProps>({form: "login"})(LoginForm)

export default LoginForm;