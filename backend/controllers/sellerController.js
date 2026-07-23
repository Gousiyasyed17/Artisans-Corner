const Product = require("../models/Product");
const Order = require("../models/Order");

// Seller Dashboard Statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const sellerId = req.user._id;

    const products = await Product.find({ seller: sellerId });

    const productIds = products.map((p) => p._id.toString());

    const orders = await Order.find({
      "items.seller": sellerId,
    });

    let totalRevenue = 0;
    let totalSales = 0;

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (item.seller.toString() === sellerId.toString()) {
          totalRevenue += item.price * item.quantity;
          totalSales += item.quantity;
        }
      });
    });

    const pendingOrders = orders.filter(
      (o) => o.orderStatus === "Pending"
    ).length;

    res.status(200).json({
      success: true,
      dashboard: {
        totalProducts: products.length,
        totalOrders: orders.length,
        totalSales,
        totalRevenue,
        pendingOrders,
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Seller Orders
exports.getSellerOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      "items.seller": req.user._id,
    })
      .populate("customer", "name email")
      .populate("items.product");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Seller Products
exports.getSellerProducts = async (req, res) => {
  try {

    const products = await Product.find({
      seller: req.user._id,
    });

    res.status(200).json({
      success: true,
      products,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// Sales History
exports.getSalesHistory = async (req, res) => {
  try {

    const orders = await Order.find({
      "items.seller": req.user._id,
      orderStatus: "Delivered",
    })
      .populate("customer", "name")
      .populate("items.product");

    res.status(200).json({
      success: true,
      salesHistory: orders,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Earnings
exports.getEarnings = async (req, res) => {
  try {

    const orders = await Order.find({
      "items.seller": req.user._id,
      orderStatus: "Delivered",
    });

    let total = 0;

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (item.seller.toString() === req.user._id.toString()) {
          total += item.price * item.quantity;
        }
      });
    });

    res.status(200).json({
      success: true,
      earnings: total,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// Inventory
exports.getInventory = async (req, res) => {
  try {

    const products = await Product.find({
      seller: req.user._id,
    });

    res.status(200).json({
      success: true,
      inventory: products,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Low Stock
exports.getLowStockProducts = async (req, res) => {
  try {

    const products = await Product.find({
      seller: req.user._id,
      stock: { $lt: 5 },
    });

    res.status(200).json({
      success: true,
      lowStock: products,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};