import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'

export default function ProductList({ gender }) {
  const { addToCart } = useCart()
  const list = products.filter(p => p.gender === gender)
  return (
    <div>
      <h2 className="page-title">{gender === 'men' ? 'Men' : 'Women'} Collection</h2>
      <div className="grid-list">
        {list.map(p => <ProductCard key={p.id} product={p} onAdd={() => addToCart(p, 1)} />)}
      </div>
    </div>
  )
}
