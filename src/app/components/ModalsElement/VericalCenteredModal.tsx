import { Box, Card, CardContent, Modal, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import ButtonComponent from "../BaseComponent/Button";

const ShoppingImange = "/assets/images/danger.png";

const VericalCenteredModal = ({ open, handleClose }) => {
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
          style={{ borderRadius: "5px", border: "none" }}
        >
          <CardContent>
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
                src={ShoppingImange}
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
                something dangrous like installing software or revealing your
                personal informations.
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

export default VericalCenteredModal;
