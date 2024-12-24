import React from "react";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import { Controller, Control } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { helperTextStyle, StyledRadioGroup, StyledRadioLabel } from "./style";

interface RadioGroupControllerProps {
  control: Control<any>;
  name: string;
  label: string;
  options: { id: number; label: string; value: string }[];
  error?: string;
}

const RadioGroupComponent: React.FC<RadioGroupControllerProps> = ({
  name,
  label,
  control,
  options,
  error,
}) => {
  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <StyledRadioGroup row aria-labelledby={`${name}-label`} {...field}>
            {options.map((option) => {
              const isSelected = field.value === option.value;
              return (
                <Box key={option.id}>
                  <StyledRadioLabel
                    value={option.value}
                    label={option.label}
                    isselected={isSelected ? "true" : null}
                    control={<Radio sx={{ display: "none" }} />}
                  />
                </Box>
              );
            })}
          </StyledRadioGroup>
        )}
      />
      {error && <Typography style={helperTextStyle}>{error}</Typography>}
    </FormControl>
  );
};

export default RadioGroupComponent;
