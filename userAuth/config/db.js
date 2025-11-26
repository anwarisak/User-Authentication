import mongoose from "mongoose";
import { DATABASE_URL } from "./config.js";

export const connectDb = async () => {
  mongoose
    .connect(DATABASE_URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch(() => {
      console.error("MongoDB connection error:", error);
    });
};
