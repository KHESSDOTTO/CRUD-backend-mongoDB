import express from "express";
import * as dotenv from "dotenv";
import connectToDb from "./config/db.config.js";

dotenv.config();
const app = express();
app.use(express.json());

connectToDb();
