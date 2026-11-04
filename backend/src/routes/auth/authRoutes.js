import { Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Stub route" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Stub route" });
});

export default router;
