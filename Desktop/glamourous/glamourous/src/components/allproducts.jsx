import React from "react";

import bag from "../assets/cloth-bag.jpg.jpg";
import dress from "../assets/cloth-dress.jpg.jpg";
import hat from "../assets/cloth-hat.jpg.jpg";
import jacket from "../assets/cloth-jacket.jpg.jpg";
import pants from "../assets/cloth-pants.jpg.jpg";
import shoes from "../assets/cloth-shoes.jpg.jpg";
import sweater from "../assets/cloth-sweater.jpg.jpg";
import trousers from "../assets/card-trousers.jpg.png";

const products = [
  { id: 1, name: "Stylish Bag", price: "$49.99", image: bag },
  { id: 2, name: "Elegant Dress", price: "$79.99", image: dress },
  { id: 3, name: "Trendy Hat", price: "$19.99", image: hat },
  { id: 4, name: "Leather Jacket", price: "$129.99", image: jacket },
  { id: 5, name: "Casual Pants", price: "$39.99", image: pants },
  { id: 6, name: "Running Shoes", price: "$59.99", image: shoes },
  { id: 7, name: "Cozy Sweater", price: "$49.99", image: sweater },
  { id: 8, name: "Formal Trousers", price: "$69.99", image: trousers },
];
const AllProducts = () => {
  return (
    <div className="all-products-container">
      <h2 className="all-products-title">All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-media card-box">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <button aria-label="add" className="add-btn">+</button>
            </div>

            {/* name and price sit outside the white image card */}
            <div className="product-meta">
              <h3 className="product-name" title={product.name}>{product.name}</h3>
              <div className="product-prices">
                <span className="price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllProducts;