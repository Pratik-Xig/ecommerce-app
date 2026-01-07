# Aura Commerce - E-commerce Platform

A modern, full-stack e-commerce platform for premium electronics and gadgets built with React, TypeScript, and Node.js.

## Features

- 🛍️ Browse products by category
- 🔍 Advanced search functionality
- 🛒 Shopping cart with persistent state
- ❤️ Wishlist management
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ⚡ Real-time product filtering
- 🔐 User authentication (demo)

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express.js, CORS
- **State Management**: React Context API
- **Database**: In-memory (upgradeable to PostgreSQL/MongoDB)

## Project Structure

```
.
├── src/                           # Frontend source
│   ├── components/               # React components
│   ├── pages/                    # Page components
│   ├── hooks/                    # Custom hooks
│   ├── context/                  # React context (Cart, Wishlist)
│   ├── data/                     # Static data
│   └── lib/                      # Utilities
└── server/                        # Backend source
    ├── src/
    │   ├── routes/              # API routes
    │   ├── data/                # JSON data files
    │   └── server.js            # Express app
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Pratik-Xig/ecommerce-app.git
cd ecommerce-app
```

**2. Install frontend dependencies**

```bash
npm install
```

**3. Install backend dependencies**

```bash
cd server
npm install
cd ..
```

### Running Locally

**Terminal 1 - Start Backend:**

```bash
cd server
copy .env.example .env  # Windows
# or: cp .env.example .env (Mac/Linux)
npm run dev
# Backend runs at http://localhost:5000
```

**Terminal 2 - Start Frontend:**

```bash
npm run dev
# Frontend runs at http://localhost:5173
```

Visit http://localhost:5173 in your browser.

## API Endpoints

### Health Check

- `GET /api/health` - Server health status

### Products

- `GET /api/products` - List all products with filters
  - Query params: `q` (search), `category`, `inStock`, `featured`, `new`, `minPrice`, `maxPrice`
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/tags/featured` - Featured products
- `GET /api/products/tags/new` - New arrivals
- `GET /api/products/tags/deals` - Deal products

### Categories

- `GET /api/categories` - List all categories

### Cart (In-memory, per userId)

- `GET /api/cart?userId=guest` - Get user cart
- `POST /api/cart` - Add item to cart
  - Body: `{ userId, productId, quantity }`
- `PATCH /api/cart/:productId` - Update item quantity
  - Body: `{ userId, quantity }`
- `DELETE /api/cart/:productId?userId=guest` - Remove item
- `DELETE /api/cart` - Clear cart
  - Body or query: `{ userId }`

### Wishlist (In-memory, per userId)

- `GET /api/wishlist?userId=guest` - Get user wishlist
- `POST /api/wishlist` - Add to wishlist
  - Body: `{ userId, productId }`
- `DELETE /api/wishlist/:productId?userId=guest` - Remove from wishlist

### Auth (Demo only - not production secure)

- `POST /api/auth/register` - Register user
  - Body: `{ email, password, name? }`
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
- `GET /api/auth/me` - Get current user
  - Header: `Authorization: Bearer <token>`

## Available Scripts

### Frontend

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Backend

```bash
cd server
npm run dev       # Start with nodemon (auto-reload)
npm start         # Start production server
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Environment Variables

### Backend (.env in server/)

```
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

## Demo Data

The application comes with mock product data and in-memory storage for cart/wishlist. To add persistence:

1. **Add a database** (PostgreSQL/MongoDB)
2. **Update backend routes** in `server/src/routes/` to use database queries
3. **Add authentication** with JWT tokens and password hashing

## Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy the `dist/` folder
```

### Backend (Heroku/Railway/Render)

```bash
cd server
npm start
```

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

MIT

## Support

For issues or questions, please open a GitHub issue or contact the maintainer.

---
