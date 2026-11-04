import { Router } from "express";

import authRoutes from "./auth/authRoutes.js";
import notificationRoutes from "./notifications/notificationRoutes.js";
import vehicleRoutes from "./vehicles/vehicleRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/notifications", notificationRoutes);

export default router;
