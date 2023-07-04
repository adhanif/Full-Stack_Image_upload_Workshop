import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [products]);

  function handleClick(e, productID) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/products/${productID}`)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="products">
        <h1>All Products</h1>
        {products &&
          products.map((product) => {
            return (
              <div key={product._id} className="products">
                <h1>
                  {product.name}{" "}
                  <span className="title_price">({product.price}euros)</span>{" "}
                </h1>
                <p>Owner: {product.owner.name}</p>
                <p>email: {product.owner.email}</p>
                <img src={product.image.url} alt="" />
                <button
                  onClick={(e) =>
                    handleClick(e, product._id, product.image.publicId)
                  }
                >
                  Delete Product
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
