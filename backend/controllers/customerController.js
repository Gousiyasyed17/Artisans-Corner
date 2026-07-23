const Order = require("../models/Order");
const Review = require("../models/Review");
const User = require("../models/User");

// Customer Dashboard
exports.getCustomerDashboard = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user._id });

    const reviews = await Review.find({ user: req.user._id });

    const totalSpent = orders.reduce(
      (sum, order) => sum + order.totalPrice,
      0
    );

    res.status(200).json({
      success: true,
      dashboard: {
        totalOrders: orders.length,
        totalReviews: reviews.length,
        totalSpent,
      },
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Customer Profile
exports.getCustomerProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Profile
exports.updateCustomerProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated",
      user,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};