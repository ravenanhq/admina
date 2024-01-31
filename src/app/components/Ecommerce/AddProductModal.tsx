import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

interface Errors {
    productName?: string;
    price?: string;
    status?: string;
}

interface AddProductModalProps {
    open: boolean;
    onClose: () => void;
    onAddProduct: (product: any) => void;
}

export default function AddProductModal({
    open,
    onClose,
    onAddProduct,
}: AddProductModalProps) {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState<Errors>({});

    const validateForm = () => {
        let newErrors: Errors = {};

        if (!productName.trim()) {
            newErrors.productName = "Product name is required";
        }

        if (!price.trim()) {
            newErrors.price = "Price is required";
        } else if (isNaN(Number(price))) {
            newErrors.price = "Price must be a valid number";
        }

        if (!status.trim()) {
            newErrors.status = "Status is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleAddProduct = () => {
        if (validateForm()) {
            const newProduct = {
                id: Math.random(),
                name: productName,
                price: `$${parseFloat(price) || 0.0}`,
                status: status,
                date: new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                }),
            };
            onAddProduct(newProduct);
            setProductName("");
            setPrice("");
            setStatus("");
        }
    };

    const handleClose = () => {
        setErrors({});
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogContent>
                <TextField
                    label="Product Name"
                    fullWidth
                    margin="normal"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    error={!!errors.productName}
                    helperText={errors.productName}
                />
                <TextField
                    label="Price"
                    fullWidth
                    margin="normal"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    error={!!errors.price}
                    helperText={errors.price}
                />
                <TextField
                    label="Status"
                    fullWidth
                    margin="normal"
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    error={!!errors.status}
                    helperText={errors.status}
                />
            </DialogContent>
            <DialogActions style={{ margin: '0 0 16px 0' }}>
                <Button
                    onClick={handleAddProduct}
                    variant="contained"
                    color="primary"
                >
                    Add Product
                </Button>
                <Button
                    onClick={handleClose}
                    variant="contained"
                    color="warning"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
