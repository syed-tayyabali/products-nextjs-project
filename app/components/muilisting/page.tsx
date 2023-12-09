"use client";
import { products } from "@/types/productsTypes";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  products: products[];
};

const ProductListing = ({ products }: Props) => {
  const router = useRouter();
  return (
    <Grid container spacing={3}>
      {products?.map((product: any) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              minHeight: "200px",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1" color="textSecondary">
              {product.description}
            </Typography>
            <Typography variant="h6" color="primary">
              ${product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => router.push(`/productdetail/${product._id}`)}
              sx={{ margin: "1px" }}
            >
              View Product
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={(e) => router.push(`/editproduct/${product._id}`)}
              sx={{ margin: "1px" }}
            >
              Edit Product
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListing;
