import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface OneButtonComponentProps extends ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  startIcon?: React.ReactNode;
  size?: "small" | "medium" | "large" | undefined;
}

const OneButtonComponent: React.FC<OneButtonComponentProps> = ({
  startIcon,
  size,
  style,
  name,
  variant,
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      style={style}
      size={size}
      onClick={onClick}
      startIcon={startIcon}
    >
      {name}
    </Button>
  );
};

export default OneButtonComponent;
