# Aura Commerce Backend (Node.js / Express)

A minimal Express API to support the existing frontend with products, categories, cart, wishlist, and basic auth stubs.

## Quick Start

```bash
# From the project root
cd server
copy .env.example .env  # Windows PowerShell: Copy-Item .env.example .env
npm install
npm run dev
# API runs on http://localhost:5000
```

## Environment

- `PORT`: Port to run the API (default: 5000)
- `CORS_ORIGIN`: Allowed origin for CORS (default: http://localhost:5173)

## Endpoints

- GET /api/health — Health check
- GET /api/products — List products (filters: `q`, `category`, `inStock`, `featured`, `new`, `minPrice`, `maxPrice`)
- GET /api/products/:id — Get product by ID
- GET /api/products/tags/featured — Featured products
- GET /api/products/tags/new — New arrivals
- GET /api/products/tags/deals — Deals
- GET /api/categories — List categories

### Cart (in-memory, keyed by `userId`)

- GET /api/cart?userId=guest
- POST /api/cart — Body: `{ userId, productId, quantity }`
- PATCH /api/cart/:productId — Body: `{ userId, quantity }`
- DELETE /api/cart/:productId?userId=guest
- DELETE /api/cart — Body or query: `{ userId }`

### Wishlist (in-memory, keyed by `userId`)

- GET /api/wishlist?userId=guest
- POST /api/wishlist — Body: `{ userId, productId }`
- DELETE /api/wishlist/:productId?userId=guest

### Auth (demo only, not secure)

- POST /api/auth/register — Body: `{ email, password, name? }`
- POST /api/auth/login — Body: `{ email, password }`
- GET /api/auth/me — Header: `Authorization: Bearer <demo token>`

## Notes

- Data is served from `src/data/*.json` and is static.
- Cart and wishlist are in-memory; restart clears them. Swap to a DB for persistence.
- For local dev, you can add a Vite proxy so `/api` hits this server:
  - See `vite.config.ts` and add a `server.proxy` for `/api` → `http://localhost:5000`.
