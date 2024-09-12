import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import AddIcon from "@mui/icons-material/Add";

const BasicButtonElement = () => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontSize: "14px", color: "#565656" }}
      >
        Basic Buttons
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="contained"
            color="primary"
            name="Add New User"
            size="large"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="contained"
            color="secondary"
            name="Add New User"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="contained"
            color="success"
            name="Add New User"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="contained"
            color="warning"
            name="Add New User"
            style={{ width: "100%", padding: "10px" }}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            color="primary"
            name="Add New User"
            prefix={<AddIcon sx={{ marginTop: "-4px" }} />}
            style={{
              background: "#008cff",
              width: "100%",
            }}
          ></ButtonComponent>
        </Grid>
        <Grid item xs={6} md={3}>
          <ButtonComponent
            variant="contained"
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
            variant="contained"
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
            variant="contained"
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

export default BasicButtonElement;
