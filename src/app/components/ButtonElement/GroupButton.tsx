import React from "react";
import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";

const GroupButton = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginTop: "20px", fontSize: "14px", color: "#565656" }}
      >
        Group Buttons
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" aria-label="text success group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default GroupButton;
