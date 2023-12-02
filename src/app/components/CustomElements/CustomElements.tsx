import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Switch,
  ButtonGroup,
  Grid,
  FormGroup,
  Slider,
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
        sx={{ bgcolor: "#008744", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <h4>Switch Toggle</h4>

              <Switch {...label} defaultChecked />
              <Switch {...label} />
              <Switch {...label} disabled defaultChecked />
              <Switch {...label} disabled />
              <FormControl component="fieldset" sx={{ marginTop: "15px" }}>
                <FormLabel component="legend">Label placement</FormLabel>
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
              <h4>Slider</h4>

                <Slider
                  size="small"
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                />
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />

              <h4>Checkbox Color</h4>

                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />

          </Grid>
          <Grid item xs={12} lg={6}>
            <h4>Button Group</h4>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              sx={{ marginTop: "15px" }}
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{ marginTop: "15px" }}
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              sx={{ marginTop: "15px" }}
            >
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <h4>Rating Star</h4>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Typography component="legend">Read only</Typography>
              <Rating name="read-only" value={value} readOnly />
              <Typography component="legend">Disabled</Typography>
              <Rating name="disabled" value={value} disabled />
              <Typography component="legend">No rating given</Typography>
              <Rating name="no-value" value={null} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomElements;
