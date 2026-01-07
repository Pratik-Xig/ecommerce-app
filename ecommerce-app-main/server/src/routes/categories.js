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

const categories = loadJSON("categories.json");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json(categories);
});

export default router;
