import Axios from "axios";
import Cookie from "js-cookie";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
} from "../constants/userConstants";

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { headers } = await Axios.post("/api/users/login", {
      email,
      password,
    });
    const { username, name, isadmin, token } = headers;

    const data = { username, name, isadmin, token };
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    //cookie: if user close the web app, the data of the user will be savved in the cookie.
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("/api/users/register", {
      name,
      email,
      password,
    });

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
};
