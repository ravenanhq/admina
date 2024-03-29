import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
  CardHeader,
} from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";

const ModalSection = ({ title, content, buttonText, color, size }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  type Breakpoint = false | "xs" | "sm" | "md" | "lg" | "xl";

  const getSizeMaxWidth = (
    size: string
  ): { maxWidth: Breakpoint; fullWidth: boolean } => {
    switch (size) {
      case "small":
        return { maxWidth: "sm", fullWidth: false };
      case "medium":
        return { maxWidth: "md", fullWidth: true };
      case "large":
        return { maxWidth: "lg", fullWidth: true };
      case "fullScreen":
        return { maxWidth: false, fullWidth: true };
      default:
        return { maxWidth: "sm", fullWidth: false };
    }
  };

  const { maxWidth, fullWidth } = getSizeMaxWidth(size);

  return (
    <div>
      <ButtonComponent
        variant="contained"
        name={buttonText}
        color={color}
        onClick={handleOpen}
      ></ButtonComponent>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
      >
        <DialogTitle
          sx={{ backgroundColor: getColorBackground(color), color: "#ffffff" }}
        >
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText sx={{ paddingTop: "16px" }}>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent
            variant="text"
            type="button"
            style={{ fontSize: "13px", color: "#2e7d32" }}
            size="small"
            onClick={handleClose}
            name="Save Changes"
          ></ButtonComponent>
          <ButtonComponent
            variant="text"
            type="button"
            onClick={handleClose}
            size="small"
            style={{ fontSize: "13px", color: "#ed6c02" }}
            name="Close"
          ></ButtonComponent>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const getColorBackground = (color) => {
  switch (color) {
    case "primary":
      return "#1976d2";
    case "secondary":
      return "#9c27b0";
    case "info":
      return "#0288d1";
    case "warning":
      return "#ed6c02";
    case "success":
      return "#2e7d32";
    default:
      return "#FFFFFF";
  }
};

const ModalsElement = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Modals"
        sx={{ bgcolor: "#7D80AB", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <ModalSection
            title="Primary Modal Title"
            content="This is the content of the Primary Modal."
            buttonText="Open Primary Modal"
            color="primary"
            size="small"
          />
          <ModalSection
            title="Secondary Modal Title"
            content="This is the content of the Secondary Modal."
            buttonText="Open Secondary Modal"
            color="secondary"
            size="small"
          />
          <ModalSection
            title="Info Modal Title"
            content="This is the content of the Info Modal."
            buttonText="Open Info Modal"
            color="info"
            size="small"
          />
          <ModalSection
            title="Warning Modal Title"
            content="This is the content of the Warning Modal."
            buttonText="Open Warning Modal"
            color="warning"
            size="small"
          />
          <ModalSection
            title="Success Modal Title"
            content="This is the content of the Success Modal."
            buttonText="Open Success Modal"
            color="success"
            size="small"
          />
          <ModalSection
            title="Large Screen Modal"
            content="This is the content of the Large Modal."
            buttonText="Large Screen Modal"
            color="primary"
            size="medium"
          />
          <ModalSection
            title="Extra Large Screen Modal"
            content="This is the content of the Large Modal."
            buttonText="Extra Large Screen Modal"
            color="primary"
            size="large"
          />
          <ModalSection
            title="Full Screen Modal"
            content="This is the content of the Success Modal."
            buttonText="Full Screen Modal"
            color="primary"
            size="fullScreen"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ModalsElement;
