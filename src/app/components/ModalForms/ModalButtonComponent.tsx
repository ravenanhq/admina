import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import SectionModalForm from "./SectionModalForm";
import CheckboxModalForm from "./CheckboxModalForm";
import { ResourceOption, RoleOption } from "./data";
import ComplexModalForm from "./ComplexModalForm";

const ModalButtonComponent = () => {
  const [isSessionopen, setIsSessionOpen] = React.useState(false);
  const [isCheckboxOpen, setIsCheckboxOpen] = React.useState(false);
  const [isComplexOpen, setIsComplexOpen] = React.useState(false);

  const handleSessionOpen = () => setIsSessionOpen(true);
  const handleSessionClose = () => setIsSessionOpen(false);
  const handleCheckboxOpen = () => setIsCheckboxOpen(true);
  const handleCheckboxClose = () => setIsCheckboxOpen(false);

  const handlaeComplexFormOpen = () => {
    setIsComplexOpen(true);
  };

  const handleComplexFormClose = () => {
    setIsComplexOpen(false);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: "10px" }}>
        Modal Forms
      </Typography>
      <Divider sx={{ margin: "0 auto", marginY: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={3}>
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            onClick={handleSessionOpen}
            style={{
              textTransform: "capitalize",
              background: "#3780d4",
              padding: "5px 15px",
            }}
            name="Section Form "
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            style={{
              textTransform: "capitalize",
              background: "#3780d4",
              padding: "5px 15px",
            }}
            name="CheckBox Form"
            onClick={handleCheckboxOpen}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <ButtonComponent
            variant="contained"
            type="submit"
            size="small"
            style={{
              textTransform: "capitalize",
              background: "#3780d4",
              padding: "5px 15px",
            }}
            name="Complex Form"
            onClick={handlaeComplexFormOpen}
          />
        </Grid>
      </Grid>
      <SectionModalForm open={isSessionopen} close={handleSessionClose} />
      <CheckboxModalForm
        open={isCheckboxOpen}
        close={handleCheckboxClose}
        options={ResourceOption}
        roleOption={RoleOption}
      />
      <ComplexModalForm open={isComplexOpen} close={handleComplexFormClose} />
    </>
  );
};

export default ModalButtonComponent;
