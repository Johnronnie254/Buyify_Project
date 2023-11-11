import React, { useState, useEffect } from "react";
import Products from "./products";

function Searchproduct() {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(2);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <input type="text" placeholder="enter your product" />
      <div>
        {products.map.slice(
          0,
          visible
        )((product) => (
          <Products key={product.id} {...product} />
        ))}
      </div>
      <button>Load More</button>
    </>
  );
}
export default Searchproduct;
