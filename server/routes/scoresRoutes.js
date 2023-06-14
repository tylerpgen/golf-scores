import express from "express";
import { addScore, editScore, deleteScore } from "../controllers/scoresController.js";
import { getAllScores } from "../controllers/scoresController.js";

const router = express.Router();

router.get("/scores", getAllScores);
router.post("/scores", addScore);
router.put("/scores/:id", editScore);
router.delete("/scores/:id", deleteScore);

export default router;
