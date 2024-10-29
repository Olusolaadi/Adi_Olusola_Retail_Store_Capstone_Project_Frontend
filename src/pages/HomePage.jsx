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





/*
import { useEffect } from "react";
import category from "../components/Category";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { products, isLoading } 

  useEffect(() => {;
  }, []);



	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<Category category={category} key={category.name} />
					))}
				</div>
			</div>
		</div>
	);
};
export default HomePage;
*/

