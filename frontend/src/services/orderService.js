import API from "./api";

// Place Order
export const placeOrder = async (orderData) => {
  const { data } = await API.post("/orders", orderData);
  return data;
};

// Get My Orders
export const getMyOrders = async () => {
  const { data } = await API.get("/orders/my-orders");
  return data.orders;
};

// Get Single Order
export const getOrderById = async (id) => {
  const { data } = await API.get(`/orders/${id}`);
  return data.order;
};

// Cancel Order
export const cancelOrder = async (id) => {
  const { data } = await API.put(`/orders/${id}/cancel`);
  return data;
};

// ✅ Get Seller Orders
export const getSellerOrders = async () => {
  const { data } = await API.get("/orders/seller-orders");
  return data.orders;
};
// ==============================
// Seller Sales History
// ==============================

export const getSellerSalesHistory = async () => {
  const { data } = await API.get(
    "/orders/seller-sales-history"
  );

  return data;
};

// Update Order Status
export const updateOrderStatus = async (id, orderStatus) => {
  const { data } = await API.put(`/orders/${id}`, {
    orderStatus,
  });

  return data;
};

// ======================================
// SELLER EARNINGS
// ======================================

export const getSellerEarnings = async () => {
  const { data } = await API.get("/orders/seller-earnings");
  return data;
};