import React from 'react';
import s from "./AddPostForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";

export type AddPostFormType = {
    newPostBody: string
}

const length = maxLength(10)
const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form className={s.addNewPost} onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={"newPostBody"}
                placeholder={"What are you thinking about?"}
                validate={[required, length]}
            />
            <button>Add post</button>
        </form>
        );
};

export default reduxForm<AddPostFormType>({form: "addPost"})(AddPostForm);