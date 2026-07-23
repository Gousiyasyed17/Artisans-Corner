const express = require("express");
const router = express.Router();

const {
  addToWishlist,
  getWishlist,
  removeWishlistItem,
} = require("../controllers/wishlistController");

const { protect } = require("../middleware/authMiddleware");

// Add product to wishlist
router.post("/", protect, addToWishlist);

// Get wishlist
router.get("/", protect, getWishlist);

// Remove product from wishlist
router.delete("/:productId", protect, removeWishlistItem);

module.exports = router;