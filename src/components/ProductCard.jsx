import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-thumb">
        <img src={product.image} alt={product.title} />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-price">₹{product.price}</p>
        <div className="card-actions">
          <Link to={`/product/${product.id}`} className="btn">View</Link>
          <button className="btn outline" onClick={() => onAdd(product)}>Add</button>
        </div>
      </div>
    </div>
  )
}
