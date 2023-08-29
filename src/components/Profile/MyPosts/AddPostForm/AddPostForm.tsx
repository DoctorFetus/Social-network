import React from 'react';
import s from "./AddPostForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import Button from '@mui/material/Button';
import {FormControl} from "../../../common/FormsControl/FormsControl";


export type AddPostFormType = {
    newPostBody: string
}

const length = maxLength(100)
const AddPostForm = (props: InjectedFormProps<AddPostFormType>) => {
    return (
        <form className={s.addNewPost} onSubmit={props.handleSubmit}>
            <Field
                component={FormControl}
                name={"newPostBody"}
                placeholder={"What are you thinking about?"}
                validate={[required, length]}
                className={s.inputStyle}
            />
            <button className={s.btn}>
                <Button variant={"contained"}>Add post</Button>
            </button>
        </form>
        );
};

export default reduxForm<AddPostFormType>({form: "addPost"})(AddPostForm);