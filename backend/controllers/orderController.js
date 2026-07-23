const Order = require("../models/Order");

// Place Order
exports.placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, paymentMethod } = req.body;

    const order = await Order.create({
      customer: req.user._id,
      items,
      totalPrice,
      paymentMethod,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Customer Order History
exports.getMyOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      customer: req.user._id,
    })
      .populate("customer", "name email")
      .populate("items.product");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Order
exports.getOrderById = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id)
      .populate("customer", "name email")
      .populate("items.product");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Order Status
exports.updateOrderStatus = async (req, res) => {
  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.orderStatus = req.body.orderStatus;

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Orders (Admin)
exports.getAllOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("customer", "name email")
      .populate("items.product");

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};