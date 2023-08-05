import React from 'react';
import s from './AddMessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../../../common/FormsControl/FormsControl";
import {maxLength, required} from "../../../../utils/validators/validators";
import Button from "@mui/material/Button";

export type AddMessageFormType = {
    newMessageBody: string
}
const maxLength100 = maxLength(100)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form className={s.sender} onSubmit={props.handleSubmit}>
            <Field
                name={"newMessageBody"}
                component={FormControl}
                placeholder={"Type message..."}
                validate={[required, maxLength100]}
            />
            <button>
                <Button variant={"contained"}>send</Button>
            </button>
        </form>
    );
};

export default reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);