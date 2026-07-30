const Order = require("../models/Order");

// =====================================
// PLACE ORDER
// =====================================

exports.placeOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      totalPrice,
      shippingCharge = 0,
      discount = 0,
      paymentMethod,
    } = req.body;

    // Basic validation
    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Order must contain at least one product",
      });
    }

    if (!totalPrice) {
      return res.status(400).json({
        success: false,
        message: "Total price is required",
      });
    }

    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: "Shipping address is required",
      });
    }

    const invoiceNumber =
  "AC-" +
  Date.now() +
  "-" +
  Math.floor(Math.random() * 1000);

const estimatedDelivery = new Date();

estimatedDelivery.setDate(
  estimatedDelivery.getDate() + 5
);

const order = await Order.create({
  customer: req.user._id,

  items,

  shippingAddress,

  totalPrice,

  shippingCharge,

  discount,

  paymentMethod:
    paymentMethod === "Online"
      ? "Online"
      : "COD",

  paymentStatus:
    paymentMethod === "COD"
      ? "Pending"
      : "Paid",

  orderStatus: "Pending",

  invoiceNumber,

  estimatedDelivery,
});
    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error("Place Order Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// CUSTOMER ORDER HISTORY
// =====================================

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: req.user._id,
    })
      .populate("customer", "name email")
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Get Orders Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// GET SINGLE ORDER
// =====================================

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
  .populate("customer", "name email")
  .populate({
    path: "items.product",
    populate: {
      path: "seller",
      select: "name email phone",
    },
  });
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Customer can only see their own order
    if (
      order.customer?._id &&
      order.customer._id.toString() !==
        req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Get Order Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Cancel Order
exports.cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Only owner can cancel
    if (order.customer.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    // Only pending/confirmed orders can be cancelled
    if (
      order.orderStatus !== "Pending" &&
      order.orderStatus !== "Confirmed"
    ) {
      return res.status(400).json({
        success: false,
        message: "This order cannot be cancelled",
      });
    }

    order.orderStatus = "Cancelled";
    order.cancelledAt = new Date();

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order cancelled successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// UPDATE ORDER STATUS
// =====================================

exports.updateOrderStatus = async (
  req,
  res
) => {
  try {
    const order = await Order.findById(
      req.params.id
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.orderStatus =
      req.body.orderStatus;

    if (
      req.body.orderStatus === "Delivered"
    ) {
      order.deliveredAt = new Date();
    }

    if (
      req.body.orderStatus === "Cancelled"
    ) {
      order.cancelledAt = new Date();
    }

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order,
    });
  } catch (error) {
    console.error(
      "Update Order Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// GET ALL ORDERS
// =====================================

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer", "name email")
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error(
      "Get All Orders Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================================
// GET SELLER ORDERS
// ======================================

exports.getSellerOrders = async (req, res) => {
  try {

    const orders = await Order.find({
      "items.seller": req.user._id,
    })
      .populate("customer", "name email")
      .populate("items.product", "name images");

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

// ======================================
// GET SELLER SALES HISTORY
// ======================================

exports.getSellerSalesHistory = async (req, res) => {
  try {

    const orders = await Order.find({
      "items.seller": req.user._id,
      
    })
      .populate("customer", "name email")
      .populate("items.product", "name");

    let totalRevenue = 0;
    let productsSold = 0;

    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (
          item.seller.toString() ===
          req.user._id.toString()
        ) {
          totalRevenue += item.price * item.quantity;
          productsSold += item.quantity;
        }
      });
    });

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let monthlyRevenue = 0;

    orders.forEach((order) => {
      const date = new Date(order.createdAt);

      if (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      ) {
        order.items.forEach((item) => {
          if (
            item.seller.toString() ===
            req.user._id.toString()
          ) {
            monthlyRevenue +=
              item.price * item.quantity;
          }
        });
      }
    });

    res.status(200).json({
      success: true,
      totalRevenue,
      productsSold,
      monthlyRevenue,
      sales: orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================================
// GET SELLER EARNINGS
// ======================================

exports.getSellerEarnings = async (req, res) => {
  try {

    const orders = await Order.find({
      "items.seller": req.user._id,
    })
      .populate("customer", "name email")
      .populate("items.product", "name");

    let totalEarnings = 0;
    let availableBalance = 0;
    let pendingPayout = 0;
    let monthlyEarnings = 0;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    orders.forEach((order) => {

      order.items.forEach((item) => {

        if (
          item.seller.toString() ===
          req.user._id.toString()
        ) {

          const amount =
            item.price * item.quantity;

          totalEarnings += amount;

          if (
            order.orderStatus === "Delivered"
          ) {
            availableBalance += amount;
          } else {
            pendingPayout += amount;
          }

          const date = new Date(
            order.createdAt
          );

          if (
            date.getMonth() === currentMonth &&
            date.getFullYear() === currentYear
          ) {
            monthlyEarnings += amount;
          }

        }

      });

    });

    res.status(200).json({
      success: true,

      totalEarnings,

      availableBalance,

      pendingPayout,

      monthlyEarnings,

      transactions: orders,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};