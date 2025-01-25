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
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ButtonComponent from "../BaseComponent/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import CloseIcon from "@mui/icons-material/Close";

const LargeModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: "5px",
            border: "none",
            height: "100%",
            overflow: "scroll",
          }}
        >
          <CardHeader
            title="Large Modal"
            sx={{ color: "#565656", borderBottom: "1px solid #efefef" }}
            titleTypographyProps={{ fontSize: "14px", fontWeight: "bold" }}
            action={
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  color: "#747474",
                  fontSize: "12px",
                }}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}
            >
              <KeyboardDoubleArrowRightIcon
                sx={{ fontSize: "15px", color: "#007bff", marginTop: "-3px" }}
              />
              <Typography
                variant="subtitle2"
                sx={{ pl: 1, color: "#747474", fontWeight: "600" }}
              >
                Start with your goals
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{ pt: 2, color: "#565656", fontSize: "12px", ml: 1 }}
            >
              No matter how talented you are as a content writer or creator, you
              will always fail if you don't have a clear set of goals. First of
              all, without goals, there is no way to determine your success.
              Additionally, you lack direction. Together with your team, respond
              to the following questions to make sure they are:
            </Typography>
            <List sx={{ paddingLeft: 2 }}>
              <ListItem sx={{ alignItems: "flex-start", paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: "#747474",
                    marginTop: "7px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ fontSize: "12px", marginTop: "-1px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="What must you achieve, and by when?"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "12px",
                      color: "#747474",
                      lineHeight: "1.5",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ alignItems: "flex-start", paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: "#747474",
                    marginTop: "7px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ fontSize: "12px", marginTop: "-1px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="How will you evaluate your level of success?"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "12px",
                      color: "#747474",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ alignItems: "flex-start", paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: "#747474",
                    marginTop: "7px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ fontSize: "12px", marginTop: "-1px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Can you accomplish it with the available resources?"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "12px",
                      color: "#747474",
                    },
                  }}
                />
              </ListItem>
              <ListItem sx={{ alignItems: "flex-start", paddingLeft: 0 }}>
                <ListItemIcon
                  sx={{
                    minWidth: "20px",
                    color: "#747474",
                    marginTop: "7px",
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{ fontSize: "12px", marginTop: "-1px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Does it advance your core business aims?"
                  primaryTypographyProps={{
                    sx: {
                      fontSize: "12px",
                      color: "#747474",
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

export default LargeModal;
