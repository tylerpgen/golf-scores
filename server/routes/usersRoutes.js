import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

//Route for sign in
router.post("/auth", authUser);

//Route for sign up
router.post("/signup", signUp);

export default router;
