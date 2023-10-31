import { TextField } from "@mui/material";
import React, { FC, forwardRef } from "react";

interface InputProps {
  value?: string;
  error?: boolean;
  label?: string;
  type: string;
  placeholder: string;
  onChange?: any;
  id?: string;
  name?: string;
}

export const Input: FC<InputProps> = forwardRef(
  (
    { value, error, onChange, label, type, id, placeholder, name, ...rest },
    ref
  ) => {
    return (
      <TextField
        inputRef={ref}
        id={id}
        label={label}
        variant="standard"
        onChange={onChange}
        value={value}
        type={type}
        error={error}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
    );
  }
);
