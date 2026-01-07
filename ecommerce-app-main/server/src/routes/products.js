import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadJSON(file) {
  const p = path.join(__dirname, "..", "data", file);
  return JSON.parse(fs.readFileSync(p, "utf-8"));
}

const products = loadJSON("products.json");

const router = express.Router();

// List products with optional filters
router.get("/", (req, res) => {
  const {
    q,
    category,
    inStock,
    featured,
    new: isNew,
    minPrice,
    maxPrice,
  } = req.query;
  let result = [...products];

  if (q) {
    const query = String(q).toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (inStock !== undefined) {
    const flag = inStock === "true";
    result = result.filter((p) => p.inStock === flag);
  }

  if (featured !== undefined) {
    const flag = featured === "true";
    result = result.filter((p) => Boolean(p.isFeatured) === flag);
  }

  if (isNew !== undefined) {
    const flag = isNew === "true";
    result = result.filter((p) => Boolean(p.isNew) === flag);
  }

  const min = minPrice ? Number(minPrice) : undefined;
  const max = maxPrice ? Number(maxPrice) : undefined;
  if (!Number.isNaN(min)) result = result.filter((p) => p.price >= min);
  if (!Number.isNaN(max)) result = result.filter((p) => p.price <= max);

  res.json(result);
});

// Get product by id
router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// Convenience routes
router.get("/tags/featured", (_req, res) => {
  res.json(products.filter((p) => p.isFeatured));
});
router.get("/tags/new", (_req, res) => {
  res.json(products.filter((p) => p.isNew));
});
router.get("/tags/deals", (_req, res) => {
  res.json(
    products.filter((p) => p.originalPrice && p.originalPrice > p.price)
  );
});

export default router;
