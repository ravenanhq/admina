import React, { useEffect, useState } from "react";
import {
  CardContent,
  Card,
  Grid,
  CardMedia,
  Typography,
  Rating,
  Link,
} from "@mui/material";
import ProductsListHeader from "./ProductsListHeader";
import productsData from "../../../product-data.json";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCollection, setSelectedCollection] = useState("");
  const [collectionOptions, setCollectionOptions] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    const localStorageData =
      JSON.parse(localStorage.getItem("productData")) || [];
    const filteredLocalStorageData = localStorageData.filter(
      (item) => !productsData.some((product) => product.id === item.id)
    );

    const mergedData = [...productsData, ...filteredLocalStorageData];
    setProducts(mergedData);
    setFilteredProducts(mergedData);
    const uniqueCollections = Array.from(
      new Set(mergedData.map((product) => product.collection))
    );
    setCollectionOptions(uniqueCollections);
  }, []);

  const getColorBasedOnRating = (rating) => {
    if (rating >= 1) {
      return "#FFD700";
    } else {
      return "#C0C0C0";
    }
  };

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setNoResultsFound(false); 
  };

  const handleCollectionChange = (selectedCollection) => {
    setSelectedCollection(selectedCollection);
    setNoResultsFound(false); 
  };

  const filterProducts = (product) => {
    const lowerCasedTerm = searchTerm.toLowerCase();
    const priceInRange =
      parseFloat(product.price) >= priceRange[0] &&
      parseFloat(product.price) <= priceRange[1];
    return (
      (product.name.toLowerCase().includes(lowerCasedTerm) ||
        product.price.toString().includes(lowerCasedTerm)) &&
      priceInRange &&
      (selectedCollection === "" || product.collection === selectedCollection)
    );
  };

  const sortProducts = (a, b) => {
    const aMatchesSearch = filterProducts(a);
    const bMatchesSearch = filterProducts(b);

    if (aMatchesSearch && !bMatchesSearch) {
      return -1;
    } else if (!aMatchesSearch && bMatchesSearch) {
      return 1;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else {
      return 0;
    }
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    // Check if there are no filtered products after applying filters
    const noResults = filteredProducts.filter(filterProducts).length === 0;
    setNoResultsFound(noResults);
  }, [filteredProducts, searchTerm, priceRange, selectedCollection]);

  return (
    <>
      <ProductsListHeader
        sortBy={sortBy}
        onSearchTermChange={handleSearchTermChange}
        onSortChange={handleSortChange}
        onPriceChange={setPriceRange}
      />
      <Card sx={{ marginTop: "20px", background: "none", boxShadow: "none" }}>
        <CardContent style={{ padding: "3px" }}>
          <Grid container spacing={isMobile ? 2 : 4}>
            {noResultsFound ? ( // Conditionally render "No results found" message
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="textSecondary" textAlign="center">
                  No results found.
                </Typography>
              </Grid>
            ) : (
              filteredProducts
                .filter(filterProducts)
                .sort(sortProducts)
                .map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <Card>
                      <Link href={"/ecommerce/product-details"}>
                        <CardMedia
                          component="img"
                          height={isMobile ? "200" : "300"}
                          image={product.image}
                          alt={product.name}
                        />
                      </Link>
                      <CardContent>
                        <Typography
                          variant={isMobile ? "subtitle1" : "h6"}
                          component="div"
                        >
                          {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
                        </Typography>
                        <Typography color="textSecondary">
                          ${product.price}
                        </Typography>
                        <Rating
                          name="product-rating"
                          value={product.rating}
                          precision={0.5}
                          readOnly
                          style={{
                            color: getColorBasedOnRating(product.rating),
                            fontSize: isMobile ? "16px" : "20px",
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
            )}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductsList;
