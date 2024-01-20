import React, { useState } from 'react';
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
  Button,
  Grid,
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductDetails = () => {

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const getColorBasedOnRating = (rating) => {
    return rating >= 4 ? '#FFD700' : '#C0C0C0';
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Card style={{ display: isMobile ? "block" : "flex", border: "1px solid #ccc" }} className="productDetail">
        <CardMedia
          component="img"
          height="500"
          image="/assets/images/pro3.jpeg"
          alt="Product 1"
          style={{ width: isMobile ? "100%" : "50%" }}
        />
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
          <Typography variant="body1" color="textPrimary">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Divider sx={{ margin: "0 auto", marginY: 2, width: "100%" }} />
          <Box display="flex" flexDirection="row">
            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              style={{ marginRight: "10px", width: "40%", height: "20px" }}
            />
            <FormControl
              component="fieldset"
              style={{ margin: "0 22px 10px 22px" }}
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
            <FormControl
              component="fieldset"
              style={{ marginBottom: "10px" }}
            >
              <FormLabel component="legend">Color</FormLabel>
              <RadioGroup
                aria-label="color"
                name="color"
                value={selectedColor}
                onChange={handleColorChange}
                style={{ flexDirection: isMobileOrTablet ? "column" : "row" }}
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
            <Grid container spacing={2} sx={{ display: "flex" }}>
              <Grid
                item
                xs={6}
                sm={12}
                style={{
                  paddingLeft: "17px",
                  marginTop: "8px",
                  paddingTop: "14px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="small"
                  sx={{
                    padding: "10px 16px",
                    background: "#008cff",
                    marginRight: "20px",
                    minWidth: isMobile ? "146px" : "",
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  type="submit"
                  size="small"
                  startIcon={<ShoppingCartCheckoutIcon />}
                  sx={{ padding: isMobile ? "15px" : "10px", minWidth: isMobile ? "146px" : "", marginTop: isMobile ? "10px" : "" }}

                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductDetails;
