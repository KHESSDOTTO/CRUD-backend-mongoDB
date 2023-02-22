import { Schema, model } from "mongoose";

const grainSchema = new Schema(
  {
    name: {
      type: string,
      required: true,
      trim: true,
    },
    description: {
      type: string,
      required: true,
      trim: true,
    },
    kcalper100g: {
      type: number,
      required: true,
    },
    istasty: {
      type: boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const grainsModel = model("Grain", grainSchema);
export default grainsModel;
