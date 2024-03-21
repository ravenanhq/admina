import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  FormControl,
  FormLabel,
  Divider,
  Grid,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonComponent from "../BaseComponent/Button";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isInWishlist, setIsInWishlist] = useState(false);

  const getColorBasedOnRating = (rating) => {
    return rating >= 4 ? "#FFD700" : "#C0C0C0";
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value === "" || (value > 0 && Number.isInteger(parseFloat(value)))) {
      setQuantity(value);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleWishlistClick = () => {
    setIsInWishlist(!isInWishlist);
  };

  return (
    <>
      <Card
        style={{
          display: isMobile ? "block" : "flex",
          border: "1px solid #ccc",
        }}
        className="productDetail"
      >
        <Grid
          item
          style={{
            marginTop: "15px",
            paddingTop: "8px",
            display: isMobile ? "flex" : "none",
            justifyContent: isMobile ? "right" : "",
            paddingRight: isMobile ? "8px" : "",
          }}
          className="productWishlistBtn"
        >
          {isInWishlist ? (
            <FavoriteIcon
              onClick={handleWishlistClick}
              style={{ color: "#e53e29" }}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={handleWishlistClick}
              style={{ color: "#333333" }}
            />
          )}
        </Grid>
        <CardMedia
          component="img"
          height="500"
          image="/assets/images/pro3.jpeg"
          alt="Product 1"
          style={{ width: isMobile ? "100%" : "50%" }}
        />
        <Grid
          item
          style={{
            marginTop: "15px",
            paddingTop: "8px",
            display: isMobile ? "none" : "",
            justifyContent: isMobile ? "right" : "",
            paddingRight: isMobile ? "8px" : "",
          }}
          className="productWishlistBtn"
        >
          {isInWishlist ? (
            <FavoriteIcon
              onClick={handleWishlistClick}
              style={{ color: "#e53e29" }}
            />
          ) : (
            <FavoriteBorderIcon
              onClick={handleWishlistClick}
              style={{ color: "#333333" }}
            />
          )}
        </Grid>
        <CardContent style={{ flex: 1, marginLeft: "20px" }}>
          <Typography variant="h5" component="div">
            Product 1
          </Typography>
          <Rating
            name="product-rating"
            value={4}
            precision={0.5}
            readOnly
            style={{ color: getColorBasedOnRating(4) }}
          />
          <Typography color="textSecondary">$39.99</Typography>
          <Typography color="#28a745">In Stock</Typography>
          <Typography variant="body1" color="textPrimary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>

          <Divider sx={{ margin: "0 auto", marginY: 2, width: "100%" }} />
          <Box
            display={isMobileOrTablet ? "block" : "flex"}
            flexDirection={isMobileOrTablet ? "column" : "row"}
          >
            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              inputProps={{ min: "1" }}
              style={{
                marginRight: "10px",
                width: isMobileOrTablet ? "100%" : "40%",
                height: isMobileOrTablet ? "" : "20px",
              }}
            />
            <FormControl
              component="fieldset"
              style={{
                margin: isMobileOrTablet
                  ? "15px 22px 10px 0px"
                  : "0 22px 10px 22px",
                width: isMobileOrTablet ? "100%" : "",
              }}
            >
              <FormLabel component="legend">Select Size</FormLabel>
              <RadioGroup
                aria-label="size"
                name="size"
                value={selectedSize}
                onChange={handleSizeChange}
                style={{}}
              >
                <FormControlLabel
                  value="small"
                  control={<Radio />}
                  label="Small"
                  style={{ marginRight: "10px" }}
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio />}
                  label="Medium"
                  style={{ marginRight: "10px" }}
                />
                <FormControlLabel
                  value="large"
                  control={<Radio />}
                  label="Large"
                  style={{ marginRight: "10px" }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" style={{ marginBottom: "10px" }}>
              <FormLabel component="legend">Color</FormLabel>
              <RadioGroup
                aria-label="color"
                name="color"
                value={selectedColor}
                onChange={handleColorChange}
                style={{
                  width: isMobileOrTablet ? "100%" : "",
                  flexDirection: "row",
                }}
              >
                <FormControlLabel
                  value="#0000FF"
                  control={<Radio style={{ color: "#0000FF" }} />}
                  label=""
                  sx={{ marginRight: "0" }}
                />
                <FormControlLabel
                  value="#00FF00"
                  control={<Radio style={{ color: "#00FF00" }} />}
                  label=""
                  sx={{ marginRight: "0" }}
                />
                <FormControlLabel
                  value="#ffc107"
                  control={<Radio style={{ color: "#ffc107" }} />}
                  label=""
                  sx={{ marginRight: "0" }}
                />
                <FormControlLabel
                  value="#e34fa3"
                  control={<Radio style={{ color: "#e34fa3" }} />}
                  label=""
                  sx={{ marginRight: "0" }}
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex" }}
              className="productBtn"
            >
              <Grid
                item
                xs={12}
                sm={10}
                style={{
                  paddingLeft: "17px",
                  marginTop: "8px",
                  paddingTop: "14px",
                }}
              >
                <ButtonComponent
                  variant="contained"
                  type="submit"
                  size="small"
                  style={{
                    padding: "10px 16px",
                    background: "#008cff",
                    marginRight: "20px",
                    minWidth: isMobile ? "146px" : "",
                  }}
                  name="Buy Now"
                ></ButtonComponent>
                <ButtonComponent
                  variant="contained"
                  type="submit"
                  size="small"
                  prefix={<ShoppingCartCheckoutIcon />}
                  style={{
                    padding: isMobile ? "15px" : "3px 10px",
                    minWidth: isMobile ? "146px" : "",
                    marginTop: isMobile ? "10px" : "",
                    background: "#ed6c02",
                  }}
                  name="Add to Cart"
                ></ButtonComponent>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetails;
