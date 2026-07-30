import API from "./api";

// Dashboard
export const getDashboard = async () => {
  const { data } = await API.get("/admin/dashboard");
  return data.dashboard;
};

// Users
export const getUsers = async () => {
  const { data } = await API.get("/admin/users");
  return data.users;
};

// Sellers
export const getVendors = async () => {
  const { data } = await API.get("/admin/vendors");
  return data.sellers;
};

// Products
export const getProducts = async () => {
  const { data } = await API.get("/admin/products");
  return data.products;
};

// Orders
export const getOrders = async () => {
  const { data } = await API.get("/admin/orders");
  return data.orders;
};

// Analytics
export const getAnalytics = async () => {
  const { data } = await API.get("/admin/analytics");
  return data.analytics;
};

// Reports
export const getReports = async () => {
  const { data } = await API.get("/admin/reports");
  return data.report;
};