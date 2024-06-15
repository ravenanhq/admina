import * as React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CheckboxModalForm = ({ open, close, options, roleOption }) => {
  const initialResourceState = options.reduce(
    (acc, option) => ({ ...acc, [option.value]: false }),
    {}
  );

  const initialRoleState = roleOption.reduce(
    (acc, roleOption) => ({ ...acc, [roleOption.value]: false }),
    {}
  );

  const [resourceState, setResourceState] =
    React.useState(initialResourceState);
  const [roleState, setRoleState] = React.useState(initialRoleState);

  const handleResourceChange = (event) => {
    setResourceState({
      ...resourceState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleRoleChange = (event) => {
    setRoleState({
      ...roleState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log("Selected options:", resourceState);
    close();
  };

  const handleClear = () => {
    setResourceState(initialResourceState);
    setRoleState(initialRoleState);
  };

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Dialog open={open} onClose={close}>
        <DialogTitle id="modal-modal-title">
          Register Form
          <IconButton
            aria-label="close"
            onClick={close}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 1 }}>
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
            >
              Resource
            </Typography>
            <Grid container spacing={2}>
              {options.map((option) => (
                <Grid item sm={12} md={4} style={{ paddingTop: "0px" }}>
                  <FormControlLabel
                    key={option.value}
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
            <Typography
              id="modal-modal-description"
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                padding: "20px 0 15px 0",
              }}
            >
              Roles
            </Typography>
            <Grid container spacing={2}>
              {roleOption.map((option) => (
                <Grid item sm={12} md={4} style={{ paddingTop: "0px" }}>
                  <FormControlLabel
                    key={option.value}
                    control={
                      <Checkbox
                        checked={roleState[option.value]}
                        onChange={handleRoleChange}
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
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Apply Filter
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </DialogActions>
      </Dialog>
    </Modal>
  );
};
export default CheckboxModalForm;
