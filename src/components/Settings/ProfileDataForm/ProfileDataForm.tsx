import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UserProfileType} from "../../../redux/redusers/profile-reducer";
import {FormControl} from "../../common/FormsControl/FormsControl";
import {v1} from "uuid";
import style from "../../common/FormsControl/FormControl.module.css";
import Button from "@mui/material/Button";
import s from './ProfileDataForm.module.css'
import cn from 'classnames'
import Paper from '@mui/material/Paper';
import {capitalizeFirstLetter} from "../../../utils/capitalizeFirstLetter";

export type ProfileFormDataType = UserProfileType


const ProfileDataForm = ({error, initialValues, handleSubmit}: InjectedFormProps<ProfileFormDataType>) => {


    return (
        <>
            <form onSubmit={handleSubmit} className={s.formContainer}>
                <Paper elevation={3}>
                    <div className={s.itemsContainer}>
                        <h2>Profile information</h2>
                        <div className={s.oneForm}>
                            Full Name: <Field name={"fullName"} placeholder={"full name"} size={"small"}
                                              component={FormControl}/>
                        </div>
                        <div className={cn([s.oneForm], s.checkbox)}>
                            Looking for a job: <Field name={"lookingForAJob"} type={"checkbox"}
                                                      component={FormControl}
                                                      checked={initialValues.lookingForAJob}
                        />
                        </div>
                        <div className={s.oneForm}>
                            Skills: <Field name={"lookingForAJobDescription"} size={"small"} component={FormControl}/>
                        </div>
                        <div className={s.oneForm}>
                            About me: <Field name={"aboutMe"} size={"small"} component={FormControl}/>
                        </div>
                        <div>
                            <h3>Contacts</h3> {Object.keys(initialValues.contacts!).map((key) => {
                            return <div key={v1()} className={s.oneForm}>{capitalizeFirstLetter(key)}: <Field
                                name={"contacts." + key}
                                placeholder={key + " link"}
                                component={FormControl}
                                size={"small"}
                                error={error}
                            />
                            </div>
                        })}
                        </div>
                        <div>
                            <button className={s.saveBtn}><Button variant={"contained"}>save</Button></button>
                        </div>
                    </div>
                </Paper>
            </form>
            {error && <div className={style.formSummaryError}>{error}</div>}

        </>
    );
};

export default reduxForm<ProfileFormDataType>({form: "profileData"})(ProfileDataForm);