import React from "react";
import { Formik } from "formik";
import validationSchema from "./validations";

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />

            <br />
            <br />
            <label>Password</label>
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
            />

            <br />
            <br />
            <label>Confirm Password</label>
            <input
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
            />

            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
