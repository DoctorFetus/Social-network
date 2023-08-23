import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";
import style from "./../../common/FormsControl/FormControl.module.css"
import Button from "@mui/material/Button";
import {FormControlLabel, FormGroup, FormLabel, Grid} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

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
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <div>*/}
            {/*        <Field component={FormControl}*/}
            {/*               name={"email"}*/}
            {/*               placeholder={"Login"}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <Field*/}
            {/*            component={FormControl}*/}
            {/*            name={"password"}*/}
            {/*            type={"password"}*/}
            {/*            validate={[required]}*/}
            {/*            placeholder={"Password"}/>*/}
            {/*    </div>*/}
            {/*    <label>*/}
            {/*        <Field component={FormControl} name={"rememberMe"} type="checkbox"/> Remember me*/}
            {/*    </label>*/}
            {/*    { captchaUrl &&*/}
            {/*        <>*/}
            {/*        <img src={captchaUrl} alt={"captcha"}/>*/}
            {/*            <Field*/}
            {/*                component={FormControl}*/}
            {/*                name={"captcha"}*/}
            {/*                validate={[required]}*/}
            {/*                placeholder={"captcha"}/>*/}
            {/*        </>}*/}
            {/*    <div>*/}
            {/*        <button>*/}
            {/*            <Button variant={"contained"}>Login</Button>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</form>*/}
            <Grid container style={{marginLeft: '250px'}}>
                <Grid item xs={4}>
                    {error && <div className={style.formSummaryError}>{error}</div>}
                    <form onSubmit={handleSubmit}>
                            <FormLabel>
                                <p>
                                    To log in get registered{" "}
                                    <a style={{textDecoration: 'underline'}} href={"https://social-network.samuraijs.com/"} target={"_blank"}>
                                        here
                                    </a>
                                </p>
                                <p>or use common test account credentials:</p>
                                <p> Email: free@samuraijs.com</p>
                                <p>Password: free</p>
                            </FormLabel>
                            <FormGroup>
                                {/*<TextField>*/}
                                    <Field component={FormControl}
                                           name={"email"}
                                           placeholder={"Login"}/>
                                    <Field
                                        style={{marginTop: '10px'}}
                                        component={FormControl}
                                        name={"password"}
                                        type={"password"}
                                        validate={[required]}
                                        placeholder={"Password"}
                                        />
                                <FormControlLabel
                                    label={"Remember me"}
                                    control={
                                        <Field component={FormControl} name={"rememberMe"} type="checkbox"/>
                                    }
                                />
                                <Button type={"submit"} variant={"contained"} color={"primary"}>
                                    Login
                                </Button>
                            </FormGroup>
                        {/*</FormControl>*/}
                    </form>
                </Grid>
            </Grid>
        </>

    );
};

export const LoginReduxForm = reduxForm<FormDataType, RestProps>({form: "login"})(LoginForm)

export default LoginForm;