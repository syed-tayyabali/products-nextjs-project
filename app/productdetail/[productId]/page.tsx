"use client";
import React, { useEffect } from "react";
import { Container, Paper, Typography, Button } from "@mui/material";
import { getProductById } from "@/features/products/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

type Props = {
  params: {
    productId: number;
  };
};

const ProductDetail = ({ params }: Props) => {
  const { productId } = params;
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    if (productId) dispatch(getProductById(productId));
  }, [productId]);

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
        <Button
          variant="contained"
          color="primary"
          //   onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>
      </Paper>
    </Container>
  );
};

export default ProductDetail;
