const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  minAmount: Number,
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);