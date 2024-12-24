import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface TextFieldElementProsp {
  name: string;
  label: string;
  isMultiline?: boolean;
  rows?: number;
}

const TextFieldElement = ({
  name,
  label,
  isMultiline,
  rows,
}: TextFieldElementProsp) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          multiline={isMultiline}
          rows={rows}
          {...field}
          label={label}
          fullWidth
          error={!!error}
          helperText={!!error && error.message}
        />
      )}
    />
  );
};

export default TextFieldElement;
