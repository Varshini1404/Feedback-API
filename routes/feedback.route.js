import express from "express";
import {
  FeedbackCreate,
  FeedbackDelete,
  FeedbackIndex,
  FeedbackDetail,
  FeedbackUpdate,
} from "../controllers/feedback.controller.js";

const router = express.Router();

// R - For Reading
router.get("/", FeedbackIndex);
router.get("/:id", FeedbackDetail);

// C - For creating feedback
router.post("/", FeedbackCreate);

// U - For updating feedback
router.put("/:id", FeedbackUpdate);

// D - For deleting feedback
router.delete("/:id", FeedbackDelete);

export default router;
