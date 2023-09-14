import {Field, Form, Formik} from "formik";
import React, {memo} from "react";
import {FilterType} from "../../redux/redusers/users-reducer";



type Props = {
    onFilterChanged: (filter: FilterType) => void
}

export const UserSearchForm = memo(({onFilterChanged}: Props) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        const filterValues = {...values,
            friend: formikSelectValues[values.friend]}
        debugger
        onFilterChanged(filterValues)
    }

    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            onSubmit={submit}
        >
            {(isSubmitting) => <Form>
                <Field name={'term'}/>
                <Field name={'friend'} as={'select'}>
                    <option value={'null'}>ALL</option>
                    <option value={'true'}>Only followed</option>
                    <option value={'false'}>Only unfollowed</option>
                </Field>
                <button type={'submit'}>Find</button>
            </Form>}
        </Formik>
    </div>
})


type FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}

const formikSelectValues = {
    ['true']: true,
    ['false']: false,
    ['null']: null
}
