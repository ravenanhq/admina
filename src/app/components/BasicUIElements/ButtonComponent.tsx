import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface ButtonComponentProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  size?: "small" | "medium" | "large" | undefined;
  color?: "secondary" | "info" | "success" | "warning" | "primary" | undefined;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  startIcon,
  size,
  style,
  name,
  variant,
  onClick,
  color,
}) => {
  return (
    <Button
      variant={variant}
      style={style}
      size={size}
      onClick={onClick}
      startIcon={startIcon}
      color={color}
    >
      {name}
    </Button>
  );
};

export default ButtonComponent;
