import express from "express";
import GrainsModel from "../models/grains.models.js";

const grainsRouter = express.Router();

grainsRouter.post("/", async (req, res) => {
  try {
    const newGrain = await GrainsModel.create({ ...req.body });
    return res.status(201).json(newGrain);
  } catch (e) {
    console.log(e);
    return res.status(406).json("Wrong format.");
  }
});

grainsRouter.get("/", async (req, res) => {
  try {
    const grainsList = await GrainsModel.find();
    return res.status(200).json(grainsList);
  } catch (e) {
    console.log(e);
  }
});

grainsRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const grainSel = await GrainsModel.findById(id);
    if (!grainSel) {
      return res.status(404).json("Grain not found.");
    }
    return res.status(200).json(grainSel);
  } catch (e) {
    console.log(e);
    return res.status(404).json("Grain not found.");
  }
});

grainsRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const grainSel = await GrainsModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    return res.status(200).json(grainSel);
  } catch (e) {
    console.log(e);
    return res.status(404).json("Grain not found.");
  }
});

grainsRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const grainSel = await GrainsModel.findByIdAndDelete(id);
    return res.status(200).json(grainSel);
  } catch (e) {
    console.log(e);
    return res.status(404).json("Grain not found.");
  }
});

export default grainsRouter;
