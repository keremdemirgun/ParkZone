import { Router } from "express";

const router = Router();

router.post("/send", (req, res) => {
  res.json({ message: "Stub route" });
});

router.get("/history", (req, res) => {
  res.json({ message: "Stub route" });
});

export default router;
