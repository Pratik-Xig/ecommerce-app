import express from "express";

// In-memory carts: userId -> { items: [{ productId, quantity }] }
const carts = new Map();

function getCart(userId = "guest") {
  if (!carts.has(userId)) carts.set(userId, { items: [] });
  return carts.get(userId);
}

const router = express.Router();

// Get cart for a user
router.get("/", (req, res) => {
  const userId = String(req.query.userId || "guest");
  res.json(getCart(userId));
});

// Add item to cart
router.post("/", (req, res) => {
  const { userId = "guest", productId, quantity = 1 } = req.body || {};
  if (!productId) return res.status(400).json({ error: "productId required" });
  const cart = getCart(String(userId));
  const idx = cart.items.findIndex((i) => i.productId === productId);
  if (idx === -1) cart.items.push({ productId, quantity: Number(quantity) });
  else cart.items[idx].quantity += Number(quantity);
  res.json(cart);
});

// Update quantity for an item
router.patch("/:productId", (req, res) => {
  const { userId = "guest", quantity } = req.body || {};
  const productId = req.params.productId;
  if (quantity == null)
    return res.status(400).json({ error: "quantity required" });
  const cart = getCart(String(userId));
  const idx = cart.items.findIndex((i) => i.productId === productId);
  if (idx === -1) return res.status(404).json({ error: "Item not in cart" });
  cart.items[idx].quantity = Number(quantity);
  res.json(cart);
});

// Remove an item
router.delete("/:productId", (req, res) => {
  const userId = String(req.query.userId || "guest");
  const productId = req.params.productId;
  const cart = getCart(userId);
  cart.items = cart.items.filter((i) => i.productId !== productId);
  res.json(cart);
});

// Clear cart
router.delete("/", (req, res) => {
  const userId = String(
    (req.body && req.body.userId) || req.query.userId || "guest"
  );
  carts.set(userId, { items: [] });
  res.json(getCart(userId));
});

export default router;
