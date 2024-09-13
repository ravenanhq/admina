import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

const SearchElement: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Simple Search"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={12}>
            <TextField
              label="Search"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              sx={{
                width: "100%",
                borderRadius: "3px",
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  paddingTop: "13px",
                  color: "#ADB5BD",
                },
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchElement;
