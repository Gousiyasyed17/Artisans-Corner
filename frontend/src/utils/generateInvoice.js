import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const generateInvoice = (order) => {
  const doc = new jsPDF();

  doc.setFontSize(22);
  doc.text("Artisan Corner", 14, 20);

  doc.setFontSize(13);
  doc.text("Invoice", 14, 30);

  doc.setFontSize(11);

  doc.text(
    `Invoice Number : ${order.invoiceNumber}`,
    14,
    40
  );

  doc.text(
    `Order ID : ${order._id}`,
    14,
    48
  );

  doc.text(
    `Order Date : ${new Date(
      order.createdAt
    ).toLocaleDateString()}`,
    14,
    56
  );

  doc.text(
    `Customer : ${order.customer?.name}`,
    14,
    64
  );

  doc.text(
    `Email : ${order.customer?.email}`,
    14,
    72
  );

  doc.text(
    `Payment : ${order.paymentMethod}`,
    14,
    80
  );

  doc.text(
    `Status : ${order.paymentStatus}`,
    14,
    88
  );

  autoTable(doc, {
    startY: 100,

    head: [[
      "Product",
      "Qty",
      "Price",
      "Total"
    ]],

    body: order.items.map((item) => [
      item.product?.name,
      item.quantity,
      `₹${item.price}`,
      `₹${item.price * item.quantity}`,
    ]),
  });

  const finalY = doc.lastAutoTable.finalY + 15;

  doc.text(
    `Shipping : ₹${order.shippingCharge}`,
    14,
    finalY
  );

  doc.text(
    `Discount : ₹${order.discount}`,
    14,
    finalY + 10
  );

  doc.setFontSize(15);

  doc.text(
    `Grand Total : ₹${order.totalPrice}`,
    14,
    finalY + 25
  );

  doc.save(
    `Invoice-${order.invoiceNumber}.pdf`
  );
};

export default generateInvoice;