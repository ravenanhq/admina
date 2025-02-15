import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ButtonComponent from "../BaseComponent/Button";
import CloseIcon from "@mui/icons-material/Close";

const SmallModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: "5px",
            border: "none",
            height: "100%",
          }}
        >
          <CardHeader
            title="Small Modal"
            sx={{ bgcolor: "#007BFF", color: "white", borderBottom: "1px solid #efefef" }}
            titleTypographyProps={{ fontSize: "14px", fontWeight: "bold" }}
            action={
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  color: "white",
                  fontSize: "12px",
                }}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography
              variant="subtitle2"
              sx={{ pt: 2, color: "#747474", fontWeight: "600" }}
            >
              Web designer
            </Typography>
            <List sx={{ paddingLeft: 2 }}>
              <ListItem sx={{ alignItems: "flex-start", paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: "#747474",
                    marginTop: "8px",
                  }}
                >
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      fontSize: "15px",
                      color: "#007bff",
                      marginTop: "-3px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience."
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "12px",
                      color: "#747474",
                      lineHeight: "1.5",
                    },
                  }}
                />
              </ListItem>
            </List>
            <Typography
              variant="subtitle2"
              sx={{ pt: 2, color: "#747474", fontWeight: "600" }}
            >
              Content Marketing
            </Typography>
            <List sx={{ paddingLeft: 2 }}>
              <ListItem sx={{ alignItems: "flex-start", paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: "#747474",
                    marginTop: "8px",
                  }}
                >
                  <KeyboardDoubleArrowRightIcon
                    sx={{
                      fontSize: "15px",
                      color: "#007bff",
                      marginTop: "-3px",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience."
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "12px",
                      color: "#747474",
                      lineHeight: "1.5",
                    },
                  }}
                />
              </ListItem>
            </List>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "right",
                mt: 3,
              }}
            >
              <ButtonComponent
                variant="contained"
                name="close"
                onClick={handleClose}
                size="large"
                style={{
                  height: "40px",
                  fontSize: "12px",
                  padding: "0 10px",
                  textTransform: "capitalize",
                  color: "#fff",
                  background: "#005abb",
                  marginRight: "10px",
                }}
              />

              <ButtonComponent
                variant="contained"
                name="save changes"
                onClick={handleClose}
                size="large"
                style={{
                  height: "40px",
                  fontSize: "12px",
                  padding: "0 10px",
                  textTransform: "capitalize",
                  color: "#fff",
                  background: "#007bff",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default SmallModal;
