
import React from "react";
import { useCart } from "react-use-cart";

//need to add cardColor generator


  return (
    <div
      className="card m-2 p-3 d-flex flex-column"
      style={{ height: "100%", backgroundColor: cardColor }}
    >
      <div>
        <h1>Product name: {product.title} </h1>
        <p>Description: {product.description}</p>
        <span>Price: {product.price}</span>
        <h3>Discount Percent: {product.discountPercentage}</h3>
        <h3>Rating: {product.rating}</h3>
        <h3>Stock: {product.stock}</h3>
        <h3>Brand: {product.brand}</h3>
        <h3>Category: {product.category}</h3>
      </div>
      <div className="mt-auto">
        <button
          className="btn btn-primary"
          onClick={() => {
            addItem(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Products;
