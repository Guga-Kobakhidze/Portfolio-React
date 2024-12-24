import React from "react";
import { Box } from "@mui/material";
import { FormProvider, UseFormReturn } from "react-hook-form";

interface CustomFormProviderProps {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  submit: React.FormEventHandler<HTMLFormElement>;
}

const CustomFormProvider = ({
  children,
  methods,
  submit,
}: CustomFormProviderProps) => {
  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={submit}>
        {children}
      </Box>
    </FormProvider>
  );
};

export default CustomFormProvider;
