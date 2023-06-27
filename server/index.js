import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoutes from "./routes/usersRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));
