import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_SUCCESS
} from "../constants/productsConstants.js";

import axios from "axios";

const fetchProducts = () => async dispatch => {
  dispatch({ type: PRODUCTS_FETCH_REQUEST });
  try {
    const { data } = await axios.get("http://localhost:5000/api/products");
    console.log(data);

    dispatch({ type: PRODUCTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCTS_FETCH_FAIL, payload: error.message });
  }
};

const fetchProduct = id => async dispatch => {
  dispatch({ type: PRODUCT_FETCH_REQUEST, payload: id });
  console.log(id);
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/products/" + id
    );
    dispatch({ type: PRODUCT_FETCH_SUCCESS, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: PRODUCT_FETCH_FAIL, payload: error.message });
  }
};

export { fetchProducts, fetchProduct };
