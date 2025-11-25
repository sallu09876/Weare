import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const CART_KEY = 'clothing_cart_v1'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const existing = state.find(i => i.id === action.item.id)
      if (existing) {
        return state.map(i => i.id === action.item.id ? { ...i, qty: i.qty + action.qty } : i)
      }
      return [...state, { ...action.item, qty: action.qty }]
    case 'INCREMENT':
      return state.map(i => i.id === action.id ? { ...i, qty: i.qty + 1 } : i)
    case 'DECREMENT':
      return state.map(i => i.id === action.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i)
    case 'REMOVE':
      return state.filter(i => i.id !== action.id)
    case 'CLEAR':
      return []
    case 'SET':
      return action.items || []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [])

  useEffect(() => {
    const raw = localStorage.getItem(CART_KEY)
    if (raw) {
      try {
        dispatch({ type: 'SET', items: JSON.parse(raw) })
      } catch (e) { }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(state))
  }, [state])

  const addToCart = (item, qty = 1) => dispatch({ type: 'ADD', item, qty })
  const increment = id => dispatch({ type: 'INCREMENT', id })
  const decrement = id => dispatch({ type: 'DECREMENT', id })
  const remove = id => dispatch({ type: 'REMOVE', id })
  const clear = () => dispatch({ type: 'CLEAR' })

  const total = state.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items: state, addToCart, increment, decrement, remove, clear, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
