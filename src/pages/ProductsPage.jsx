import React from 'react'
import { Link } from 'react-router-dom'

function ProductsPage() {
  return (
    <div>Categories

    
        <Link to="/category/men" className="mr-4">Men’s Clothing</Link>
        <Link to="/category/women" className="mr-4">Women’s Clothing</Link>
        <Link to="/category/children">Children’s Clothing</Link>
    </div>

  )
}

export default ProductsPage