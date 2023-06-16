import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./database/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Connect to database
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runing on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });

//Handle errors with middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: "Something went wrong" });
});
