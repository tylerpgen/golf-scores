import express from "express";
import { addScore, editScore, deleteScore } from "../controllers/scoresController.js";
import { getAllScores } from "../controllers/scoresController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Route for retreiving all scores
router.get("/scores", auth, getAllScores);

//Route for creating a new score
router.post("/scores/add", auth, addScore);

//Route for editing an existing score
router.put("/scores/:id", auth, editScore);

//Route for deleting a score
router.delete("/scores/:id", auth, deleteScore);

export default router;
