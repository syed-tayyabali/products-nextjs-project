import { products } from "@/types/productsTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:4000/products");
      const respData = await response.json();
      return respData;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: number) => {
    try {
      const response = await fetch(`http://localhost:4000/products/${id}`);
      const respData = await response.json();
      return respData;
    } catch (e) {
      console.log(e);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data: products | undefined) => {
    try {
      const response = await fetch(`http://localhost:4000/products`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const respData = await response.json();
      return respData;
    } catch (e) {
      console.log(e);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data: products | undefined) => {
    try {
      const response = await fetch(`http://localhost:4000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      });
      const respData = await response.json();
      return respData;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/addProduct",
  async (id: number | undefined | null) => {
    try {
      const response = await fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",
      });
      const respData = await response.json();
      return respData;
    } catch (e) {
      console.log(e);
    }
  }
);
