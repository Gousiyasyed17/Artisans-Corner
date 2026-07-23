import API from "./api";

export const getWishlist = async () => {
  const response = await API.get("/wishlist");
  return response.data;
};

export const addWishlist = async (data) => {
  const response = await API.post("/wishlist", data);
  return response.data;
};

export const removeWishlist = async (id) => {
  const response = await API.delete(`/wishlist/${id}`);
  return response.data;
};