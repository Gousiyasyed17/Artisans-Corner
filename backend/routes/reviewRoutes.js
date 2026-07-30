const express = require("express");
const router = express.Router();

const {
  addReview,
  getProductReviews,
  deleteReview,
  updateReview,
  replyReview,
} = require("../controllers/reviewController");

const { protect } = require("../middleware/authMiddleware");

// ======================================
// Add Review
// ======================================
router.post("/", protect, addReview);

// ======================================
// Get All Reviews of a Product
// ======================================
router.get("/:productId", getProductReviews);

// ======================================
// Update Review
// ======================================
router.put("/:id", protect, updateReview);

// ======================================
// Seller Reply to Review
// ======================================
router.put("/:id/reply", protect, replyReview);

// ======================================
// Delete Review
// ======================================
router.delete("/:id", protect, deleteReview);

module.exports = router;