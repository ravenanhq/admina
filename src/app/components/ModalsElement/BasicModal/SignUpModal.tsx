import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../../BaseComponent/Button";
import CloseIcon from "@mui/icons-material/Close";

const SignUpModal = ({ open, handleClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm:"60%", md:"40%", xl:"30%"},
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          overflow:"hidden",
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
            title="Sign-up Modal"
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
              maxHeight: "80vh",
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mt: 3,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item sm={6}>
                    <FormControl
                      style={{
                        display: "block",
                        flexDirection: isMobile ? "column" : "row",
                        marginTop: "0",
                        justifyContent: "space-between",
                      }}
                    >
                      <label
                        htmlFor="name"
                        style={{
                          marginTop: "5px",
                          fontSize: "12px",
                          color: "#565656",
                        }}
                      >
                        First Name
                      </label>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="name"
                        size="small"
                        placeholder="Enter your first name"
                        sx={{
                          marginTop: isMobile ? "5px" : "10px",
                          width: isMobile ? "100%" : "80%",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "12px",
                            color: "#565656",
                            padding: "9px 14px",
                            background: "#dde9fb",
                          },
                          "& .MuiFormLabel-root": {
                            fontSize: "12px",
                            color: "#565656",
                            letterSpacing: "0.7px",
                          },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item sm={6}>
                    <FormControl
                      style={{
                        display: "block",
                        flexDirection: isMobile ? "column" : "row",
                        marginTop: "0",
                        justifyContent: "space-between",
                      }}
                    >
                      <label
                        htmlFor="name"
                        style={{
                          marginTop: "5px",
                          fontSize: "12px",
                          color: "#565656",
                        }}
                      >
                        Last Name
                      </label>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="name"
                        size="small"
                        placeholder="Enter your last name"
                        sx={{
                          marginTop: isMobile ? "5px" : "10px",
                          width: isMobile ? "100%" : "80%",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "12px",
                            color: "#565656",
                            padding: "9px 14px",
                            background: "#dde9fb",
                          },
                          "& .MuiFormLabel-root": {
                            fontSize: "12px",
                            color: "#565656",
                            letterSpacing: "0.7px",
                          },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item sm={12}>
                    <FormControl
                      style={{
                        display: "block",
                        flexDirection: isMobile ? "column" : "row",
                        marginTop: "0",
                        justifyContent: "space-between",
                      }}
                    >
                      <label
                        htmlFor="name"
                        style={{
                          marginTop: "5px",
                          fontSize: "12px",
                          color: "#565656",
                        }}
                      >
                        E-mail Address
                      </label>
                      <TextField
                        fullWidth
                        margin="normal"
                        id="name"
                        size="small"
                        placeholder="johngmail.com"
                        sx={{
                          marginTop: isMobile ? "5px" : "10px",
                          width: isMobile ? "100%" : "95%",
                          display: "block",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "12px",
                            color: "#565656",
                            padding: "9px 14px",
                            background: "#dde9fb",
                          },
                          "& .MuiFormLabel-root": {
                            fontSize: "12px",
                            color: "#565656",
                            letterSpacing: "0.7px",
                          },
                        }}
                      />
                    </FormControl>
                    <FormControlLabel
                      control={<Checkbox color="primary" />}
                      label={
                        <Typography variant="body2">
                          You accept our Terms and Privacy Policy by clicking
                          Submit below
                        </Typography>
                      }
                      labelPlacement="end"
                      sx={{
                        margin: 0,
                        fontSize: "12px",
                        whiteSpace: "normal",
                        display: "flex",
                        alignItems: "center",
                        color: "#565656",
                      }}
                    />
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    mt: 3,
                    justifyContent: "right",
                  }}
                >
                  <ButtonComponent
                    variant="contained"
                    name="Submit"
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
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
