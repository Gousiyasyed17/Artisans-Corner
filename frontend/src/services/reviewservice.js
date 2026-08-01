import API from "./api";

// Get reviews
export const getReviews = async (productId) => {
  const { data } = await API.get(`/reviews/${productId}`);
  return data.reviews;
};

// Add review
export const addReview = async (reviewData) => {
  const { data } = await API.post("/reviews", reviewData);
  return data;
};

// Update review
export const updateReview = async (id, reviewData) => {
  const { data } = await API.put(`/reviews/${id}`, reviewData);
  return data;
};
s
// Delete review
export const deleteReview = async (id) => {
  const { data } = await API.delete(`/reviews/${id}`);
  return data;
};