import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UserProfileType} from "../../../../redux/redusers/profile-reducer";
import {Input, Textarea} from "../../../common/FormsControl/FormsControl";
import {v1} from "uuid";
import style from "../../../common/FormsControl/FormControl.module.css";

export type ProfileFormDataType = UserProfileType

const ProfileDataForm = ({error, initialValues, handleSubmit}: InjectedFormProps<ProfileFormDataType>) => {


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <button>save</button>
                </div>
                Full Name: <Field name={"fullName"} placeholder={"full name"} component={Input}/>
                Looking for a job: <Field name={"lookingForAJob"} type={"checkbox"} component={Input}/>
                Skills: <Field name={"lookingForAJobDescription"} component={Textarea}/>
                About me: <Field name={"aboutMe"} component={Textarea}/>
                Contacts: {Object.keys(initialValues.contacts!).map((key) => {
                return <div key={v1()}>{key}: <Field
                    name={"contacts." + key}
                    placeholder={key}
                    component={Input}
                    error={error}
                />
                </div>
            })}
            </form>
            {error && <div className={style.formSummaryError}>{error}</div>}
        </>
    );
};

export default reduxForm<ProfileFormDataType>({form: "profileData"})(ProfileDataForm);