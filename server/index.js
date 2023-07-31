import express from "express";
import path, { dirname } from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";
import userRoutes from "./routes/usersRoutes.js";
import scoresRoutes from "./routes/scoresRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import { fileURLToPath } from "url";

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database using the connectDB function
connectDB();

// Create an instance of Express application
const app = express();

// Set the port for the server to listen on
const port = process.env.PORT || 5000;

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Middleware to parse incoming request bodies with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies attached to the requests
app.use(cookieParser());

// Set up routes for handling user-related requests
app.use("/api/users/scores", scoresRoutes);
app.use("/api/users", userRoutes);

// Get the current file's path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check if the application is running in production mode
if (process.env.NODE_ENV === "production") {
  // Define the path to the client's production build directory
  const clientDistPath = path.resolve(__dirname, "..", "client/dist");
  console.log("clientDistPath:", clientDistPath);

  // Serve the static files from the client's production build directory
  app.use(express.static(clientDistPath));

  // Route all other requests to the client's index.html file for client-side routing
  app.get("*", (req, res) => res.sendFile(path.resolve(clientDistPath, "index.html")));
} else {
  // If not in production mode, respond with a simple message
  app.get("/", (req, res) => res.send("Server is ready"));
}

// Middleware for handling 404 Not Found errors
app.use(notFound);

// Middleware for handling errors
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server is started on port ${port}`));
