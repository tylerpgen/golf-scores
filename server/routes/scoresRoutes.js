import express from "express";
import { getAllScores, addScore, updateScore, deleteScore } from "../controllers/scoresController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Route for retreiving all scores
router.get("/", protect, getAllScores);

//Route for creating a new score
router.post("/add", protect, addScore);

//Route for editing an existing score
router.put("/scores/:id", protect, updateScore);

//Route for deleting a score
router.delete("/:id", protect, deleteScore);

export default router;
