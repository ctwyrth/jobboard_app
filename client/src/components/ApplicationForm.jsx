import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

function ApplicationForm(props) {
   // const id = props;
   console.log(props.id);

   const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      zipCode: "",
      job_id: ""
   };

   const validationSchema = Yup.object().shape({
      firstName: Yup.string().required("This is a required field."),
      lastName: Yup.string().required("This is a required field."),
      email: Yup.string().email().required("This is a required field."),
      phone: Yup.string().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, { message: "Please enter a valid U.S. phone number.", excludeEmptyString: true }).required("This is a required field."),
      city: Yup.string().required("This is a required field."),
      state: Yup.string().min(4).max(20).required("This is a required field."),
      zipCode: Yup.number().integer("Please enter a valid 5 digit zip code.").required("This is a required field."),
   });

   const onSubmit = (data) => {
      data["job_id"] = props.id;
      axios.post('http://localhost:3001/users', data)
         .then(() => {
            console.log("Application submitted");
            <Navigate to="/applied" replace={true} />
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form-container">
               <label htmlFor="firstName">First Name:</label>
               <ErrorMessage name="firstName" component="span" />
               <Field id="input1CreateApplication" name="firstName" className="input-field" placeholder="First name..." />

               <label htmlFor="lastName">Last Name:</label>
               <ErrorMessage name="lastName" component="span" />
               <Field id="input2CreateApplication" name="lastName" className="input-field" placeholder="Last name..." />

               <label htmlFor="email">Email:</label>
               <ErrorMessage name="email" component="span" />
               <Field id="input3CreateApplication" name="email" className="input-field" placeholder="Email..." />

               <label htmlFor="phone">Phone Number:</label>
               <ErrorMessage name="phone" component="span" />
               <Field id="input4CreateApplication" name="phone" className="input-field" placeholder="111-222-3344" />

               <label htmlFor="city">City:</label>
               <ErrorMessage name="city" component="span" />
               <Field id="input5CreateApplication" name="city" className="input-field" placeholder="City..." />

               <label htmlFor="state">State:</label>
               <ErrorMessage name="state" component="span" />
               <Field id="input6CreateApplication" name="state" className="input-field" placeholder="State..." />

               <label htmlFor="zipCode">Zip Code:</label>
               <ErrorMessage name="zipCode" component="span" />
               <Field id="input7CreateApplication" name="zipCode" className="input-field" placeholder="12345" />

               <button type="submit">Apply</button>
            </Form>
         </Formik>
      </>
   )
}

export default ApplicationForm;

// , { message: "This should be at lest 4 characters long." }
// , { message: "This should be no more than 20 characters long." }