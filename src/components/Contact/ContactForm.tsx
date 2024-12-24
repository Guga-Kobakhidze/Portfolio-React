import { schema } from "../../schema";
import { options } from "../../constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid2 } from "@mui/material";
import { defaultValues, IContactForm } from "./type";
import emailjs from "@emailjs/browser";
import ExperianceBox from "../../features/ExperianceBox";
import TextFieldElement from "../../shared/TexxtFieldElement/TextFieldElement";
import CustomFormProvider from "../../provider/FormProvider";
import RadioGroupComponent from "../../shared/RadioGroupElement/RadioGrouElement";

const ContactForm = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const { handleSubmit, control, formState } = methods;

  const submit = (data: IContactForm) => {
    console.log(data);
    const serviceId = import.meta.env.VITE_API_SERVICE_ID;
    const templateId = import.meta.env.VITE_API_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, data, publicKey)
      .then((response) => console.log("Email sent Successfully", response))
      .catch((error) => console.log(error));
  };

  return (
    <ExperianceBox isabsolute={null} sx={{ bgColor: "white" }} title="Contact">
      <CustomFormProvider methods={methods} submit={handleSubmit(submit)}>
        <Grid2 container spacing={4} p="32px 16px 40px">
          <Grid2 size={6}>
            <TextFieldElement label="Your / Company Name" name="name" />
          </Grid2>
          <Grid2 size={6}>
            <TextFieldElement label="Your / Company E-mail" name="email" />
          </Grid2>
          <Grid2 size={12}>
            <TextFieldElement
              rows={8}
              isMultiline
              name="message"
              label="Message"
            />
          </Grid2>
          <Grid2 size={12} sx={{ ".MuiFormControl-root": { width: "100%" } }}>
            <RadioGroupComponent
              name="budget"
              label="Budget"
              options={options}
              control={control}
              error={formState.errors.budget?.message}
            />
          </Grid2>
          <Button variant="outlined" size="medium" type="submit">
            Send
          </Button>
        </Grid2>
      </CustomFormProvider>
    </ExperianceBox>
  );
};

export default ContactForm;