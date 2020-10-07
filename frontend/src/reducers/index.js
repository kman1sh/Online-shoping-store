import { combineReducers } from "redux";
import { productListReducer, productDetailsReducer } from "./productReducers";
import { cartReducer } from "./cartReducers";
import { userSigninReducer, userRegisterReducer } from "./userReducers";
import {
  orderCreateReducer,
  myOrderListReducer,
  orderDetailsReducer,
} from "./orderReducers";

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  myOrderList: myOrderListReducer,
  orderDetails: orderDetailsReducer,
});
