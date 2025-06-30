import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Low Light",
    img: "https://via.placeholder.com/100?text=Snake",
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 12,
    category: "Medicinal",
    img: "https://via.placeholder.com/100?text=Aloe",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    category: "Flowering",
    img: "https://via.placeholder.com/100?text=Lily",
  },
  {
    id: 4,
    name: "Pothos",
    price: 10,
    category: "Low Light",
    img: "https://via.placeholder.com/100?text=Pothos",
  },
  {
    id: 5,
    name: "Lavender",
    price: 20,
    category: "Medicinal",
    img: "https://via.placeholder.com/100?text=Lavender",
  },
  {
    id: 6,
    name: "Orchid",
    price: 25,
    category: "Flowering",
    img: "https://via.placeholder.com/100?text=Orchid",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = (id) => cartItems.find((item) => item.id === id);

  const grouped = plants.reduce((acc, plant) => {
    if (!acc[plant.category]) acc[plant.category] = [];
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <h2>🪴 Our Plants</h2>
      {Object.keys(grouped).map((category) => (
        <div key={category} style={{ marginTop: "30px" }}>
          <h3>{category}</h3>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {grouped[category].map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "150px",
                  textAlign: "center",
                }}
              >
                <img
                  src={plant.img}
                  alt={plant.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  disabled={isInCart(plant.id)}
                  onClick={() => dispatch(addToCart(plant))}
                  style={{
                    backgroundColor: isInCart(plant.id) ? "#aaa" : "#28a745",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: isInCart(plant.id) ? "not-allowed" : "pointer",
                  }}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
