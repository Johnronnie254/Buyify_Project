import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./contactus";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <h1>Buyify</h1>
        <ul>
          <li>
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </>
  );
}

export default NavBar;
