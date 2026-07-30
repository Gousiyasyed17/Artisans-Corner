import API from "./api";

// Get all products
export const getProducts = async () => {
  const { data } = await API.get("/products");
  return data.products;
};

// Get single product
export const getProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data.product;
};

// Get seller products
export const getSellerProducts = async () => {
  const { data } = await API.get("/products/seller");
  return data.products;
};

// Delete product
export const deleteProduct = async (id) => {
  const { data } = await API.delete(`/products/${id}`);
  return data;
};

// Create product
export const createProduct = async (product) => {
  const { data } = await API.post("/products", product);
  return data;
};

// Update product
export const updateProduct = async (id, product) => {
  const { data } = await API.put(`/products/${id}`, product);
  return data;
};