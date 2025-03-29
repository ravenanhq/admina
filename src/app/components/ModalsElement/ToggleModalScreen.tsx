import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  IconButton,
  Modal,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const ToggleModalScreen = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: "70%", md: "50%", lg: "30%" },
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        <Card
          variant="outlined"
          style={{ borderRadius: "5px", border: "none" }}
        >
          <CardHeader
            title="Open toggle modal"
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
          <CardContent
           sx={{
            flex: 1,
            overflowY: "auto",
            maxHeight: "70vh",
            padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    pt: 2,
                    color: "#747474",
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  show closed assets
                </Typography>

                <FormControlLabel
                  value="Yes"
                  control={<Switch defaultChecked color="primary" />}
                  label="YES"
                  labelPlacement="start"
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#007bff",
                      fontSize: "12px",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    pt: 2,
                    color: "#747474",
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  show closed assets
                </Typography>

                <FormControlLabel
                  value="no"
                  control={<Switch color="primary" />}
                  label="NO"
                  labelPlacement="start"
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#747474",
                      fontSize: "12px",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    pt: 2,
                    color: "#747474",
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  show closed assets
                </Typography>

                <FormControlLabel
                  value="Yes"
                  control={
                    <Switch
                      defaultChecked
                      color="primary"
                      icon={
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "white",
                            borderRadius: "50%",
                            boxShadow: 1,
                          }}
                        >
                          <CloseIcon
                            sx={{ fontSize: "16px", color: "#f44336" }}
                          />
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "white",
                            borderRadius: "50%",
                            boxShadow: 1,
                          }}
                        >
                          <CheckIcon
                            sx={{ fontSize: "16px", color: "#4caf50" }}
                          />
                        </Box>
                      }
                    />
                  }
                  label=""
                  labelPlacement="start"
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#007bff",
                      fontSize: "12px",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    pt: 2,
                    color: "#747474",
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  show closed assets
                </Typography>

                <FormControlLabel
                  value="Yes"
                  control={
                    <Switch
                      color="primary"
                      icon={
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "white",
                            borderRadius: "50%",
                            boxShadow: 1,
                          }}
                        >
                          <CloseIcon
                            sx={{ fontSize: "16px", color: "#f44336" }}
                          />
                        </Box>
                      }
                      checkedIcon={
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "white",
                            borderRadius: "50%",
                            boxShadow: 1,
                          }}
                        >
                          <CheckIcon
                            sx={{ fontSize: "16px", color: "#4caf50" }}
                          />
                        </Box>
                      }
                    />
                  }
                  labelPlacement="start"
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#007bff",
                      fontSize: "12px",
                    },
                  }}
                  label={""}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    pt: 2,
                    color: "#747474",
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  show closed assets
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      defaultChecked
                      color="primary"
                      sx={{
                        width: 62,
                        height: 40,
                        "& .MuiSwitch-track::before": {
                          content: '"NO"',
                          position: "absolute",
                          top: "50%",
                          left: 13,
                          transform: "translateY(-50%)",
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "& .MuiSwitch-track::after": {
                          content: '"YES"',
                          position: "absolute",
                          top: "50%",
                          right: 12,
                          transform: "translateY(-50%)",
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  labelPlacement="start"
                  label={""}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    pt: 2,
                    color: "#747474",
                    fontSize: "12px",
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  show closed assets
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      sx={{
                        width: 62,
                        height: 40,
                        "& .MuiSwitch-track::before": {
                          content: '"NO"',
                          position: "absolute",
                          top: "50%",
                          left: 13,
                          transform: "translateY(-50%)",
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "white",
                        },
                        "& .MuiSwitch-track::after": {
                          content: '"YES"',
                          position: "absolute",
                          top: "50%",
                          right: 12,
                          transform: "translateY(-50%)",
                          fontSize: "10px",
                          fontWeight: "bold",
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  labelPlacement="start"
                  label={""}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default ToggleModalScreen;
