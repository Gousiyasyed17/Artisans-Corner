import API from "./api";

export const getCart = async () => {
  const response = await API.get("/cart");
  return response.data;
};

export const addToCart = async (data) => {
  const response = await API.post("/cart", data);
  return response.data;
};

export const removeCart = async (id) => {
  const response = await API.delete(`/cart/${id}`);
  return response.data;
};