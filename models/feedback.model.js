import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
