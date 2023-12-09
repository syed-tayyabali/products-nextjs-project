import { products } from "@/types/productsTypes";
import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductById } from "./actions";

export type state = {
  products: products[];
  loading: boolean;
  product: products | null;
  cart: products[];
};

const initialState: state = {
  products: [],
  loading: false,
  product: null,
  cart: [],
};

const productsSlice = createSlice({
  name: "fortniteShop",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExist = state.cart.some((item) => item._id === payload._id);
      if (!isExist) {
        state.cart.push(payload);
      }
    },
    handleRemoveFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item._id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state: any, { payload }) => {
        state.products = payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state: any) => {
        state.loading = true;
      });

    builder
      .addCase(getProductById.pending, (state: any) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state: any, { payload }) => {
        state.product = payload;
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state: any) => {
        state.loading = true;
      });
  },
});

export const { addToCart, handleRemoveFromCart } = productsSlice.actions;
export default productsSlice.reducer;
