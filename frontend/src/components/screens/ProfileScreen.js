import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listMyOrders } from "../../actions/orderActions";
import { useSelector, useDispatch } from "react-redux";

const ProfileScreen = (props) => {
  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userSignin);
  useEffect(() => {
    // if (userInfo) {
    //   console.log(userInfo);
    // }
    dispatch(listMyOrders());
    return () => {};
  }, [userInfo]);

  return (
    <div className="profile-orders content-margined">
      {loadingOrders ? (
        <div>Loading...</div>
      ) : errorOrders ? (
        <div>{errorOrders} </div>
      ) : (
        <table className="profile-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.date}</td>
                <td>{order.total}</td>
                <td>{null}</td>
                <td>
                  <Link to={"/order/" + order.orderId}>DETAILS</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProfileScreen;
