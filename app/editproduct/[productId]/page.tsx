"use client";
import {
  deleteProduct,
  getProductById,
  updateProduct,
} from "@/features/products/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { products } from "@/types/productsTypes";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: {
    productId: number;
  };
};

const ProductEdit = ({ params }: Props) => {
  const { productId } = params;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { product } = useAppSelector((state) => state.productsState);
  const [editedProduct, setEditedProduct] = useState<products>();

  useEffect(() => {
    if (productId) dispatch(getProductById(productId));
  }, [productId]);

  useEffect(() => {
    if (product) {
      setEditedProduct({
        ...product,
      });
    }
  }, [product]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    try {
      dispatch(updateProduct(editedProduct));
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = () => {
    try {
      dispatch(deleteProduct(product?._id));
      router.back();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 10 }}>
      <Typography variant="h5" gutterBottom color={"black"}>
        Edit Product
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{ margin: "1px" }}
        >
          Update Product
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ margin: "1px" }}
        >
          Delete Product
        </Button>
      </form>
    </Container>
  );
};

export default ProductEdit;
