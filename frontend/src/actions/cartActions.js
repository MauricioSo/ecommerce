import Axios from "axios";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_QUANTITY,
  CART_REMOVE_QUANTITY
} from "../constants/cartConstants";

const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(
      "http://localhost:5000/api/products/" + id
    );
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity
      }
    });
   
    const {
      cart: { cartItems }
    } = getState();

    
    console.log(cartItems);
  } catch (error) {
    console.log(error);
  }
};
const removeFromCart = id => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });

  const {
    cart: { cartItems }
  } = getState();
};

export { addToCart, removeFromCart };
