import express from "express";
import path, { dirname } from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoutes from "./routes/usersRoutes.js";
import scoresRoutes from "./routes/scoresRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { fileURLToPath } from "url";
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users/scores", scoresRoutes);
app.use("/api/users", userRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));
