import mongoose from "mongoose";

async function connectToDb() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected: ${dbConnect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
}

export default connectToDb;
