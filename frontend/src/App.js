import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";

import ProductScreen from "./components/screens/ProductScreen";
import CartScreen from "./components/screens/CartScreen";
import SigninScreen from "./components/screens/SigninScreen";
import { useSelector } from "react-redux";
import RegisterScreen from "./components/screens/RegisterScreen";
import ShippingScreen from "./components/screens/ShippingScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import PlaceOrderScreen from "./components/screens/PlaceOrderScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import OrderScreen from "./components/screens/OrderScreen";

function App() {
  // conditionally changing header button: "Sign In" based on currently logged userInfo.
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazon</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile">
                Hi,{" "}
                {userInfo.name.charAt(0).toUpperCase() + userInfo.name.slice(1)}
              </Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h4 className="remove-semantic-css">Shopping Categories</h4>
          <button onClick={closeMenu} className="sidebar-close-button">
            x
          </button>
          <ul>
            <li>
              <Link to="/">Pants</Link>
            </li>
            <li>
              <Link to="/">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/register" exact component={RegisterScreen} />
            <Route path="/signin" exact component={SigninScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/product/:id" exact component={ProductScreen} />
            {/* "?" means "id" is optional, /cart will work even without id PathVariable. */}
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right is reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
