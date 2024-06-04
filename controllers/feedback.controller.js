import Feedback from "../models/feedback.model.js";

export const FeedbackIndex = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const FeedbackCreate = async (req, res) => {
  const newFeedback = new Feedback({
    userId: req.body.userId,
    comment: req.body.comment,
    rating: req.body.rating,
  });

  try {
    const feedback = await newFeedback.save();
    return res.status(201).json(feedback);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const FeedbackDetail = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (feedback == null) {
      return res.status(404).json({ message: "Cannot find feedback" });
    } else {
      res.json(feedback);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const FeedbackUpdate = async (req, res) => {
  try {
    const updatedFeedback = await Feedback.findOneAndUpdate(
      { _id: req.params.id },
      {
        userId: req.body.userId,
        comment: req.body.comment,
        rating: req.body.rating,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const FeedbackDelete = async (req, res) => {
  const feedbackId = req.params.id;

  try {
    await Feedback.deleteOne({ _id: feedbackId });
    res.json({ message: "Feedback deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
