import express from "express";
import { addScore, editScore, deleteScore } from "../controllers/scoresController.js";
import { getAllScores } from "../controllers/scoresController.js";

const router = express.Router();

// Route for retreiving all scores
router.get("/scores", getAllScores);

//Route for creating a new score
router.post("/scores/add", addScore);

//Route for editing an existing score
router.put("/scores/:id", editScore);

//Route for deleting a score
router.delete("/scores/:id", deleteScore);

export default router;
