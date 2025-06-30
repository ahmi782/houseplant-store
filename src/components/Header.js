import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const location = useLocation();

  return (
    <header
      style={{
        backgroundColor: "#2e8b57",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>GreenVibe</h2>
      <nav>
        <Link
          to="/products"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: location.pathname === "/products" ? "#FFD700" : "white",
            fontWeight: "bold",
          }}
        >
          Products
        </Link>
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: location.pathname === "/cart" ? "#FFD700" : "white",
            fontWeight: "bold",
          }}
        >
          🛒 Cart ({totalCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
