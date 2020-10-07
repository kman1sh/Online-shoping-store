import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../../actions/ProductActions";

const ProductScreen = (props) => {
  const [qty, setQty] = useState(1); // to allow max. qty to show in "add to cart section" based on product qty in stock.

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleAddToCartButtonClick = () => {
    //history.push() is method redirect to another url
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  if (!product) {
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>{error}</div>;
  }

  //Array(N)==> give empty array of length N.
  // Array(N).keys() returns an "Array Iterator" object with the keys of an array.
  // Array.from(Array(10).keys()) gives array from [0...N-1]
  // short hand: [...Array(10).keys()]
  const renderQtyList = [...Array(product.countInStock).keys()].map((x) => (
    <option key={x + 1}>{x + 1}</option>
  ));

  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4 class="remove-semantic-css">{product.name}</h4>
            </li>
            <li style={{ color: "#023e8a" }}>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              <strong>Description:</strong>
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price:Rs. {product.price}</li>
            <li>
              Status: {product.countInStock > 0 ? "In Stock" : "Unavailable"}
            </li>
            <li>
              Qty:{" "}
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {renderQtyList}
              </select>
            </li>
            <li>
              {product.countInStock > 0 ? (
                <button
                  className="button primary"
                  onClick={handleAddToCartButtonClick}
                >
                  Add to Cart
                </button>
              ) : (
                <div>Out of Stock</div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
