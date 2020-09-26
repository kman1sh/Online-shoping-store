import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  const renderProducts = products.map((product) => {
    return (
      <li key={product.id}>
        <div className="product">
          <img className="product-image" src={product.image} alt="product" />
          <div className="product-name">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
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
