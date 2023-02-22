import mongoose from "mongoose";

export async function connectToDb() {
  try {
    mongoose.set("strictQuery", false);
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected: ${dbConnect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
}
