import React, { useState, useEffect } from "react";
import Products from "./products";

function Searchproduct() {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(4);
  const [search, setSearch] = useState("");
  const LoadMoreData = () => {
    setVisible((prevVisible) => prevVisible + 4);
  };

  const LoadLessData = () => {
    setVisible((prevVisible) => prevVisible - 4);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="enter your product"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {products
          .filter((product) => {
            return product.title.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })
          .slice(0, visible)
          .map((product) => (
            <Products key={product.id} {...product} />
          ))}
      </div>
      <button onClick={LoadMoreData}>Load More</button>
      <button onClick={LoadLessData}>Load Less</button>
    </>
  );
}
export default Searchproduct;
