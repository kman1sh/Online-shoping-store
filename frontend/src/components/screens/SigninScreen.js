import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../actions/userActions";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    // if userInfo is present and user tries to visit sign-in page, redirect user to homeScreen
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo]); // also run useEffect, when userInfo is changed.

  // dispatch signin action on form submit.
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        {/* form elements as list */}
        <ul className="form-container">
          <li>
            <h2 className="remove-semantic-css">Sign-In</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit" className="button primary">
              Signin
            </button>
          </li>
          <li>
            <label htmlFor="button">New to amazon?</label>

            <Link
              to={
                redirect === "/" ? "register" : "register?redirect=" + redirect
              }
              className="button"
            >
              Create New Account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SigninScreen;
