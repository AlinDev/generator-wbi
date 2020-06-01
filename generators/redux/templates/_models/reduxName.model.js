import * as yup from "yup";

const phoneRegExp = /[0]{1}\d{9}$/;
export const formModel = yup.object().shape({
  nameSample: yup
    .string()
    .min(2, "First Name has to have more than 2 characters")
    .max(50)
    .required("First Name is a required field")
    .default("Test"),
  touched: yup.object().default({}),
  submitted: yup.bool().default(false),
  isLoading: yup.bool().default(false),
  isSuccessful: yup.bool().default(false),
  redirect: yup.string().default(""),
});
