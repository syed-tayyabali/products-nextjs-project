"use client";
import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, Button, TextField } from "@mui/material";
import { getProductById } from "@/features/products/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/features/products/productsSlice";
import { products } from "@/types/productsTypes";

type Props = {
  params: {
    productId: number;
  };
};

const ProductDetail = ({ params }: Props) => {
  const { productId } = params;
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.productsState);
  const [productQuantity, setProductQuantity] = useState<products>();

  useEffect(() => {
    if (productId) dispatch(getProductById(productId));
  }, [productId]);

  useEffect(() => {
    if (product) {
      setProductQuantity({
        ...product,
      });
    }
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductQuantity((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <Container
      maxWidth="md"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4">{product?.name}</Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          style={{ marginBottom: "20px" }}
        >
          {product?.description}
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          style={{ marginBottom: "20px" }}
        >
          {product?.price}
        </Typography>
        <TextField
          label="quantity"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          name="quantity"
          value={productQuantity?.quantity || ""}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(addToCart(productQuantity))}
        >
          Add to Cart
        </Button>
      </Paper>
    </Container>
  );
};

export default ProductDetail;
