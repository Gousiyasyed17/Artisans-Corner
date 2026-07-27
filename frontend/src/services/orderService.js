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