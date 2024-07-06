import * as React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";

const CheckboxModalForm = ({ options, handleSelectionChange, resetState }) => {
  const initialResourceState = options.reduce(
    (acc, option) => ({ ...acc, [option.value]: false }),
    {}
  );

  const [resourceState, setResourceState] =
    React.useState(initialResourceState);

  React.useEffect(() => {
    if (resetState) {
      setResourceState(initialResourceState);
    }
  }, [resetState, initialResourceState]);

  const handleResourceChange = (event) => {
    const newState = {
      ...resourceState,
      [event.target.name]: event.target.checked,
    };
    setResourceState(newState);
    handleSelectionChange("resources", newState);
  };

  return (
    <>
      <Typography
        id="modal-modal-description"
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          padding: "20px 0 0px 0",
        }}
      >
        Area of Interested
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "normal",
            paddingBottom: "20px",
          }}
        >
          Resource
        </Typography>
        <Grid container spacing={2}>
          {options.map((option) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{ paddingTop: "0px" }}
              key={option.value}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={resourceState[option.value]}
                    onChange={handleResourceChange}
                    name={option.value}
                  />
                }
                label={option.label}
                componentsProps={{
                  typography: { fontSize: "14px" },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CheckboxModalForm;
