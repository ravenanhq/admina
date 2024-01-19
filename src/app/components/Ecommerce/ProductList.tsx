import React, { useEffect, useState } from 'react';
import {
    CardContent,
    Card,
    Grid,
    CardMedia,
    Typography,
    Rating,
    Link,
} from '@mui/material';
import productsData from '../../../product-data.json';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('productData')) || [];
        const filteredLocalStorageData = localStorageData.filter(item => !productsData.some(product => product.id === item.id));
        
        const mergedData = [...productsData, ...filteredLocalStorageData];
        setProducts(mergedData);
    }, []);



    const getColorBasedOnRating = (rating) => {
        if (rating >= 1) {
            return "#FFD700";
        } else {
            return "#C0C0C0";
        }
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <><Card sx={{ marginTop: "20px", background: "none", boxShadow: "none" }}>
            <CardContent style={{ padding: "3px" }}>
                <Grid container spacing={isMobile ? 2 : 4} >
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card>
                                <Link href={"/ecommerce/product-details"}>
                                    <CardMedia
                                        component="img"
                                        height={isMobile ? "200" : "300"}
                                        image={product.image}
                                        alt={product.name}
                                    /></Link>
                                <CardContent>
                                    <Typography variant={isMobile ? "subtitle1" : "h6"} component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography color="textSecondary">{product.price}</Typography>
                                    <Rating
                                        name="product-rating"
                                        value={product.rating}
                                        precision={0.5}
                                        readOnly
                                        style={{ color: getColorBasedOnRating(product.rating), fontSize: isMobile ? "16px" : "20px" }}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
        </>

    );
};

export default ProductsList;
