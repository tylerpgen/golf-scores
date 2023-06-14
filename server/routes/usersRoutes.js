import express from "express";
import { signIn, signUp } from "../controllers/userController.js";

const router = express.Router();

//Route for sign in
router.post("/signin", signIn);

//Route for sign up
router.post("/signup", signUp);

export default router;
