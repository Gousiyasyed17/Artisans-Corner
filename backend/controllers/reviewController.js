const Review = require("../models/Review");
const Product = require("../models/Product");

// Add Review
exports.addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;

    const review = await Review.create({
      product: productId,
      user: req.user._id,
      rating,
      comment,
    });

    // Update product rating
    const reviews = await Review.find({ product: productId });

    const avgRating =
      reviews.reduce((sum, item) => sum + item.rating, 0) /
      reviews.length;

    await Product.findByIdAndUpdate(productId, {
      rating: avgRating,
      totalReviews: reviews.length,
    });

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Product Reviews
exports.getProductReviews = async (req, res) => {
  try {

    const reviews = await Review.find({
      product: req.params.productId,
    }).populate("user", "name");

    res.status(200).json({
      success: true,
      reviews,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Review
exports.deleteReview = async (req, res) => {
  try {

    await Review.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};