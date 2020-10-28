import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
  productsFetchReducer,
  productFetchReducer
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const initialState = {
  userSignin: {},
  userRegister: {},
  productsData: {},
  productData: {},
  cart: { cartItems: [] }
};

const reducer = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
  productsData: productsFetchReducer,
  productData: productFetchReducer,
  cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
