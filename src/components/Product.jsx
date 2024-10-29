// components/Product.jsx
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Product;

