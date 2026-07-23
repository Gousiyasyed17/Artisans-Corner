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

const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, getDashboard);

router.get("/users", protect, getUsers);

router.get("/vendors", protect, getSellers);

router.get("/products", protect, getProducts);

router.get("/orders", protect, getOrders);

router.get("/analytics", protect, getAnalytics);

router.get("/reports", protect, getReports);

module.exports = router;