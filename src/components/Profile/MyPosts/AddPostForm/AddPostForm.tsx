import React from 'react';
import s from "./AddPostForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormType = {
    newPostBody: string
}
const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form className={s.addNewPost} onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostBody"} placeholder={"What are you thinking about?"}/>
            <button>Add post</button>
        </form>
        );
};

export default reduxForm<AddPostFormType>({form: "addPost"})(AddPostForm);