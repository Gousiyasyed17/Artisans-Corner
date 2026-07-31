import API from "./api";

export const getReviews = async (productId) => {
  const { data } = await API.get(`/reviews/${productId}`);
  return data.reviews;
};

export const addReview = async (reviewData) => {
  const { data } = await API.post("/reviews", reviewData);
  return data;
};