import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

//Route for sign in
router.post("/auth", authUser);

export default router;
