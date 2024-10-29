import React from "react";
import Category from "../components/Category";

const CategoryPage = ({ props }) => {
  const { categoryName } = props.params;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-8">{categoryName}</h2>
      <ProductList category={categoryName} />
      {/* Additional category details or products can be added here */}
    </div>
  );
};

export default CategoryPage;


