import React from 'react';
import s from './AddMessageForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLength, required} from "../../../../utils/validators/validators";

export type AddMessageFormType = {
    newMessageBody: string
}
const maxLength100 = maxLength(100)

const AddMessageForm = (props: InjectedFormProps<AddMessageFormType>) => {
    return (
        <form className={s.sender} onSubmit={props.handleSubmit}>
            <Field
                name={"newMessageBody"}
                component={Textarea}
                className={s.message_area}
                placeholder={"Type message..."}
                validate={[required, maxLength100]}
            />
            <button
                className={s.btn_send}>Send
            </button>
        </form>
    );
};

export default reduxForm<AddMessageFormType>({form: "dialogAddMessageForm"})(AddMessageForm);