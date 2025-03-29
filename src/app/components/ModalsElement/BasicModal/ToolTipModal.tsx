import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Modal,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ButtonComponent from "../../BaseComponent/Button";
import CloseIcon from "@mui/icons-material/Close";

const ToolTipModal = ({ open, handleClose }) => {
  const [popover, setPopover] = useState(null);

  const handlePopoverOpen = (event) => {
    setPopover(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopover(null);
  };

  const openPopover = Boolean(popover);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: "90%", md: "80%", lg: "30%" },
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          overflow: "hidden",
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
              This{" "}
              <ButtonComponent
                variant="contained"
                name="Button"
                size="large"
                onClick={handlePopoverOpen}
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
              triggers a popover on click
            </Typography>

            <Popover
              open={openPopover}
              anchorEl={popover}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              sx={{ mt: 1 }}
            >
              <Box
                sx={{
                  width: 200,
                  bgcolor: "white",
                  borderRadius: "8px",
                  boxShadow: 3,
                  border: "1px solid #ddd",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#F8F9FA",
                    py: 1,
                    px: 2,
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    fontWeight: "bold",
                    color: "#5A5A5A",
                    fontSize: "14px",
                  }}
                >
                  Popover Title
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography sx={{ fontSize: "13px", color: "#5A5A5A" }}>
                    Popover body content is set in this attribute.
                  </Typography>
                </Box>
              </Box>
            </Popover>
            <Typography variant="subtitle1" sx={{ pt: 2, color: "#747474" }}>
              Tooltips in a modal
            </Typography>
            <Typography variant="subtitle2" sx={{ pt: 2, color: "#747474" }}>
              <Tooltip title="This is a tooltip" arrow placement="top">
                <a
                  href="#"
                  style={{
                    color: "#007BFF",
                    textDecoration: "none",
                    marginLeft: "4px",
                  }}
                >
                  This Link
                </a>
              </Tooltip>{" "}
              and{" "}
              <Tooltip title="That is another tooltip" arrow placement="top">
                <a
                  href="#"
                  style={{
                    color: "#007BFF",
                    textDecoration: "none",
                    marginLeft: "4px",
                  }}
                >
                  That Link
                </a>
              </Tooltip>{" "}
              have tooltips on hover
            </Typography>
            <Divider sx={{ margin: "0 auto", marginY: 2 }} />
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
