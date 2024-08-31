import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Grid,
  FormGroup,
  Checkbox,
} from "@mui/material";

const GeneralElements = () => {
  const [age, setAge] = React.useState("");

  return (
    <Card variant="outlined">
      <CardHeader
        title="General Elements"
        sx={{ bgcolor: "#008744", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
          <h4>Text Field Color</h4>
          <TextField label="Outlined secondary" color="secondary" focused style={{ marginLeft: '15px', marginTop: '15px' }} />
          <TextField
            label="Filled success"
            variant="filled"
            color="success"
            focused
            size="small"
            style={{ marginLeft: '15px', marginTop: '15px'  }}
          />
          <TextField
            label="Standard warning"
            variant="standard"
            color="warning"
            size="small"
            focused
            style={{ marginLeft: '15px', marginTop: '15px', marginBottom: '15px' }}
          />

        <div>
          <h4>Select</h4>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" disabled>
            <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={age}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" error>
            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-error-label"
              id="demo-simple-select-error"
              value={age}
              label="Age"
              renderValue={(value) => `⚠️  - ${value}`}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-readonly-label"
              id="demo-simple-select-readonly"
              value={age}
              label="Age"
              inputProps={{ readOnly: true }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Read only</FormHelperText>
          </FormControl>
          <FormControl required sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={age}
              label="Age *"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h4>
                Radio <Button></Button>
              </h4>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <h4>Checkbox</h4>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Required"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox />}
                  label="Disabled"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneralElements;
