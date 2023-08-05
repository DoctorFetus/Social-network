import React from 'react';
import {WrappedFieldProps} from "redux-form";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


interface FormsControlPropsType extends WrappedFieldProps {
    type?: string
}

// type ChildrenType = {
//     children: React.ReactNode
// }
// const FormControl = ({input, meta: {touched, error}, children, ...restProps}: WrappedFieldProps & ChildrenType) => {
//
//     const hasError = touched && error
//
//     return (
//         <div className={style.formControl + " " + (hasError ?  style.error : "")}>
//             <div >
//                 {children}
//             </div>
//             {hasError && <span>{error}</span>}
//         </div>
//     );
// }
export const FormControl = (props: FormsControlPropsType) => {
    const {input, meta, ...restProps} = props
    // return <FormControl {...props}><TextField {...input} {...restProps}/></FormControl>
    const hasError = props.meta.touched && props.meta.error
    const fieldLabel = !!hasError ? hasError : ""

    if (restProps.type === "checkbox") {
        return <Checkbox color={"secondary"} />
    }
    return <TextField {...input} {...restProps} error={!!hasError} label={fieldLabel}/>
};

// export const Input = (props: WrappedFieldProps) => {
//     const {input, meta, ...restProps} = props
//     return <FormControl {...props}><TextField {...input} {...restProps}/></FormControl>
// };
