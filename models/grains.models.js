import { Schema, model } from "mongoose";

const grainSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    kcalper100g: {
      type: Number,
      required: true,
    },
    istasty: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GrainsModel = model("Grain", grainSchema);
export default GrainsModel;
