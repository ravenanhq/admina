import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  FormControl,
  FormControlLabel,
  Switch,
  Grid,
  FormGroup,
  Checkbox,
  Typography,
  Rating,
} from "@mui/material";

const CustomElements = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const [controlledValue, setControlledValue] = React.useState<number | null>(
    2
  );
  const [readOnlyValue, setReadOnlyValue] = React.useState<number | null>(2);
  const [disabledValue, setDisabledValue] = React.useState<number | null>(2);
  const [noValue, setNoValue] = React.useState<number | null>(null);

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
            <div>
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
            <Switch {...label} disabled /></div>
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
                  sx={{
                    marginLeft:"0",
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color:"#565656"
                    },
                  }}
                />
                <FormControlLabel
                  value="start"
                  control={<Switch color="primary" />}
                  label="Start"
                  labelPlacement="start"
                  sx={{
                    marginLeft:"0",
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color:"#565656"
                    },
                  }}
                />
                <FormControlLabel
                  value="bottom"
                  control={<Switch color="primary" />}
                  label="Bottom"
                  labelPlacement="bottom"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color:"#565656"
                    },
                  }}
                />
                <FormControlLabel
                  value="end"
                  control={<Switch color="primary" />}
                  label="End"
                  labelPlacement="end"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color:"#565656"
                    },
                  }}
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
              <Typography component="legend" sx={{ fontSize: "12px",color:"#565656" }}>
                Controlled
              </Typography>
              <Rating
                name="simple-controlled"
                value={controlledValue}
                onChange={(event, newValue) => {
                  setControlledValue(newValue);
                }}
              />
              <Typography component="legend" sx={{ fontSize: "12px",color:"#565656" }}>
                Read only
              </Typography>
              <Rating
                name="read-only"
                value={readOnlyValue}
                onChange={(event, newValue) => {
                  setReadOnlyValue(newValue);
                }}
                readOnly
              />
              <Typography component="legend" sx={{ fontSize: "12px",color:"#565656" }}>
                Disabled
              </Typography>
              <Rating name="disabled" value={disabledValue} disabled />
              <Typography component="legend" sx={{ fontSize: "12px",color:"#565656" }}>
                No rating given
              </Typography>
              <Rating name="no-value" value={noValue} />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomElements;
