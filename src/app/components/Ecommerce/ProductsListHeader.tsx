import React, { useState } from "react";
import {
  IconButton,
  CardContent,
  Card,
  Grid,
  TextField,
  Link,
  Select,
  MenuItem,
  Slider,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BaseComponent/Button";

const ProductsListHeader = ({
  sortBy,
  onSortChange,
  onSearchTermChange,
  onPriceChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = React.useState([0, 1000]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    onPriceChange(newValue);
  };

  const handleSearchTermChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearchTermChange(newSearchTerm);
  };

  return (
    <Card variant="outlined">
      <CardContent sx={{ borderRadius: "4px", padding: "20px" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            style={{ marginTop: "8px", paddingTop: "14px" }}
          >
            <Link href={"/ecommerce/add-new-product"}>
              <ButtonComponent
                variant="contained"
                type="submit"
                size="small"
                prefix={<AddCircleOutlineIcon />}
                style={{
                  padding: "8px 10px",
                  background: "#008cff",
                  margin: isMobile ? "0 0 0 10px" : "",
                }}
                name="New Product"
              ></ButtonComponent>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            style={{ paddingTop: "14px", width: "100%" }}
          >
            <TextField
              placeholder="Search"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchTermChange}
              InputProps={{
                endAdornment: (
                  <div
                    style={{
                      borderLeft: "1px solid #ccc",
                      paddingLeft: "8px",
                      paddingBottom: "0",
                    }}
                  >
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  </div>
                ),
              }}
              sx={{
                height: "40px",
                padding: "8px",
                width: "100%",
                "& input": { padding: "8px" },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            style={{ paddingTop: "14px", marginTop: "8px" }}
          >
            <Select
              value={sortBy}
              onChange={onSortChange}
              displayEmpty
              inputProps={{ "aria-label": "Sort By" }}
              sx={{
                height: "40px",
                padding: "8px",
                marginLeft: isMobile ? "8px" : "",
                width: isMobile ? "95%" : "100%",
              }}
              style={{ color: "#888" }}
            >
              <MenuItem value="" disabled>
                Sort By
              </MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={2}
            style={{
              paddingTop: "14px",
              marginTop: isMobile ? "0" : "15px",
              display: isMobile ? "block" : "flex",
              color: "#888",
            }}
          >
            <Typography
              id="price-range-slider"
              variant="subtitle1"
              gutterBottom
              style={{ marginLeft: isMobile ? "9px" : "" }}
            >
              Price
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              aria-labelledby="price-range-slider"
              min={0}
              max={1000}
              step={10}
              style={{
                width: isMobile ? "90%" : "100%",
                marginLeft: "15px",
                padding: "13px 0",
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductsListHeader;
