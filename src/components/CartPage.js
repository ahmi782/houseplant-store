import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../slices/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your Cart is Empty 🛒</h2>
        <button onClick={() => navigate("/products")} style={buttonStyle}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>
      <p>
        Total Items: <strong>{totalItems}</strong>
      </p>
      <p>
        Total Cost: <strong>${totalCost}</strong>
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {cartItems.map((item) => (
          <div key={item.id} style={itemBoxStyle}>
            <img src={item.img} alt={item.name} style={{ width: "80px" }} />
            <div style={{ flex: 1, marginLeft: "20px" }}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => dispatch(increaseQty(item.id))}>
                  ➕
                </button>
                <button onClick={() => dispatch(decreaseQty(item.id))}>
                  ➖
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{ backgroundColor: "crimson", color: "white" }}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => alert("Checkout Coming Soon!")}
          style={buttonStyle}
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => navigate("/products")}
          style={{ ...buttonStyle, marginLeft: "10px" }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

const itemBoxStyle = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "10px",
  backgroundColor: "#f9f9f9",
};

const buttonStyle = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#2e8b57",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default CartPage;
