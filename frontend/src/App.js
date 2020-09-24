import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">amazona</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button onClick={closeMenu} className="sidebar-close-button">
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="images/s1.webp"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Cotton Fit Shirt</a>
                </div>
                <div className="product-brand">Lacoste</div>
                <div className="product-price">Rs. 799</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All right is reserved</footer>
    </div>
  );
}

export default App;
