import express from "express";

// In-memory wishlists: userId -> { items: string[] }
const wishlists = new Map();

function getWishlist(userId = "guest") {
  if (!wishlists.has(userId)) wishlists.set(userId, { items: [] });
  return wishlists.get(userId);
}

const router = express.Router();

router.get("/", (req, res) => {
  const userId = String(req.query.userId || "guest");
  res.json(getWishlist(userId));
});

router.post("/", (req, res) => {
  const { userId = "guest", productId } = req.body || {};
  if (!productId) return res.status(400).json({ error: "productId required" });
  const list = getWishlist(String(userId));
  if (!list.items.includes(productId)) list.items.push(productId);
  res.json(list);
});

router.delete("/:productId", (req, res) => {
  const userId = String(req.query.userId || "guest");
  const productId = req.params.productId;
  const list = getWishlist(userId);
  list.items = list.items.filter((id) => id !== productId);
  res.json(list);
});

export default router;
