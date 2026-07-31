const express = require("express");
const router = express.Router();

const {
  placeOrder,
  createRazorpayOrder,
  verifyPayment,
  getMyOrders,
  getOrderById,
  cancelOrder,
  updateOrderStatus,
  getAllOrders,
  getSellerOrders,
  getSellerSalesHistory,
  getSellerEarnings,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

// Place Order
router.post("/", protect, placeOrder);

// =====================================
// Razorpay
// =====================================

router.post(
  "/create-razorpay-order",
  protect,
  createRazorpayOrder
);

router.post(
  "/verify-payment",
  protect,
  verifyPayment
);

// Customer Orders
router.get("/my-orders", protect, getMyOrders);

// Admin - All Orders
router.get("/", protect, getAllOrders);

router.get("/seller-orders", protect, getSellerOrders);

router.get(
  "/seller-sales-history",
  protect,
  getSellerSalesHistory
);
router.get(
  "/seller-earnings",
  protect,
  getSellerEarnings
);

// Single Order
router.get("/:id", protect, getOrderById);

// Cancel Order
router.put("/:id/cancel", protect, cancelOrder);

// Update Order Status
router.put("/:id", protect, updateOrderStatus);

module.exports = router;