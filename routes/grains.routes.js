import express from "express";
import GrainsModel from "../models/grains.models.js";

const grainsRouter = express.Router();

GrainsModel.post("/", async (req, res) => {
  try {
    const newGrain = await GrainsModel.create({ ...req.body });
    return res.status(201).json(newGrain);
  } catch (e) {
    console.log(e);
  }
});

// Fazer as rotas - CRUD

export default grainsRouter;
