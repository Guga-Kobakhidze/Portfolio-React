import * as yup from "yup";

export const schema = yup.object({
  to_name: yup.string(),
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("E-mail must be a Valid")
    .required("E-mail is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(5, "Message must be minimum 5 symbols"),
  budget: yup.string().required("Budget is required"),
});
