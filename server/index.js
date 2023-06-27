import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import { connectToDatabase } from "./database/db.js";
import userRoutes from "./routes/usersRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server is started on port ${port}`));
