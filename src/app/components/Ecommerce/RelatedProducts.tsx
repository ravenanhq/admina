import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Divider,
  Button,
  CardHeader,
} from "@mui/material";
import productsData from "../../../product-data.json";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));


  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <CardHeader
        title="Related Products"
        sx={{ color: "black" }}
        titleTypographyProps={{
          fontSize: "25px",
          fontWeight: "bold",
        }}
      />
      <Divider sx={{ margin: "0 auto", width: "100%" }} />
      <Card
        style={{ display: "flex", margin: "20px 0", border: "1px solid #ccc",overflow:isMobileOrTablet ? 'auto' : 'hidden' }}
      >
        {products.slice(0, 3).map((product) => (
          <>
            <CardMedia
              component="img"
              height="150"
              image={product.image}
              alt={product.name}
              style={{ width: "30%" }}
            />
            <CardContent style={{ flex: 1, margin: isMobile ? "0" : "0 0 0 20px", }}>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Rating
                name={`${product.name}-rating`}
                value={product.rating}
                precision={0.5}
                readOnly
                style={{ color: product.rating >= 1 ? "#FFD700" : "#C0C0C0" }}
              />
              <Typography color="textSecondary">{`$${product.price}`}</Typography>
              <Button
                variant="contained"
                color="warning"
                type="submit"
                size="small"
                 sx={{ padding: isMobile ? "8px" : "5px" }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </>
        ))}
      </Card>
    </>
  );
};

export default RelatedProducts;
