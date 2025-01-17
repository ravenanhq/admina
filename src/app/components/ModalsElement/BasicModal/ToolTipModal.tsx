import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import ButtonComponent from "../../BaseComponent/Button";
import CloseIcon from "@mui/icons-material/Close";

const ToolTipModal = ({ open, handleClose }) => {
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
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        <Card
          variant="outlined"
          style={{
            borderRadius: "5px",
            border: "none",
          }}
        >
          <CardHeader
            title="Tooltip and Popover modal"
            sx={{ bgcolor: "#007BFF", color: "white" }}
            titleTypographyProps={{ fontSize: "14px" }}
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
            <Typography variant="subtitle1" sx={{ pt: 2, color: "#747474" }}>
              Popover in a modal
            </Typography>
            <Typography variant="subtitle2" sx={{ pt: 2, color: "#747474" }}>
              The{" "}
              <ButtonComponent
                variant="contained"
                name="Button"
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
              />{" "}
              triggers a popover on clicl
            </Typography>
            <Typography variant="subtitle2" sx={{ pt: 2, color: "#747474" }}>
              Tooltips in a modal
            </Typography>
            <Typography variant="subtitle2" sx={{ pt: 2, color: "#747474" }}>
              <a
                href="#"
                style={{
                  color: "#007BFF",
                  textDecoration: "none",
                  marginLeft: "4px",
                }}
              >
                This Link{" "}
              </a>
              and{" "}
              <a
                href="#"
                style={{
                  color: "#007BFF",
                  textDecoration: "none",
                  marginLeft: "4px",
                }}
              >
                That Link{" "}
              </a>
              have tooltips on hove
            </Typography>
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

export default ToolTipModal;
