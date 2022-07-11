import React, { useState } from "react";
import products from "./data";
import Products from "./Products";

export default function App() {
  const [items, setItems] = useState(products);

  return (
    <div>
      <header>
        <div className="background-filter"></div>
        <nav>
          <a href="#" className="logo">
            Soseki
          </a>
          <ul className="nav">
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul className="utilities">
            <li>
              <a href="#">magnify</a>
              <a href="#">acount</a>
              <a href="#">cart</a>
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2 className="featured">Featured Products</h2>
        <Products items={items}/>
      </main>
    </div>
  );
}