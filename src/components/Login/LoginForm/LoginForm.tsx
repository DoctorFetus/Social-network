import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../common/FormsControl/FormsControl";
import {required} from "../../../utils/validators/validators";
import style from "./../../common/FormsControl/FormControl.module.css"
import Button from "@mui/material/Button";
import {FormControlLabel, FormGroup, Grid, Icon} from "@mui/material";
import s from './LoginForm.module.css'
import Typography from "@mui/material/Typography";
import LoginIcon from '@mui/icons-material/Login';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <Grid container className={s.container}>
                <Grid item xs={5}>
                    {error && <div className={style.formSummaryError}>{error}</div>}
                    <Typography className={s.title}><span>Sign in </span><LoginIcon/></Typography>
                    <form className={s.form} onSubmit={handleSubmit}>
                            <FormGroup>
                                    <Field component={FormControl}
                                           name={"email"}
                                           placeholder={"Login"}/>
                                    <Field
                                        className={s.field}
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
                                <Button className={s.button} type={"submit"} variant={"contained"} color={"primary"}>
                                    Login
                                </Button>
                            </FormGroup>
                    </form>
                    <Accordion className={s.accordion}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>First time here?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                                <p>
                                    To log in get registered{" "}
                                    <a style={{textDecoration: 'underline'}} href={"https://social-network.samuraijs.com/"} target={"_blank"}>
                                        here
                                    </a>
                                </p>
                                <p>or use common test account credentials:</p>
                                <p> Email: free@samuraijs.com</p>
                                <p>Password: free</p>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </>

    );
};

export const LoginReduxForm = reduxForm<FormDataType, RestProps>({form: "login"})(LoginForm)

export default LoginForm;