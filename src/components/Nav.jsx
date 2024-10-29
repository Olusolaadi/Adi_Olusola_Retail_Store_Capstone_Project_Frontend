import React from "react";
// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="fbg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-4xl font-bold">Store-Name
        </Link>

        { /* Navigation Links */}
        <div className="space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800 text-1xl font-bold">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-800 text-1xl font-bold">Products</Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-800 text-1xl font-bold  ">Cart</Link>
            <Link to="/signup" className="text-gray-600 hover:text-gray-800 text-1xl font-bold">Sign Up</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-800 text-1xl font-bold">Log In</Link>
        </div>
      </div>

    </nav>
  );
}
export default Nav;
