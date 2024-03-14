import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    TextField,
    Button,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    Divider,
    Snackbar,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonComponent from "../BaseComponent/Button";

const AddNewProduct = () => {
    const [successMessageOpen, setSuccessMessageOpen] = useState(false);
    const router = useRouter();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        compareAtPrice: "",
        productType: "",
        vendorType: "",
        collection: "",
        productTag: "",
        image: null,
        imageFileName: "",
        title: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        price: "",
        compareAtPrice: "",
        productType: "",
        vendorType: "",
        collection: "",
        productTag: "",
        image: "",
        title: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
            isValid = false;
        } else {
            newErrors.name = "";
        }

        if (formData.compareAtPrice.trim() === "") {
            newErrors.compareAtPrice = "Compare at price is required";
            isValid = false;
        } else {
            newErrors.compareAtPrice = "";
        }

        if (formData.price.trim() === "") {
            newErrors.price = "Price is required";
            isValid = false;
        } else {
            newErrors.price = "";
        }

        if (formData.title.trim() === "") {
            newErrors.title = "Title is required";
            isValid = false;
        } else {
            newErrors.title = "";
        }

        if (!formData.image) {
            newErrors.image = "Image is required";
            isValid = false;
        } else {
            newErrors.image = "";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [name]: reader.result,
                    imageFileName: file ? file.name : "",
                }));
            };
            if (file) {
                reader.readAsDataURL(file);
                
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const existingProductData = JSON.parse(localStorage.getItem("productData")) || [];
            const updatedProductData = [...existingProductData, formData];
            localStorage.setItem("productData", JSON.stringify(updatedProductData));
            setSuccessMessageOpen(true);
            router.push("/ecommerce/products", { scroll: false });
        }
    };

    const handleSnackbarClose = () => {
        setSuccessMessageOpen(false);
    };

    return (
        <Card variant="outlined">
            <Snackbar
                open={successMessageOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Product Added Successfully"
            />
            <CardHeader
                title="Add New Product"
                sx={{ color: "#32393f" }}
                titleTypographyProps={{ fontSize: "16px", fontWeight: "bold" }}
            />
            <Divider sx={{ margin: "0 17px 0 10px", width: "98%" }} />

            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Product Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                error={!!errors.title}
                                helperText={errors.title}
                                size="small"
                            />
                              <TextField
                                fullWidth
                                margin="normal"
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                size="small"
                            />
                             <TextField
                                fullWidth
                                margin="normal"
                                label="Price"
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                error={!!errors.price}
                                helperText={errors.price}
                                size="small"
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Compare at Price"
                                type="text"
                                name="compareAtPrice"
                                value={formData.compareAtPrice}
                                onChange={handleChange}
                                error={!!errors.compareAtPrice}
                                helperText={errors.compareAtPrice}
                                size="small"
                            />
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ paddingTop: isMobile ? '0' : "" }}>
                        <form onSubmit={handleSubmit}>
                        <FormControl sx={{ mt: 2, minWidth: "100%" }} size="small">
                                <InputLabel id="demo-simple-select-error-label">
                                    Vendor Type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-error-label"
                                    id="demo-simple-select-error"
                                    name="vendorType"
                                    value={formData.vendorType}
                                    label="Vendor Type"
                                    onChange={handleChange}
                                    renderValue={(value) => `${value}`}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="One">One</MenuItem>
                                    <MenuItem value="Two">Two</MenuItem>
                                    <MenuItem value="Three">Three</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ mt: 3, minWidth: "100%" }} size="small">
                                <InputLabel id="demo-simple-select-error-label">
                                    Product Type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-error-label"
                                    id="demo-simple-select-error"
                                    value={formData.productType}
                                    label="Product Type"
                                    name="productType"
                                    onChange={handleChange}
                                    renderValue={(value) => `${value}`}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="One">One</MenuItem>
                                    <MenuItem value="Two">Two</MenuItem>
                                    <MenuItem value="Three">Three</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ mt: 3, minWidth: "100%" }} size="small">
                                <InputLabel id="demo-simple-select-error-label">
                                    Collection
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-error-label"
                                    id="demo-simple-select-error"
                                    value={formData.collection}
                                    label="collection"
                                    name="collection"
                                    onChange={handleChange}
                                    renderValue={(value) => `${value}`}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="One">One</MenuItem>
                                    <MenuItem value="Two">Two</MenuItem>
                                    <MenuItem value="Three">Three</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ mt: 1, minWidth: "100%" }} size="small">
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Product Tag"
                                type="text"
                                name="productTag"
                                value={formData.productTag}
                                onChange={handleChange}
                                size="small"
                            /></FormControl>
                        </form>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form>
                    <FormControl sx={{ mt: 2, minWidth: isMobile ? "100%" : "99%",
                             }} 
                            size="small"
                            error={Boolean(errors.image)} >
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChange}
                                    accept="image/*"
                                    style={{
                                        display: "none",
                                        marginTop: "10px",
                                        border: "2px solid #007bff",
                                        borderRadius: "4px",
                                    }}
                                    id="imageInput"
                                />
                                <label htmlFor="imageInput">
                                    <Button
                                        variant="outlined"
                                        component="span"
                                        fullWidth
                                        size="small"
                                        sx={{
                                            color: `${errors.image ? "#d32f2f" : "#888"}`,
                                            padding: "34px",
                                            border: `1px solid ${errors.image ? '#d32f2f' : '#c4c4c4'}`
                                          
                                        }}
                                    >
                                        {formData.imageFileName || "Upload Image"}
                                    </Button>
                                </label>
                                <FormHelperText sx={{ color: "#d32f2f" }}>
                                    {errors.image}
                                </FormHelperText>
                            </FormControl>
                    </form>
                </Grid>
            </CardContent>
            <CardActions style={{ margin: "0px 14px 14px 14px",justifyContent:"right" }}>
            <ButtonComponent
          variant="contained"
          type="submit"
          size="small"
          onClick={handleSubmit}
          style={{
            background: "#2e7d32",
            padding:"5px 10px"
          }}
          name="Save Product"
        ></ButtonComponent>
            </CardActions>
        </Card>
    );
};

export default AddNewProduct;
