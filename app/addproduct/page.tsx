"use client";
import { addProduct } from "@/features/products/actions";
import { useAppDispatch } from "@/store/hooks";
import { products } from "@/types/productsTypes";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductEdit = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [editedProduct, setEditedProduct] = useState<products>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    try {
      dispatch(addProduct(editedProduct));
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 10 }}>
      <Typography variant="h5" gutterBottom color={"black"}>
        Add Product
      </Typography>
      <form>
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={editedProduct?.name || ""}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          margin="normal"
          name="description"
          value={editedProduct?.description || ""}
          onChange={handleChange}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          name="price"
          value={editedProduct?.price || ""}
          onChange={handleChange}
        />
        <TextField
          label="quantity"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          name="quantity"
          value={editedProduct?.quantity || ""}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleAddProduct}>
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default ProductEdit;
