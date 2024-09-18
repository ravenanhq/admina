// EnhancedSearch.tsx
import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

const EnhancedSearch: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Advanced search"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Title"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiFormLabel-root":{
                  fontSize:"12px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  color: "#ADB5BD",
                  paddingTop:"8px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Author"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiFormLabel-root":{
                  fontSize:"12px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  color: "#ADB5BD",
                  paddingTop:"8px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Category"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiFormLabel-root":{
                  fontSize:"12px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  color: "#ADB5BD",
                  paddingTop:"8px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Search"
              variant="outlined"
              sx={{
                width: "100%",
                "& .MuiFormLabel-root":{
                  fontSize:"12px",
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                  paddingTop:"8px",
                  color: "#ADB5BD",
                },
              }}
              InputProps={{
                endAdornment: (
                  <IconButton edge="end">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EnhancedSearch;
