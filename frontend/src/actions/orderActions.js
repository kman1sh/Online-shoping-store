import Axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    // userInfo to fetch token
    const {
      userSignin: { userInfo },
    } = getState();

    //api call with token
    const { data } = await Axios.post("/api/order", order, {
      headers: {
        Authorization: " Bearer " + userInfo.token,
      },
    });

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
  }
};

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDER_LIST_REQUEST });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/orders/" + userInfo.username, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: MY_ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MY_ORDER_LIST_FAIL, payload: error.message });
  }
};

// export const listOrders = () => async (dispatch, getState) => {

//   try {
//     dispatch({ type: ORDER_LIST_REQUEST });
//     const { userSignin: { userInfo } } = getState();
//     const { data } = await Axios.get("/api/orders", {
//       headers:
//         { Authorization: 'Bearer ' + userInfo.token }
//     });
//     dispatch({ type: ORDER_LIST_SUCCESS, payload: data })
//   } catch (error) {
//     dispatch({ type: ORDER_LIST_FAIL, payload: error.message });
//   }
// }

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/order/" + orderId, {
      headers: { Authorization: "Bearer " + userInfo.token },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};

// export const payOrder = (order, paymentResult) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: ORDER_PAY_REQUEST, payload: paymentResult });
//     const { userSignin: { userInfo } } = getState();
//     const { data } = await Axios.put("/api/orders/" + order._id + "/pay", paymentResult, {
//       headers:
//         { Authorization: 'Bearer ' + userInfo.token }
//     });
//     dispatch({ type: ORDER_PAY_SUCCESS, payload: data })
//   } catch (error) {
//     dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
//   }
// }

// export const deleteOrder = (orderId) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: ORDER_DELETE_REQUEST, payload: orderId });
//     const { userSignin: { userInfo } } = getState();
//     const { data } = await Axios.delete("/api/orders/" + orderId, {
//       headers:
//         { Authorization: 'Bearer ' + userInfo.token }
//     });
//     dispatch({ type: ORDER_DELETE_SUCCESS, payload: data })
//   } catch (error) {
//     dispatch({ type: ORDER_DELETE_FAIL, payload: error.message });
//   }
// }
