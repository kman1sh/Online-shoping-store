import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartAction";
import { Link } from "react-router-dom";
import OrderSuccessModal from "./OrderSuccessModal";

const CartScreen = (props) => {
  //goal what product and in what quantity
  const productId = props.match.params.id;
  // search is a key on location object that store query string of url:
  // '?qty=3': split the string at '=', take right value: index=1 and convert in number. otherwise take default qty as 1.
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };

  const renderCartItems = () => {
    return cartItems.map((item) => {
      return (
        <li key={item.productId}>
          {/* divs: cart-image, cart-name, cart-price */}
          <div className="cart-image">
            <img src={item.image} alt="product" />
          </div>
          <div className="cart-name">
            {/* divs: item name, Qty + Delete button */}
            <div>
              <Link to={`/product/${item.productId}`}>{item.name}</Link>
            </div>
            <div>
              Qty:
              <select
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item.productId, e.target.value))
                }
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="button"
                onClick={() => removeFromCartHandler(item.productId)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="cart-price">Rs.{item.price}</div>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="cart">
        {/* cart-list, cart-action */}
        <div className="cart-list">
          <ul className="cart-list-container">
            {/* list item: 1st row: Shopping cart + price row. 
    if no cart item then no more <li> tag. else new <li> for each list item. */}
            <li>
              <h3 className="remove-semantic-css">Shopping Cart</h3>
              <div>Price</div>
            </li>
            {cartItems.length === 0 ? (
              <div>Cart is empty</div>
            ) : (
              renderCartItems()
            )}
          </ul>
        </div>

        <div className="cart-action">
          <h3 className="remove-semantic-css">
            {/* Subtotal ( 5 items) : Rs. 3245. Note: c.qty multiply by 1 is litte hack to convert c.qty into from String to Number */}
            Subtotal ( {cartItems.reduce((a, c) => a + c.qty * 1, 0)} items) :
            Rs. {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h3>
          <button
            onClick={checkoutHandler}
            className="button primary full-width"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
