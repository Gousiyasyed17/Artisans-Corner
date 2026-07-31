const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },

        seller: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },

        quantity: {
          type: Number,
          required: true,
          default: 1,
        },

        price: {
          type: Number,
          required: true,
        },
      },
    ],

    shippingAddress: {
      fullName: {
        type: String,
        default: "",
      },
      phone: {
        type: String,
        default: "",
      },
      address: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      state: {
        type: String,
        default: "",
      },
      pincode: {
        type: String,
        default: "",
      },
      country: {
        type: String,
        default: "India",
      },
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    shippingCharge: {
      type: Number,
      default: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "Online"],
      default: "COD",
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed", "Refunded"],
      default: "Pending",
    },
    platformFee: {
      type: Number,
      default: 0,
    },

    sellerPayout: {
      type: Number,
      default: 0,
    },
    paymentId: {
      type: String,
      default: "",
    },

    transactionId: {
      type: String,
      default: "",
    },

    orderStatus: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Processing",
        "Shipped",
        "Out for Delivery",
        "Delivered",
        "Cancelled",
        "Returned",
      ],
      default: "Pending",
    },
    invoiceNumber: {
      type: String,
      default: "",
    },

    estimatedDelivery: {
      type: Date,
    },

    returnRequested: {
      type: Boolean,
      default: false,
    },

    returnReason: {
      type: String,
      default: "",
    },

    returnStatus: {
      type: String,
      enum: [
        "Not Requested",
        "Pending",
        "Approved",
        "Rejected",
        "Completed",
      ],
      default: "Not Requested",
    },

    returnedAt: {
      type: Date,
    },

    deliveredAt: {
      type: Date,
    },

    cancelledAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);