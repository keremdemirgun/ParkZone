import express from "express";
import "dotenv/config";

import { connectDatabase } from "./src/config/db.js";
import apiRouter from "./src/routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRouter);

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(port, () => {
      console.log(`ParkZone API listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error);
    process.exitCode = 1;
  }
};

startServer();

export default app;