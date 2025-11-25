import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import { FiShoppingCart } from "react-icons/fi";
import './styles/Home.css'

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1 className="brand">
          <Link to="/">Wearé</Link>
        </h1>

        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>

          <Link to="/cart" className="cart-icon" id='cart-logo'>
            <FiShoppingCart />
          </Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men/*" element={<ProductList gender="men" />} />
          <Route path="/women/*" element={<ProductList gender="women" />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  )
}
