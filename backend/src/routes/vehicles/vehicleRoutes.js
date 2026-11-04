import { Router } from "express";

const router = Router();

router.post("/add", (req, res) => {
  res.json({ message: "Stub route" });
});

router.get("/my-vehicles", (req, res) => {
  res.json({ message: "Stub route" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Stub route" });
});

export default router;
