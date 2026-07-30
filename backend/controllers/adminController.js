const User = require("../models/User");
const Product = require("../models/Product");
const Order = require("../models/Order");

// Dashboard
exports.getDashboard = async (req, res) => {
  try {

    const users = await User.countDocuments();
    const sellers = await User.countDocuments({ role: "seller" });
    const products = await Product.countDocuments();
    const orders = await Order.countDocuments();

    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);

    res.json({
      success: true,
      dashboard: {
        users,
        sellers,
        products,
        orders,
        revenue: revenue[0]?.totalRevenue || 0,
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Users
exports.getUsers = async (req, res) => {
  try {

    const users = await User.find().select("-password");

    res.json({
      success: true,
      users,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Sellers
exports.getSellers = async (req, res) => {
  try {

    const sellers = await User.find({
      role: "seller",
    }).select("-password");

    res.json({
      success: true,
      sellers,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Products
exports.getProducts = async (req, res) => {
  try {

    const products = await Product.find()
      .populate("seller", "name");

    res.json({
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

// Orders
exports.getOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("customer", "name email")
      .populate("items.product");

    res.json({
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
// Analytics
exports.getAnalytics = async (req, res) => {
  try {

    const totalRevenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          revenue: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);

    const totalOrders = await Order.countDocuments();

    const delivered = await Order.countDocuments({
      orderStatus: "Delivered",
    });

    const pending = await Order.countDocuments({
      orderStatus: "Pending",
    });

    res.json({
      success: true,
      analytics: {
        revenue: totalRevenue[0]?.revenue || 0,
        totalOrders,
        delivered,
        pending,
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Reports
exports.getReports = async (req, res) => {
  try {

    const orders = await Order.find();

    const report = {
      totalOrders: orders.length,
      totalRevenue: orders.reduce(
        (sum, o) => sum + o.totalPrice,
        0
      ),
      delivered: orders.filter(
        (o) => o.orderStatus === "Delivered"
      ).length,
      cancelled: orders.filter(
        (o) => o.orderStatus === "Cancelled"
      ).length,
    };

    res.json({
      success: true,
      report,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};