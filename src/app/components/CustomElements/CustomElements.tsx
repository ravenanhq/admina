import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Switch,
  Grid,
  FormGroup,
  Checkbox,
  Typography,
  Rating,
} from "@mui/material";

const CustomElements = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Card variant="outlined">
      <CardHeader
        title="Custom Elements"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                marginTop: "10px",
                fontWeight: "600",
                fontSize: "14px",
                color: "#565656",
              }}
            >
              Switch Toggle
            </Typography>
            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
            <FormControl component="fieldset" sx={{ marginTop: "15px" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  marginTop: "10px",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#565656",
                }}
              >
                Label placement
              </Typography>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="top"
                  control={<Switch color="primary" />}
                  label="Top"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Start"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Switch color="primary" />}
                  label="Bottom"
                  labelPlacement="bottom"
                />
                <FormControlLabel
                  value="end"
                  control={<Switch color="primary" />}
                  label="End"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                marginTop: "10px",
                fontWeight: "600",
                fontSize: "14px",
                color: "#565656",
              }}
            >
              Checkbox Color
            </Typography>
            <h4></h4>

            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} defaultChecked color="secondary" />
            <Checkbox {...label} defaultChecked color="success" />
            <Checkbox {...label} defaultChecked color="default" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                marginTop: "10px",
                fontWeight: "600",
                fontSize: "14px",
                color: "#565656",
              }}
            >
              Rating Star
            </Typography>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend" sx={{ fontSize: "12px" }}>
                Controlled
              </Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography component="legend" sx={{ fontSize: "12px" }}>
                Read only
              </Typography>
              <Rating name="read-only" value={value} readOnly />
              <Typography component="legend" sx={{ fontSize: "12px" }}>
                Disabled
              </Typography>
              <Rating name="disabled" value={value} disabled />
              <Typography component="legend" sx={{ fontSize: "12px" }}>
                No rating given
              </Typography>
              <Rating name="no-value" value={null} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomElements;
