import express from "express";
import feedbackRoutes from "./routes/feedback.route.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6969;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
connectDB();

// Root route
app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});

// CRUD functionality for feedback
app.use("/feedback", feedbackRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
