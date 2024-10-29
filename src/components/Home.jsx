import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <p> 
            Welcome to our store. Feel free to browse all categories of products. 
        </p>
        <Link to="/category" className="mr-4">Categories</Link>
    </div>
  )
}

export default Home;