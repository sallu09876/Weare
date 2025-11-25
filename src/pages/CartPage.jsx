import React from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { items, increment, decrement, remove, clear, total } = useCart()
  return (
    <div>
      <h2 className="page-title">Your Cart</h2>
      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          <ul className="cart-list">
            {items.map(i => (
              <li key={i.id} className="cart-item">
                <img src={i.image} alt={i.title} />
                <div className="cart-meta">
                  <h4>{i.title}</h4>
                  <p>₹{i.price} x {i.qty} = ₹{i.price * i.qty}</p>
                  <div className="cart-controls">
                    <button onClick={() => decrement(i.id)}>-</button>
                    <button onClick={() => increment(i.id)}>+</button>
                    <button onClick={() => remove(i.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: <strong>₹{total}</strong></p>
            <div className="cart-actions">
              <button onClick={() => clear()} className="btn outline">Clear</button>
              <button className="btn">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
