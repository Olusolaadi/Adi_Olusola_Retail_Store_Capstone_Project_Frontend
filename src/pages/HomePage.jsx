import React from "react";
import Home from "../components/Home";
import ProductList from "../components/ProductList";

const HomePage = () => {
  return (
    <div>
      <Home />
	  <h1 className="text-4xl font-bold text-center my-6">Featured Products</h1>
      <ProductList category="Men's Clothing" />
      <ProductList category="Women’s Clothing" />
      <ProductList category="Children’s Clothing" />
    </div>
  );
};

export default HomePage;