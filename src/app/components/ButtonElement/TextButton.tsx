import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import AddIcon from "@mui/icons-material/Add";

const TextButton = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ marginTop: "20px", fontSize: "14px", color: "#565656" }}
      >
        Text button
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            color="primary"
            name="Add New User"
            size="large"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            color="secondary"
            name="Add New User"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            color="success"
            name="Add New User"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            color="warning"
            name="Add New User"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            type="submit"
            size="small"
            color="primary"
            name="Add New User"
            prefix={<AddIcon sx={{ marginTop: "-4px" }} />}
            style={{
              width: "100%",
            }}
          ></ButtonComponent>
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            type="submit"
            size="small"
            color="secondary"
            name="Add New User"
            prefix={<AddIcon sx={{ marginTop: "-4px" }} />}
            style={{
              width: "100%",
            }}
          ></ButtonComponent>
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="text"
            type="submit"
            size="small"
            color="success"
            name="Add New User"
            prefix={<AddIcon />}
            style={{
              width: "100%",
            }}
          ></ButtonComponent>
        </Grid>
        <Grid item xs={6} md={3} sx={{ pt: 1 }}>
          <ButtonComponent
            variant="text"
            type="submit"
            size="small"
            color="warning"
            name="Add New User"
            prefix={<AddIcon />}
            style={{
              width: "100%",
            }}
          ></ButtonComponent>
        </Grid>
      </Grid>
    </>
  );
};

export default TextButton;
