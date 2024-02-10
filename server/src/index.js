import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() =>
    app.listen(8000, () => {
      console.log(`server running aat  8000`);
    })
  )
  .catch((err) => {
    console.log("mongoo db connection failed", err);
  });
