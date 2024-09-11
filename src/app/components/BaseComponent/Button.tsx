import React from "react";
import { Button } from "@mui/material";

interface ButtonComponentProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "secondary" | "info" | "success" | "warning" | "primary";
  variant?: "text" | "contained" | "outlined";
  className?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onClick,
  color,
  size,
  style,
  name,
  variant = "contained",
  prefix,
  suffix,
  className,
}) => {
  const defaultStyle: React.CSSProperties = {
    borderRadius: "5px",
    fontSize: "12px",
    textTransform: "capitalize",
  };

  return (
    <Button
      variant={variant}
      style={{ ...defaultStyle, ...style }}
      size={size}
      onClick={onClick}
      color={color}
      className={className}
    >
      {prefix && <span style={{ margin: "6px 5px 0 0" }}>{prefix}</span>}
      {name}
      {suffix && <span style={{ margin: "10px 0 0 4px" }}>{suffix}</span>}
    </Button>
  );
};

export default ButtonComponent;
