import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from "react";
import { object, string } from "yup";
import "./index.css"

const FormValidation = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };

  const SignUpShema = object().shape({
    firstName: string()
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Enter your name"),
    lastName: string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Enter your surname"),
    email: string()
      .email("Please enter a valid email address")
      .required("Enter your email address"),
    password: string().min(8,"must be at least 8 characters")
      .required("Enter your password"),
  });
  const onSubmit = (values, { setSubmitting }) => {
    localStorage.setItem('user', JSON.stringify(values));
    alert('Registration completed successfully!');
    setSubmitting(false);
  };
  return <Formik
    initialValues={initialValues}
      validationSchema={SignUpShema}
      onSubmit={onSubmit}
      >
      {({ isSubmitting, isValid }) => (
      <Form >
        
          <div >
            <label htmlFor="firstName">First name:</label>
            <Field placeholder="First name" type="text" name="firstName" />
            <ErrorMessage className='error' name="firstName" component="div" />
          </div>

          <div className='forma'>
            <label htmlFor="lastName">Last name:</label>
            <Field placeholder="Last name" type="text" name="lastName" />
            <ErrorMessage className='error' name="lastName" component="div" />
          </div>

          <div className='forma'>
            <label htmlFor="email">Email address:</label>
            <Field placeholder="Enter email" type="email" name="email" />
            <ErrorMessage className='error' name="email" component="div" />
          </div>

          <div >
            <label htmlFor="password">Password:</label>
            <Field placeholder="Enter password" type="password" name="password" />
            <ErrorMessage className='error' name="password" component="div" />
          </div>

          <button  type="submit" disabled={isSubmitting || !isValid}>
           Sign Up
          </button>
          
        </Form>)}
  </Formik>;
};

export default FormValidation;
