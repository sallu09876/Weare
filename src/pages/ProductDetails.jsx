import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = products.find(p => String(p.id) === String(id))
  if (!product) return <div>Product not found. <Link to="/">Go home</Link></div>
  return (
    <div className="details">
      <div className="details-thumb">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="details-info">
        <h2>{product.title}</h2>
        <p className="price">₹{product.price}</p>
        <p className="desc">{product.description}</p>
        <div className="sizes">
          <strong>Sizes:</strong> {product.sizes.join(', ')}
        </div>
        <div className="actions">
          <button className="btn" onClick={() => addToCart(product, 1)}>Add to cart</button>
          <Link to={product.gender === 'men' ? '/men' : '/women'} className="btn outline">Back</Link>
        </div>
      </div>
    </div>
  )
}
