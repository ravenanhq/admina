import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  rounded?: boolean;
  type?: string;
  size?: "small" | "medium" | "large";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
  name?: string;
  prefix?: React.ReactNode;
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
  className?: string ;
  fullWidth?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  variant = "contained",
  rounded = false,
  type = "primary",
  size,
  className
}) => {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      size={size}
      className={className}
      // background: #007BFF;

      sx={{
        borderRadius: rounded ? "30px" : 0,
        textTransform: "none",
        px: 3,
        bgcolor: type == "secondary" ? "#C8E2FF" : type === "buttonbg"?" #007BFF": disabled ? "#EBEBEB" : undefined,
        color: type == "secondary" ? "#007BFF" : "",
        boxShadow: type == "elevated" ? " #007BFF 4px 4px 10px rgba(0,0,0,0.3)" : "none" ,
        background: type == "elevated" ? "#007BFF": "",
        "&:hover": {
          bgcolor:
            type === "hover"
              ? "#007BFF"
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
