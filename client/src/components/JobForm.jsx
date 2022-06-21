import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import '../App.css';

function ApplicationForm(props) {
   const initialValues = {
      client: "",
      poc: "",
      email: "",
      role: "",
      urgency: "",
      quantity: "",
      skills: ""
   };

   const validationSchema = Yup.object().shape({
      client: Yup.string().required("This is a required field."),
      poc: Yup.string().required("This is a required field."),
      email: Yup.string().email().required("This is a required field."),
      role: Yup.string().required("This is a required field."),
      urgency: Yup.string().required("This is a required field."),
      quantity: Yup.number().integer().required("This is a required field."),
      skills: Yup.string().required("This is a required field."),
   });

   const onSubmit = (data) => {
      console.log("In the submit");
      axios.post('http://localhost:3001/jobs', data)
         .then(() => {
            console.log("Job submitted");
            <Navigate to="/" replace={true} />
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="form-container">
               <label htmlFor="client">Client Name:</label>
               <ErrorMessage name="client" component="span" />
               <Field id="input1CreateApplication" name="client" className="input-field" placeholder="Client name..." />

               <label htmlFor="poc">Point of Contact:</label>
               <ErrorMessage name="poc" component="span" />
               <Field id="input2CreateApplication" name="poc" className="input-field" placeholder="Contact name..." />

               <label htmlFor="email">Email:</label>
               <ErrorMessage name="email" component="span" />
               <Field id="input3CreateApplication" name="email" className="input-field" placeholder="Email..." />

               <label htmlFor="role">Role/Job Title:</label>
               <ErrorMessage name="role" component="span" />
               <Field id="input4CreateApplication" name="role" className="input-field" placeholder="Job title..." />

               <label htmlFor="quantity">Quantity:</label>
               <ErrorMessage name="quantity" component="span" />
               <Field id="input5CreateApplication" name="quantity" className="input-field" />

               <label htmlFor="skills">Skills <em>(comma seperated)</em>:</label>
               <ErrorMessage name="skills" component="span" />
               <Field id="input6CreateApplication" name="skills" className="input-field" placeholder="Skills..." />

               <button type="submit">Apply</button>
            </Form>
         </Formik>
      </>
   )
}

export default ApplicationForm;

// , { message: "This should be at lest 4 characters long." }
// , { message: "This should be no more than 20 characters long." }