import API from "./api";

export const getProducts = async () => {
  const { data } = await API.get("/products");
  return data.products;
};

export const getProductById = async (id) => {
  const { data } = await API.get(`/products/${id}`);
  return data.product;
};