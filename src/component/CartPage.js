import React from 'react';
// import ProductCard from './ProductCard';
import Cart from './cart';
// import Cart from '../component/Cart';

const CartPage = ({ cartItems, removeFromCart }) => {
  return <Cart cartItems={cartItems} removeFromCart={removeFromCart} />;
};

export default CartPage;