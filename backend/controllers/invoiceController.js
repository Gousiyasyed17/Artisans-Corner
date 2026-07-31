const PDFDocument = require("pdfkit");
const Order = require("../models/Order");

exports.downloadInvoice = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("customer", "name email phone")
      .populate("items.product", "name");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    const doc = new PDFDocument({ margin: 50 });

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=Invoice-${order.invoiceNumber}.pdf`
    );

    doc.pipe(res);

    // ==========================
    // HEADER
    // ==========================

    doc
      .fontSize(24)
      .text("ARTISAN CORNER", {
        align: "center",
      });

    doc.moveDown();

    doc
      .fontSize(18)
      .text("INVOICE", {
        align: "center",
      });

    doc.moveDown(2);

    // ==========================
    // ORDER DETAILS
    // ==========================

    doc.fontSize(12);

    doc.text(`Invoice No : ${order.invoiceNumber}`);
    doc.text(`Order ID : ${order._id}`);
    doc.text(
      `Order Date : ${new Date(
        order.createdAt
      ).toLocaleDateString()}`
    );

    doc.text(
      `Payment : ${order.paymentStatus}`
    );

    doc.text(
      `Status : ${order.orderStatus}`
    );

    doc.moveDown();

    // ==========================
    // CUSTOMER
    // ==========================

    doc
      .fontSize(14)
      .text("Customer Details");

    doc.moveDown(0.5);

    doc.fontSize(12);

    doc.text(
      `Name : ${order.shippingAddress.fullName}`
    );

    doc.text(
      `Phone : ${order.shippingAddress.phone}`
    );

    doc.text(
      `Address : ${order.shippingAddress.address}`
    );

    doc.text(
      `${order.shippingAddress.city}, ${order.shippingAddress.state}`
    );

    doc.text(
      `${order.shippingAddress.pincode}, ${order.shippingAddress.country}`
    );

    doc.moveDown();

    // ==========================
    // PRODUCTS
    // ==========================

    doc
      .fontSize(14)
      .text("Products");

    doc.moveDown(0.5);

    order.items.forEach((item, index) => {
      doc.fontSize(12).text(
        `${index + 1}. ${
          item.product?.name || "Product"
        }`
      );

      doc.text(
        `Quantity : ${item.quantity}`
      );

      doc.text(
        `Price : ₹${item.price}`
      );

      doc.moveDown();
    });

    // ==========================
    // PAYMENT SUMMARY
    // ==========================

    doc
      .fontSize(14)
      .text("Payment Summary");

    doc.moveDown(0.5);

    doc.fontSize(12);

    doc.text(
      `Subtotal : ₹${order.totalPrice}`
    );

    doc.text(
      `Shipping : ₹${order.shippingCharge}`
    );

    doc.text(
      `Discount : ₹${order.discount}`
    );

    doc.text(
      `Platform Fee : ₹${order.platformFee}`
    );

    doc.text(
      `Seller Payout : ₹${order.sellerPayout}`
    );

    doc.moveDown();

    doc
      .fontSize(16)
      .text(
        `Grand Total : ₹${order.totalPrice}`,
        {
          align: "right",
        }
      );

    doc.moveDown(2);

    doc
      .fontSize(12)
      .text(
        "Thank you for shopping with Artisan Corner!",
        {
          align: "center",
        }
      );

    doc.end();

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};