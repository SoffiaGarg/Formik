import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

//Validation
const validateUserData = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const CreateUser = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="col-sm-9 card-detail">
      <h4 className="text-center">Create User</h4>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={validateUserData}
        onSubmit={(values) => {
          setFname(values.firstName);
          setLname(values.lastName);
          setEmail(values.email);
        }}
      >
        {({ errors, touched }) => (
          <div className="card border-0 shadow p-2 w-50 mx-auto">
            <Form>
              <div className="form-group">
                <label className="m-2" htmlFor="firstName">
                  First Name:
                </label>
                <Field type="text" name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label className="m-2" htmlFor="lastName">
                  Last Name:
                </label>
                <Field type="text" name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </div>

              <div className="form-group">
                <label className="m-2" htmlFor="email">
                  Your Email:
                </label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>

              <button type="submit" className="btn btn-dark m-4">
                Submit
              </button>
            </Form>
            {fname && lname && email && (
              <div className="alert alert-success" role="alert">
                <h4>User Info updated Successfully</h4>
                <p>First Name - {fname}</p>
                <p>Last Name - {lname}</p>
                <p>Email - {email}</p>
              </div>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateUser;
