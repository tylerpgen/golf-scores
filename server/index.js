import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { connectToDatabase } from "./database/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const startServer = async () => {
  try {
    const db = await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

startServer();
