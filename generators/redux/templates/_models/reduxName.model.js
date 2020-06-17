import * as yup from "yup";

export const <%= Name %> = yup.object().shape({
  nameSample: yup
    .string()
    .min(2, "First Name has to have more than 2 characters")
    .max(50)
    .required("First Name is a required field")
    .default("Test"),
    password: yup.string().min(6).required().default("test123"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password must match"
    )
    .required()
    .default("test123"),
  email: yup
    .string()
    .email("The email entered is not in a valid format")
    .required()
    .default("boalspam@gmail.com"),
  code: yup.string().required(),
  touched: yup.object().default({}),
  submitted: yup.bool().default(false),
  isLoading: yup.bool().default(false),
  isSuccessful: yup.bool().default(false),
  redirect: yup.string().default(""),
});
