import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING,
  CART_SAVE_PAYMENT,
  CART_CLEAR_ITEM,
} from "../constants/cartConstants";
import Cookie from "js-cookie";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/product/" + productId);
    // for payload we are basically destructuring {data} and adding qty selected by user to it.
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        productId: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    // after dispatching the action saving the resultant state to cookie. using js-cookie library.
    const { cartItems } = getState().cart;
    // key value pair for cookie. then later retreiving back again in store's initialState object.
    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (error) {}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });

  const { cartItems } = getState().cart;
  // key value pair for cookie
  Cookie.set("cartItems", JSON.stringify(cartItems));
};

//saving shipping address entered at the time of checkout.
export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING, payload: data });
};

//saving payment option selected at the time of checkout.
export const savePayment = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT, payload: data });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: CART_CLEAR_ITEM });
};
