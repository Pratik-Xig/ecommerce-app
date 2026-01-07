import express from "express";

const router = express.Router();

// Simple in-memory users keyed by email for demo purposes
const users = new Map();
let userCounter = 1;

router.post("/register", (req, res) => {
  const { email, password, name } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: "email and password required" });
  if (users.has(email))
    return res.status(409).json({ error: "User already exists" });
  const user = {
    id: String(userCounter++),
    email,
    name: name || email.split("@")[0],
  };
  users.set(email, { ...user, password });
  res
    .status(201)
    .json({
      user,
      token: `demo.${Buffer.from(email).toString("base64")}.token`,
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password)
    return res.status(400).json({ error: "email and password required" });
  const record = users.get(email);
  if (!record || record.password !== password)
    return res.status(401).json({ error: "Invalid credentials" });
  const { password: _pw, ...user } = record;
  res.json({
    user,
    token: `demo.${Buffer.from(email).toString("base64")}.token`,
  });
});

router.get("/me", (req, res) => {
  // Very basic demo: read token and return the user if found
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token || !token.includes("."))
    return res.status(401).json({ error: "Unauthenticated" });
  const emailB64 = token.split(".")[1];
  try {
    const email = Buffer.from(emailB64, "base64").toString("utf-8");
    const record = users.get(email);
    if (!record) return res.status(401).json({ error: "Unauthenticated" });
    const { password: _pw, ...user } = record;
    return res.json({ user });
  } catch {
    return res.status(401).json({ error: "Unauthenticated" });
  }
});

export default router;
