import React from "react";

function Products(product) {
  return (
    <>
      <div className="card">
        <h1>Product name: {product.title} </h1>
        <p>Description: {product.description}</p>
        <span>Price: {product.price}</span>
        <h3>Discount Percent: {product.discountPercentage}</h3>
        <h3>Rating: {product.rating}</h3>
        <h3>Stock: {product.stock}</h3>
        <h3>Brand: {product.brand}</h3>
        <h3>Category: {product.category}</h3>
      </div>
    </>
  );
}
export default Products;
