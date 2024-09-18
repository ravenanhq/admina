import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
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
  Typography,
} from "@mui/material";

const GeneralElements = () => {
  const [age, setAge] = React.useState("");

  return (
    <Card variant="outlined">
      <CardHeader
        title="General Elements"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: "14px", color: "#565656" }}
        >
          Text Field Color
        </Typography>
        <TextField
          label="Outlined secondary"
          color="secondary"
          focused
          sx={{
            marginLeft: "15px",
            marginTop: "15px",
            "& .MuiInputLabel-root": {
              color: "#B30086",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#B30086",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#B30086",
                borderWidth: "1px",
              },
              "&:hover fieldset": {
                borderColor: "#B30086",
                borderWidth: "1px",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#B30086",
                borderWidth: "1px",
              },
            },
          }}
        />
        <TextField
          label="Filled success"
          variant="filled"
          color="success"
          focused
          size="small"
          sx={{
            marginLeft: "15px",
            marginTop: "15px",
            "& .MuiInputLabel-root": {
              color: "#008744",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#008744",
            },
            "& .MuiFilledInput-root": {
              "&:before": {
                borderBottomColor: "#008744",
                borderWidth: "1px",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: "#008744",
                borderWidth: "1px",
              },
              "&:after": {
                borderBottomColor: "#008744",
                borderWidth: "1px",
              },
            },
          }}
        />

        <TextField
          label="Standard warning"
          variant="standard"
          color="warning"
          size="small"
          focused
          sx={{
            marginLeft: "15px",
            marginTop: "15px",
            marginBottom: "15px",
            "& .MuiInputLabel-root": {
              color: "#E65C00",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#E65C00",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#E65C00",
              borderWidth: "1px",
            },
            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
              borderBottomColor: "#E65C00",
              borderWidth: "1px",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#E65C00",
              borderWidth: "1px",
            },
          }}
        />

        <div>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginTop: "10px", fontSize: "14px", color: "#565656" }}
          >
            Select
          </Typography>
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
                Radio
              </Typography>
              <FormControl>
                <FormLabel
                  id="demo-radio-buttons-group-label"
                  sx={{ fontSize: "12px" }}
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                    },
                  }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "12px",
                        color: "#565656",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "12px",
                        color: "#565656",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: "12px",
                        color: "#565656",
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
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
                Checkbox
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color: "#565656",
                    },
                  }}
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Required"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color: "#565656",
                    },
                  }}
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox />}
                  label="Disabled"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "12px",
                      color: "#565656",
                    },
                  }}
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
