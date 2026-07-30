const express = require("express");
const router = express.Router();

const {
  getDashboard,
  getUsers,
  getSellers,
  getProducts,
  getOrders,
  getAnalytics,
  getReports,
} = require("../controllers/adminController");

const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");

// =========================
// Admin Dashboard
// =========================
router.get(
  "/dashboard",
  protect,
  authorize("admin"),
  getDashboard
);

// =========================
// All Users
// =========================
router.get(
  "/users",
  protect,
  authorize("admin"),
  getUsers
);

// =========================
// All Sellers
// =========================
router.get(
  "/vendors",
  protect,
  authorize("admin"),
  getSellers
);

// =========================
// All Products
// =========================
router.get(
  "/products",
  protect,
  authorize("admin"),
  getProducts
);

// =========================
// All Orders
// =========================
router.get(
  "/orders",
  protect,
  authorize("admin"),
  getOrders
);

// =========================
// Analytics
// =========================
router.get(
  "/analytics",
  protect,
  authorize("admin"),
  getAnalytics
);

// =========================
// Reports
// =========================
router.get(
  "/reports",
  protect,
  authorize("admin"),
  getReports
);

module.exports = router;