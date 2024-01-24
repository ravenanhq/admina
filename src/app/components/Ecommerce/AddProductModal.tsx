import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
} from "@mui/material";

export default function AddProductModal({ open, onClose, onAddProduct }) {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");

    const handleAddProduct = () => {

        const newProduct = {
            id: Math.random(),
            name: productName,
            price: `$${parseFloat(price) || 0.0}`,
            status: status,
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }),
        };
        onAddProduct(newProduct);
        setProductName("");
        setPrice("");
        setStatus("");
    };

    const handleClose = () => {
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
                />
                <TextField
                    label="Price"
                    fullWidth
                    margin="normal"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    label="Status"
                    fullWidth
                    margin="normal"
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddProduct} variant="contained" color="primary" >
                    Add Product
                </Button>
                <Button onClick={handleClose} variant="contained" color="warning">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}
