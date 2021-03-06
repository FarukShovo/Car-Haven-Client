import React from "react";
import Product from "../Product/Product";
import { useEffect, useState } from "react";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://infinite-eyrie-26334.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)));
  });
  return (
    <div style={{ marginTop: 20 }}>
      <h2
        style={{ color: "var(--green)", fontSize: "5rem" }}
        className="text-center "
      >
        Products
      </h2>
      <div className="row row-cols-md-3 g-3">
        {products.map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
