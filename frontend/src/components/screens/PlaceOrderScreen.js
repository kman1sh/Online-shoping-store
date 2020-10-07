import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../CheckoutSteps";
import { createOrder } from "../../actions/orderActions";
import { clearCart } from "../../actions/cartAction";
import OrderSuccessModal from "./OrderSuccessModal";

// detailed info of cart products, address and payment before placing the order.
function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart); //reducer that stores address and paymentMethod for the order
  const orderCreate = useSelector((state) => state.orderCreate);
  const { userInfo } = useSelector((state) => state.userSignin);
  const { loading, success, error, order } = orderCreate;
  const { cartItems, shipping, payment } = cart;

  // if any of below data is not filled then redirecting  to that particular screen.
  if (!userInfo) {
    props.history.push("/signin");
  } else if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }

  // generating order related statistics.
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = (itemsPrice - itemsPrice / 1.15).toFixed(2);
  const shippingPrice = itemsPrice > 499 ? 0 : 40;
  const totalPrice = itemsPrice + shippingPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(
      createOrder({
        orderItems: cartItems,
        username: userInfo.username,
        shipping,
        payment,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };
  // useEffect(() => {
  //   if (success) {
  //     //create cart.
  //     dispatch(clearCart());
  //     // show success model screen with back to myOrderList.
  //     props.history.push("/order/" + order.orderId);
  //   }
  // }, [success]);

  return (
    <div>
      {success && (
        <OrderSuccessModal
          onClose={() => props.history.push("/")}
          order={order}
        />
      )}
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3 className="remove-semantic-css">Shipping</h3>
            <div>
              {cart.shipping.address}, {cart.shipping.city},
              {cart.shipping.postalCode}, {cart.shipping.country},
            </div>
          </div>
          <div>
            <h3 className="remove-semantic-css">Payment</h3>
            <div>Payment Method: {cart.payment.paymentMethod}</div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3 className="remove-semantic-css">Shopping Cart</h3>
                <div>Price</div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                cartItems.map((item) => (
                  <li key={item.productId}>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>{item.name}</Link>
                      </div>
                      <div>Qty: {item.qty}</div>
                    </div>
                    <div className="cart-price">Rs.{item.price}</div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <button
                className="button primary full-width"
                onClick={placeOrderHandler}
              >
                Place Order
              </button>
            </li>
            <li>
              <h3 className="remove-semantic-css">Order Summary</h3>
            </li>
            <li>
              <div>Items(Incl. Tax)</div>
              <div>Rs.{itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>Rs.{shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>Rs.{taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>Rs.{totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;
