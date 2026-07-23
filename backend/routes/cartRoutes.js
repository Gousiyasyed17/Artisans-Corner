const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

// Add product to cart
router.post("/", protect, addToCart);

// Get logged-in user's cart
router.get("/", protect, getCart);

// Update quantity
router.put("/:itemId", protect, updateCartItem);

// Remove item
router.delete("/:itemId", protect, removeCartItem);

module.exports = router;