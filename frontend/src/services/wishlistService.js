import API from "./api";

// Get logged-in user's wishlist
export const getWishlist = async () => {
  const { data } = await API.get("/wishlist");
  return data.wishlist;
};

// Add product to wishlist
export const addToWishlist = async (productId) => {
  const { data } = await API.post("/wishlist", {
    productId,
  });

  return data;
};

// Remove product from wishlist
export const removeFromWishlist = async (productId) => {
  const { data } = await API.delete(
    `/wishlist/${productId}`
  );

  return data;
};