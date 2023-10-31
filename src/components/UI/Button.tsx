import React, { FC } from "react";
import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  children: string;
  variant?: "contained" | "outlined";
  type?: 'submit' | 'button';
  onClick?: () => void;
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  variant = "contained",
  onClick,
  disabled,
}) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      style={{ textTransform: "none" }}
    >
      {children}
    </MuiButton>
  );
};
