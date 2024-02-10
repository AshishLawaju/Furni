import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    mongoose
      .connect(`${process.env.DB_URL}`)
      .then(() => console.log("connected to db.."));
  } catch (error) {
    console.log("MOONGO DB connection error", error);
    process.exit(1);
  }
};

export { connectDB };
