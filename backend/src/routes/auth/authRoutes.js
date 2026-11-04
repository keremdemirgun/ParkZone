import { Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();

router.post("/register", (req, res) => {
  res.json({ message: "Stub route" });
  const {username, password, email, firstName, lastName, plate} = req.body;
  
  const hashedPassword = bcrypt.hashSync(password, 8);
  

});

router.post("/login", (req, res) => {
  res.json({ message: "Stub route" });
});

export default router;
