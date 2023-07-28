import React, {ReactNode} from 'react';
import {WrappedFieldProps} from "redux-form";
import style from "./FormControl.module.css"

type ChildrenType = {
    children: React.ReactNode
}
const FormControl = ({input, meta: {touched, error}, children, ...restProps}: WrappedFieldProps & ChildrenType) => {

    const hasError = touched && error

    return (
        <div className={style.formControl + " " + (hasError ?  style.error : "")}>
            <div >
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}
export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};
