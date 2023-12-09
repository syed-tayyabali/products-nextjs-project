"use client";
import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { handleRemoveFromCart } from "@/features/products/productsSlice";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { cart: cartItems } = useAppSelector(
    (state) => (state.productsState = state.productsState)
  );

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item: any) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color={"black"}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography color={"black"}>Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2} color={"black"}>
          {cartItems.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="subtitle1">
                    Price: ${item.price}
                  </Typography>
                  <Typography variant="subtitle1">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="Remove from cart"
                    onClick={() =>
                      dispatch(handleRemoveFromCart({ id: item._id }))
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {cartItems.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Typography color={"black"} variant="h6" gutterBottom>
            Total: ${calculateTotal()}
          </Typography>
          <Button variant="contained" color="primary">
            Checkout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
