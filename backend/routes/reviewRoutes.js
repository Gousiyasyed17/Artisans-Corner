const express = require("express");
const router = express.Router();

const {
  addReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/reviewController");

const { protect } = require("../middleware/authMiddleware");

// Add Review
router.post("/", protect, addReview);

// Get Reviews of Product
router.get("/:productId", getProductReviews);

// Delete Review
router.delete("/:id", protect, deleteReview);

module.exports = router;