import React, { useState, useEffect } from "react";
import Products from "./products";

function Searchproduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <input type="text" placeholder="enter your product" />
      <div>
        {products.map((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
export default Searchproduct;
