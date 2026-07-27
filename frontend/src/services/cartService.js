import API from "./api";

// Get Cart
export const getCart = async () => {
  const { data } = await API.get("/cart");
  return data.cart;
};

// Add To Cart
export const addToCart = async (productId, quantity = 1) => {
  const { data } = await API.post("/cart", {
    productId,
    quantity,
  });

  return data;
};

// Update Quantity
export const updateCart = async (itemId, quantity) => {
  const { data } = await API.put(`/cart/${itemId}`, {
    quantity,
  });

  return data;
};

// Remove Item
export const removeCart = async (itemId) => {
  const { data } = await API.delete(`/cart/${itemId}`);

  return data;
};