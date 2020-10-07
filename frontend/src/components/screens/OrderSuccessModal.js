import React from "react";
import ReactDOM, { render } from "react-dom";

const OrderSuccessModal = ({ order, onClose }) => {
  const renderItems = () => {
    return order.orderItems.map((item) => (
      <p key={item.productId}>
        {item.qty} X {item.name}
      </p>
    ));
  };

  return ReactDOM.createPortal(
    <div className="ui dimmer modals page visible active">
      <div className="ui standard modal visible active">
        <div className="header">Order Sucessfull</div>
        <div className="scrolling content">
          <div
            className="ui header"
            style={{
              backgroundColor: "white",
              fontSize: "16px",
              marginBottom: "35px",
            }}
          >
            Thank You, your order has been successful. Please review order
            detail below or in profile section.
          </div>
          <div className="order-details" style={{ fontSize: "14px" }}>
            <table>
              <tbody>
                <tr>
                  <td className="object-key">ORDER ID</td>
                  <td className="object-value">{order.orderId}</td>
                </tr>
                <tr>
                  <td className="object-key">ORDER DATE</td>
                  <td className="object-value">{order.date}</td>
                </tr>
                <tr>
                  <td className="object-key">ITEMS</td>
                  <td className="object-value">{renderItems()}</td>
                </tr>
                <tr>
                  <td className="object-key">PAYMENT TYPE</td>
                  <td className="object-value">
                    {order.payment.paymentMethod}
                  </td>
                </tr>
                <tr>
                  <td className="object-key">ADDRESS</td>
                  <td className="object-value">
                    <p>{order.shipping.address}</p>
                    <p>{order.shipping.city}</p>
                    <p>{order.shipping.postalCode}</p>
                    <p>{order.shipping.country}</p>
                  </td>
                </tr>{" "}
                <tr>
                  <td className="object-key">TOTAL</td>
                  <td className="object-value">{order.totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="actions">
          <button className="button secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default OrderSuccessModal;
