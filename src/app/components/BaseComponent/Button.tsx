import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  rounded?: boolean;
  type?: string;
  size?: "small" | "medium" | "large";
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  variant = "contained",
  rounded = false,
  type = "primary",
  size,
}) => {
  return (
    <Button
      variant={variant}
      color="primary"
      disabled={disabled}
      size={size}
      sx={{
        borderRadius: rounded ? "25px" : "4px",
        textTransform: "none",
        px: 3,
        bgcolor: type == "secondary" ? "#C8E2FF" : disabled ? "#EBEBEB" : "",
        color: type == "secondary" ? "#007BFF" : "",
        boxShadow: type == "elevated" ? "4px 4px 10px rgba(0,0,0,0.3)" : "",
        "&:hover": {
          bgcolor:
            type === "hover"
              ? "primary.dark"
              : type === "secondary"
              ? "#C8E2FF"
              : "",
          color:
            type === "hover"
              ? "#ffffff"
              : type === "secondary"
              ? "#007BFF"
              : "",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
