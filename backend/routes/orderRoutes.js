const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getOrderById,
  cancelOrder,
  updateOrderStatus,
  getAllOrders,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

// Place Order
router.post("/", protect, placeOrder);

// Customer Orders
router.get("/my-orders", protect, getMyOrders);

// Admin - All Orders
router.get("/", protect, getAllOrders);

// Single Order
router.get("/:id", protect, getOrderById);

// Cancel Order
router.put("/:id/cancel", protect, cancelOrder);

// Update Order Status
router.put("/:id", protect, updateOrderStatus);

module.exports = router;