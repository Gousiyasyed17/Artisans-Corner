const Wishlist = require("../models/Wishlist");

// Add Product to Wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;

    let wishlist = await Wishlist.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = new Wishlist({
        user: req.user._id,
        products: [],
      });
    }

    if (!wishlist.products.includes(productId)) {
      wishlist.products.push(productId);
    }

    await wishlist.save();

    res.status(200).json({
      success: true,
      message: "Product added to wishlist",
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Wishlist
exports.getWishlist = async (req, res) => {
  try {

    const wishlist = await Wishlist.findOne({
      user: req.user._id,
    }).populate("products");

    res.status(200).json({
      success: true,
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Product
exports.removeWishlistItem = async (req, res) => {
  try {

    const wishlist = await Wishlist.findOne({
      user: req.user._id,
    });

    wishlist.products = wishlist.products.filter(
      (id) => id.toString() !== req.params.productId
    );

    await wishlist.save();

    res.status(200).json({
      success: true,
      message: "Removed from wishlist",
      wishlist,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};