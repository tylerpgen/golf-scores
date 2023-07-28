import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Create an instance of Express Router to handle the user routes
const router = express.Router();

// Define routes and corresponding controller functions using the router

// Route for user registration (POST /api/users/)
router.post("/", registerUser);

// Route for user authentication (POST /api/users/auth)
router.post("/auth", authUser);

// Route for user logout (POST /api/users/logout)
router.post("/logout", logoutUser);

// Route for user profile (GET /api/users/profile) with authentication middleware to protect the route
// Only authenticated users can access this route
router.route("/profile").get(protect, getUserProfile);

// Route to update user profile (PUT /api/users/profile) with authentication middleware to protect the route
// Only authenticated users can access this route
router.route("/profile").put(protect, updateUserProfile);

export default router;
