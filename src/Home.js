import React from "react";
import ProductList from "./ProductList";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Heading */}
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Welcome to Our Store
      </h1>

      {/* Product List */}
      <ProductList />
    </div>
  );
};

export default Home;

