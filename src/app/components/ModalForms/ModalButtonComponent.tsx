import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import ButtonComponent from "../BaseComponent/Button";
import SectionModalForm from "./SectionModalForm";

const ModalButtonComponent = () => {
  const [isSessionopen, setIsSessionOpen] = React.useState(false);

  const handleSessionOpen = () => setIsSessionOpen(true);
  const handleSessionClose = () => setIsSessionOpen(false);

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
      </Grid>
      <SectionModalForm open={isSessionopen} close={handleSessionClose} />
    </>
  );
};

export default ModalButtonComponent;
