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
import ButtonComponent from "../../BaseComponent/Button";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CloseIcon from "@mui/icons-material/Close";

const ScrollModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 500,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Card variant="outlined" sx={{ border: "none" }}>
          <CardHeader
            title="Scrolling Modal"
            sx={{
              bgcolor: "#007BFF",
              color: "white",
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
            }}
            titleTypographyProps={{ fontSize: "14px" }}
            action={
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ color: "white" }}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent sx={{ maxHeight: 300, overflowY: "auto" }}>
            <Typography
              variant="subtitle2"
              sx={{ pt: 2, color: "#747474", fontWeight: "600" }}
            >
              Web Designer
            </Typography>
            <List sx={{ paddingLeft: 2 }}>
              {[
                "For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.",
                "As a web designer, you either prefer to work freelance for several different businesses at once or you may choose to work for just one. In either case, you'll need good time management skills to keep several projects moving forward.",
              ].map((text, index) => (
                <ListItem
                  key={index}
                  sx={{ alignItems: "flex-start", paddingLeft: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "20px",
                      color: "#747474",
                      marginTop: "8px",
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: "12px",
                      color: "#747474",
                      lineHeight: "1.5",
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Typography
              variant="subtitle2"
              sx={{ pt: 2, color: "#747474", fontWeight: "600" }}
            >
              UI UX Designer
            </Typography>
            <List sx={{ paddingLeft: 2 }}>
              {[
                "User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations.",
                "As a web designer, you either prefer to work freelance for several different businesses at once or you may choose to work for just one. In either case, you'll need good time management skills to keep several projects moving forward.",
              ].map((text, index) => (
                <ListItem
                  key={index}
                  sx={{ alignItems: "flex-start", paddingLeft: 0 }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "20px",
                      color: "#747474",
                      marginTop: "8px",
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "8px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: "12px",
                      color: "#747474",
                      lineHeight: "1.5",
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <ButtonComponent
                variant="contained"
                name="Close"
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
                name="Save Changes"
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

export default ScrollModal;
