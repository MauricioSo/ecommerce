import React from "react";
import { useEffect } from "react";
import Hero from "../components/hero";
import ProductsGrid from "../components/products";
import { fetchProducts } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const productsFetched = useSelector(state => state.productsData);
  const productFetched = useSelector(state => state.productData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Hero />
      <ProductsGrid />
    </>
  );
};

export default Home;
