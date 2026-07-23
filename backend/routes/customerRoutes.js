const express = require("express");
const router = express.Router();

const {
  getCustomerDashboard,
  getCustomerProfile,
  updateCustomerProfile,
} = require("../controllers/customerController");

const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, getCustomerDashboard);

router.get("/profile", protect, getCustomerProfile);

router.put("/profile", protect, updateCustomerProfile);

module.exports = router;