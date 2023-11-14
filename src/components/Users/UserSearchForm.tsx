import {Field, Form, Formik} from "formik";
import React, {memo} from "react";
import {FilterType} from "../../redux/redusers/users-reducer";
import Button from "@mui/material/Button";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/selectors/users-selectors";


type Props = {
    onFilterChanged: (filter: FilterType) => void
}

export const UserSearchForm = memo(({onFilterChanged}: Props) => {

    const filter = useSelector(getUsersFilter)

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {

        const filterValues = {...values,
            friend: formikSelectValues[values.friend]}
        onFilterChanged(filterValues)
    }

    return <div>
        <Formik
            enableReinitialize
            initialValues={{term: filter.term, friend: String(filter.friend) as 'true' | 'false' | 'null'}}
            onSubmit={submit}
        >
            {(isSubmitting) => <Form>
                <Field name={'term'} />
                <Field name={'friend'} as={'select'}>
                    <option value={'null'}>ALL</option>
                    <option value={'true'}>Only followed</option>
                    <option value={'false'}>Only unfollowed</option>
                </Field>
                <Button variant={'contained'} type={'submit'}>Find</Button>
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
