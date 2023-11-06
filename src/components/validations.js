import * as yup from "yup";

let validations = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required place"),
  password: yup
    .string()
    .min(5, "Must be a minimum of 5 characters")
    .required("Required place"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Required place"),
});

export default validations;
