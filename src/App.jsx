import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import OrderConfermation from "./pages/OrderConfermation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 9font-sans  ">
          <Navbar />

          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
