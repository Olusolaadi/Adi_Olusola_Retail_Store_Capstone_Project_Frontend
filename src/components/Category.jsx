import { Link } from "react-router-dom";

const Category = ({ category }) => {
	return (
		<div className='relative overflow-hidden h-96 w-full rounded-lg group'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					<div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50 z-10' />
					<img
						src={category.imageUrl}
						alt={category.title}
						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
						loading='lazy'
					/>
					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
						<h3 className='text-white text-2xl font-bold mb-2'>{category.title}</h3>
						<p className='text-gray-200 text-sm'>Explore {category.title}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Category;


/*import React from 'react'
import { Link } from 'react-router-dom'

function Category({ category }) {
  return (
    <div >Categories
        <h3 className="text-xl font-semibold">{category}</h3>
        <Link to="/category/men" className="mr-4">Men’s Clothing</Link>
        <Link to="/category/women" className="mr-4">Women’s Clothing</Link>
        <Link to="/category/children">Children’s Clothing</Link>
    </div>
  )
}

export default Category;
*/