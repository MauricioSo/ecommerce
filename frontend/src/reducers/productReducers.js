import {
  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_SUCCESS,
  PRODUCTS_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_SUCCESS
} from "../constants/productsConstants.js";

function productsFetchReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCTS_FETCH_REQUEST:
      return { loading: true };
    case PRODUCTS_FETCH_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCTS_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productFetchReducer(state = {}, action) {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { loading: true };
    case PRODUCT_FETCH_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { productsFetchReducer, productFetchReducer };
