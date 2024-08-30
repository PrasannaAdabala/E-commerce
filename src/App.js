
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import "./styles.css"
import CartPage from './component/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.length} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
