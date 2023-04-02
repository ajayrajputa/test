import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        userName: Yup.string()
            .max(10, 'Must be 15 characters or less')
            .required('Required'),
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        phoneNumber: Yup.string()
            .min(10, 'Must be 10 Number')
            .max(10, 'Must be 10 Number')
            .required('Email is required'),
        role: Yup.string()
            .required('role is required'),
        department: Yup.string()
            .required('department is required'),
    })
    return (
        <Formik
            initialValues={{
                userName: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                role: '',
                department: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                    <Form>
                        <TextField label="User Name" name="userName" type="text" />
                        <TextField label="First Name" name="firstName" type="text" />
                        <TextField label="last Name" name="lastName" type="text" />
                        <TextField label="Phone Number" name="phoneNumber" type="tel" />
                        <TextField label="Role" name="role" type="text" />
                        <TextField label="Department" name="department" type="text" />
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}