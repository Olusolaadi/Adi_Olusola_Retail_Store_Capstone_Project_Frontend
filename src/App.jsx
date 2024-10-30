import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Joke from "./components/Joke";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-gray-400 h-screen text-left text-white overflow-auto">
      {/* Background gradient */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-screen">
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Joke />
        </div>
      </div>
    </div>
  );
}

export default App;
