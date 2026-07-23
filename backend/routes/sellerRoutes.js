const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getSellerOrders,
  getSellerProducts,
  getSalesHistory,
  getEarnings,
  getInventory,
  getLowStockProducts,
} = require("../controllers/sellerController");

const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, getDashboardStats);

router.get("/orders", protect, getSellerOrders);

router.get("/products", protect, getSellerProducts);

router.get("/sales-history", protect, getSalesHistory);

router.get("/earnings", protect, getEarnings);

router.get("/inventory", protect, getInventory);

router.get("/low-stock", protect, getLowStockProducts);

module.exports = router;