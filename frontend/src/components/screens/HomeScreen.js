import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const HomeScreen = (props) => {
  const renderProducts = data.products.map((product) => {
    return (
      <li key={product._id}>
        <div className="product">
          <img className="product-image" src={product.image} alt="product" />
          <div className="product-name">
            {/* <a href="product.html">{product.name}</a> */}
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">Rs.{product.price}</div>
          <div className="product-rating">
            {product.rating} Stars ({product.numReviews} Reviews)
          </div>
        </div>
      </li>
    );
  });

  return <ul className="products">{renderProducts}</ul>;
};

export default HomeScreen;
