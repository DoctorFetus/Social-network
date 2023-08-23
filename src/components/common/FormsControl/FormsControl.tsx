import React from 'react';
import {WrappedFieldProps} from "redux-form";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


interface FormsControlPropsType extends WrappedFieldProps {
    type?: string
    checked?: boolean
}

export const FormControl = (props: FormsControlPropsType) => {
    debugger
    const {input, meta, ...restProps} = props
    const hasError = props.meta.touched && props.meta.error
    const fieldLabel = !!hasError ? hasError : ""

    if (restProps.type === "checkbox") {
        return <Checkbox color={"secondary"}/>
    }
    return <TextField {...input} {...restProps} error={!!hasError} label={fieldLabel}/>
};

