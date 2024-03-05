import React, { useEffect, useState } from "react";
import {
  CardMedia,
  CircularProgress,
  Grid,
  IconButton,
  Link,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import productsData from "../../../product-data.json";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonComponent from "../BasicUIElements/ButtonComponent";

const WishlistItem = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add state to track loading
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const handleClearWishlist = () => {
    setProducts([]);
  };

  return (
    <div className="wishList">
      {isLoading ? (
        <div style={{ textAlign: "center", fontStyle: "italic" }}>
          <Typography
            variant="h4"
            style={{ fontStyle: "oblique", fontSize: isMobile ? "20px" : "" }}
          >
            {" "}
            <CircularProgress />
          </Typography>
        </div>
      ) : products.length === 0 ? (
        <div style={{ textAlign: "center", fontStyle: "italic" }}>
          <Typography
            variant="h4"
            style={{ fontStyle: "oblique", fontSize: isMobile ? "20px" : "" }}
          >
            Your <span style={{ color: "#e53e29" }}>wishlist</span> is currently{" "}
            <span style={{ color: "#e53e29" }}>Empty!</span>..
          </Typography>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #ccc",
              borderBottom: "1px solid #ccc",
              padding: "10px 0 10px 0",
            }}
          >
            <Typography variant="h6" style={{ fontSize: "14px" }}>
              My Wishlist
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ textAlign: "right", fontSize: "14px" }}
            >
              {products.length} <span style={{ color: "#e53e29" }}>items:</span>
            </Typography>
          </div>
          <Table style={{ background: "#fff" }}>
            <TableBody>
              {products.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <CardMedia
                      component="img"
                      height="100"
                      image={item.image}
                      alt={item.name}
                      sx={{
                        marginRight: isMobile ? "10px" : "20px",
                        width: "auto",
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <ListItemText
                      primary={item.name}
                      secondary={item.description}
                      primaryTypographyProps={{ variant: "subtitle1" }}
                      secondaryTypographyProps={{ variant: "body2" }}
                    />
                  </TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <ButtonComponent
                      variant="text"
                      color="warning"
                      type="submit"
                      size="small"
                      style={{
                        padding: "10px",
                        minWidth: isMobile ? "146px" : "",
                        marginTop: isMobile ? "10px" : "",
                      }}
                      name="Add to Cart"
                    ></ButtonComponent>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(item.id)}
                      sx={{ padding: isMobile ? "0 8px 8px 8px" : "8px" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}

      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          marginTop: "15px",
          marginLeft: "0",
          justifyContent: "right",
        }}
        className="wishlishBtn"
      >
        <Link href={"/ecommerce/products"}>
          <ButtonComponent
            variant="contained"
            color="warning"
            type="submit"
            size="small"
            style={{
              padding: "10px 16px",
              background: "#f15a2b",
              marginRight: "20px",
              minWidth: isMobile ? "146px" : "",
              borderRadius: "10px",
            }}
            name="Continue Shopping"
          ></ButtonComponent>
        </Link>
        <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          onClick={handleClearWishlist}
          style={{
            background: "#f15a2b",
            padding: "10px",
            minWidth: isMobile ? "146px" : "",
            borderRadius: "10px",
          }}
          name="Clear Wishlist"
        ></ButtonComponent>
      </Grid>
    </div>
  );
};

export default WishlistItem;
