const express = require("express");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getSellerProducts,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Public Routes
router.get("/", getProducts);
router.get("/my-products", protect, getSellerProducts);
router.get("/seller", protect, getSellerProducts);
router.get("/:id", getProductById);

// Protected Routes (Seller/Admin after login)
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;