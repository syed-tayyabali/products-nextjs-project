"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ProductListing from "./components/muilisting/page";
import styles from "./page.module.css";
import { useEffect } from "react";
import { getAllProducts } from "@/features/products/actions";

export default function Home() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <main className={styles.main}>
      <ProductListing products={products} />
    </main>
  );
}
