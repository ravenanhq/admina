import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ButtonComponent from "../BaseComponent/Button";

const ShoppingImage = "/assets/images/danger.png";

const VerticalCenteredModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "95%", sm: "60%", md: "50%", lg: "30%" },
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
        }}
      >
        <Card
          variant="outlined"
          style={{ borderRadius: "5px", border: "none" }}
        >
          <CardContent
           sx={{
            flex: 1,
            overflowY: "auto",
            maxHeight: "100vh",
            padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Image
                src={ShoppingImage}
                alt="customer support"
                width="90"
                height="90"
              />
              <Typography
                variant="subtitle2"
                sx={{
                  pt: 2,
                  color: "#747474",
                  fontSize: "12px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Ohh! Something went wrong!
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  pt: 2,
                  color: "#565656",
                  fontSize: "12px",
                  textAlign: "center",
                  padding: "11px 45px",
                  lineHeight: "28px",
                }}
              >
                Attackers on malicious activity may trick you into doing
                something dangerous like installing software or revealing your
                personal information.
              </Typography>
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
                  background: "#007bff",
                  marginTop: "10px",
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Modal>
  );
};

export default VerticalCenteredModal;
