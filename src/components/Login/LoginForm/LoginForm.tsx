import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";
import style from "./../../common/FormsControl/FormControl.module.css"
import Button from "@mui/material/Button";

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
                    <Field component={FormControl}
                           name={"email"}
                           placeholder={"Login"}
                    />
                </div>
                <div>
                    <Field
                        component={FormControl}
                        name={"password"}
                        type={"password"}
                        validate={[required]}
                        placeholder={"Password"}/>
                </div>
                <label>
                    <Field component={FormControl} name={"rememberMe"} type="checkbox"/> Remember me
                </label>
                { captchaUrl &&
                    <>
                    <img src={captchaUrl} alt={"captcha"}/>
                        <Field
                            component={FormControl}
                            name={"captcha"}
                            validate={[required]}
                            placeholder={"captcha"}/>
                    </>}
                <div>
                    <button>
                        <Button variant={"contained"}>Login</Button>
                    </button>
                </div>
            </form>
        </>

    );
};

export const LoginReduxForm = reduxForm<FormDataType, RestProps>({form: "login"})(LoginForm)

export default LoginForm;