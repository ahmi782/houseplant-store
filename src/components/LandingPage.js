import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-page"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1587300003388-59208cc962cb")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>🌿 GreenVibe Plant Store</h1>
      <p>
        Your one-stop shop for beautiful, fresh, and indoor air-purifying
        houseplants!
      </p>
      <button
        onClick={() => navigate("/products")}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          marginTop: "20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default LandingPage;
