import { useState } from "react";
import NavBar from "./navbar";
import Searchproduct from "./Searchproduct";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import "./App.css";
function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Searchproduct />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
