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
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <form action="" class="">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control form-control-lg"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="enter your product"
          />
          <button type="submit" class="input-group-text btn-success">
            <i class="bi bi-search me-2"></i> Search
          </button>
        </div>
      </form>

      <div className="row">
        {products
          .filter((product) => {
            return product.title.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })
          .slice(0, visible)
          .map((product) => (
            <div key={product.id} className="col-md-3">
              <Products {...product} />
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary mx-2" onClick={LoadMoreData}>
          Load More
        </button>
        {visible > 4 && (
          <button className="btn btn-secondary" onClick={LoadLessData}>
            Load Less
          </button>
        )}
      </div>
    </>
  );
}

export default Searchproduct;
