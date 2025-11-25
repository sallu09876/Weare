# Clothing React Ecom (Starter)

Quick starter e-commerce project (React + Vite) with nested routes for `/men` and `/women`, product details, cart using Context + localStorage, and plain CSS styling.

## Features
- Nested routing: `/men` and `/women` list pages.
- Product details: `/product/:id`
- Add to cart from listing and details.
- Cart implemented with React Context + useReducer.
- Cart persisted to `localStorage` (key: `clothing_cart_v1`).
- Plain CSS (modern minimal styles).

## Run locally
1. Install dependencies
```
npm install
```
2. Start dev server
```
npm run dev
```

Project structure (important files):
- `src/data/products.js` - sample product data
- `src/context/CartContext.jsx` - cart logic (localStorage)
- `src/pages` - Home, ProductList, ProductDetails, CartPage
- `src/components/ProductCard.jsx` - product preview

You can customize products in `src/data/products.js` and images.

---
Generated automatically by ChatGPT.
