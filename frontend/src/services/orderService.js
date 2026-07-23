import API from "./api";

export const placeOrder = async (data) => {
  const response = await API.post("/orders", data);
  return response.data;
};

export const getMyOrders = async () => {
  const response = await API.get("/orders/my-orders");
  return response.data;
};