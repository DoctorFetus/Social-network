import React from 'react';
import s from './AddMessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormType = {
    newMessageBody: string
}

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form className={s.sender} onSubmit={props.handleSubmit}>
            <Field
                name={"newMessageBody"}
                component={"textarea"}
                className={s.message_area}
                placeholder={"Type message..."}
            />
            <button
                className={s.btn_send}>Send
            </button>
        </form>
    );
};

export default reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);