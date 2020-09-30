import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../actions/ProductActions";

const HomeScreen = (props) => {
  // const [products, setProducts] = useState([]);

  /*
  A hook to access the redux store's state. (redux new feature over connect() function )
  This hook takes a selector function as an argument. The selector is called with the store state.
  this like mapStateToProps fn which let you extact a state from store.
  */
  const productList = useSelector((state) => state.productList);

  // destructing the porductList object.
  const { products, loading, error } = productList;

  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatching action creator (listProducts) to get list of products.
    dispatch(listProducts());
  }, []);

  if (!products) {
    if (loading) {
      return <div>Loading...</div>;
    }
    return <div>{error}</div>;
  }

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
