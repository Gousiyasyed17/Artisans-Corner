const Review = require("../models/Review");
const Product = require("../models/Product");
const Order = require("../models/Order");

// Add Review
exports.addReview = async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    // ===============================
// Check if customer purchased product
// ===============================

const purchased = await Order.findOne({
  customer: req.user._id,
  "items.product": productId,
  orderStatus: "Delivered",
});

if (!purchased) {
  return res.status(400).json({
    success: false,
    message: "You can review only purchased products",
  });
}

// ===============================
// Prevent duplicate review
// ===============================

const alreadyReviewed = await Review.findOne({
  product: productId,
  user: req.user._id,
});

if (alreadyReviewed) {
  return res.status(400).json({
    success: false,
    message: "You have already reviewed this product",
  });
}

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

exports.updateReview = async (req, res) => {
  try {

    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    review.rating = req.body.rating;
    review.comment = req.body.comment;

    await review.save();

    res.json({
      success: true,
      review,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

exports.replyReview = async (req, res) => {

  try {

    const review = await Review.findById(req.params.id);

    review.sellerReply = req.body.reply;

    await review.save();

    res.json({
      success: true,
      review,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};