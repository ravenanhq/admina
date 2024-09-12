import React, { useState } from "react";
import {
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CardHeader,
  Grid, 
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
        size="large"
        style={{
          width: "100%",
          height: "40px",
          fontSize: "12px",
          padding: "0",
          textTransform: "uppercase",
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
      >
        <DialogTitle
          sx={{
            backgroundColor: getColorBackground(color),
            color: "#ffffff",
            fontSize: "14px",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText sx={{ paddingTop: "16px", fontSize: "12px" }}>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent
            variant="text"
            type="button"
            style={{
              fontSize: "12px",
              color: "#2e7d32",
              textTransform: "uppercase",
            }}
            size="small"
            onClick={handleClose}
            name="Save Changes"
          />
          <ButtonComponent
            variant="text"
            type="button"
            onClick={handleClose}
            size="small"
            style={{
              fontSize: "12px",
              color: "#CE0000",
              textTransform: "uppercase",
            }}
            name="Close"
          />
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
      return "#004FA5";
    case "info":
      return "#004186";
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
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Primary Modal Title"
              content="This is the content of the Primary Modal."
              buttonText="Open Primary Modal"
              color="primary"
              size="small"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Secondary Modal Title"
              content="This is the content of the Secondary Modal."
              buttonText="Open Secondary Modal"
              color="secondary"
              size="small"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Info Modal Title"
              content="This is the content of the Info Modal."
              buttonText="Open Info Modal"
              color="info"
              size="small"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Warning Modal Title"
              content="This is the content of the Warning Modal."
              buttonText="Open Warning Modal"
              color="warning"
              size="small"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Success Modal Title"
              content="This is the content of the Success Modal."
              buttonText="Open Success Modal"
              color="success"
              size="small"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Large Screen Modal"
              content="This is the content of the Large Modal."
              buttonText="Large Screen Modal"
              color="primary"
              size="medium"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Full Screen Modal"
              content="This is the content of the Success Modal."
              buttonText="Full Screen Modal"
              color="primary"
              size="fullScreen"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <ModalSection
              title="Extra Large Screen Modal"
              content="This is the content of the Large Modal."
              buttonText="Extra Large Screen Modal"
              color="primary"
              size="large"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ModalsElement;
