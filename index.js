import express from "express";
import * as dotenv from "dotenv";
import { connectToDb } from "./config/db.config.js";
import grainsRouter from "./routes/grains.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/grains", grainsRouter);

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}.`);
});
