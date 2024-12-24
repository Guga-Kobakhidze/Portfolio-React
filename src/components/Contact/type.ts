export interface IContactForm {
  [key: string]: unknown;
  to_name?: string;
  name: string;
  email: string;
  budget: string;
  message: string;
}

export const defaultValues = {
  to_name: "Guga Kobakhidze",
  name: "",
  email: "",
  message: "",
  budget: "",
};
