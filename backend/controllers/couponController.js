const Coupon = require("../models/Coupon");

// Apply Coupon
exports.applyCoupon = async (req, res) => {
  try {
    const { code, total } = req.body;

    const coupon = await Coupon.findOne({
      code: code.toUpperCase(),
      isActive: true,
    });

    if (!coupon) {
      return res.status(404).json({
        success: false,
        message: "Invalid coupon",
      });
    }

    if (total < coupon.minAmount) {
      return res.status(400).json({
        success: false,
        message: `Minimum order ₹${coupon.minAmount}`,
      });
    }

    const discount = (total * coupon.discount) / 100;
    const finalTotal = total - discount;

    res.json({
      success: true,
      discount,
      finalTotal,
      coupon,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};