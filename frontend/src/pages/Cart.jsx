import React, { useEffect, useState } from "react";
import {
  Trash2,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  getCart,
  updateCart,
  removeCart,
} from "../services/cartService";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // LOAD CART
  // =========================

  const loadCart = async () => {
    try {
      setLoading(true);

      const cart = await getCart();

      setCartItems(cart?.items || []);
    } catch (error) {
      console.error("Failed to load cart:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQty = async (id, quantity) => {
    try {
      await updateCart(id, quantity + 1);
      await loadCart();
    } catch (error) {
      console.error("Failed to increase quantity:", error);
      alert("Failed to update quantity");
    }
  };

  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQty = async (id, quantity) => {
    if (quantity <= 1) {
      return;
    }

    try {
      await updateCart(id, quantity - 1);
      await loadCart();
    } catch (error) {
      console.error("Failed to decrease quantity:", error);
      alert("Failed to update quantity");
    }
  };

  // =========================
  // REMOVE ITEM
  // =========================

  const removeItem = async (id) => {
    try {
      await removeCart(id);
      await loadCart();
    } catch (error) {
      console.error("Failed to remove product:", error);
      alert("Failed to remove product");
    }
  };

  // =========================
  // VALID CART ITEMS
  // =========================

  const validCartItems = cartItems.filter(
    (item) => item && item.product
  );

  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = validCartItems.reduce(
    (total, item) =>
      total +
      (Number(item.product?.price) || 0) *
        (Number(item.quantity) || 0),
    0
  );

  // =========================
  // TAX / DISCOUNT / TOTAL
  // =========================

  const tax = Math.round(subtotal * 0.18);

  const discount = subtotal > 0 ? 500 : 0;

  const total = Math.max(
    0,
    subtotal - discount + tax
  );

  // =========================
  // IMAGE
  // =========================

  const getProductImage = (product) => {
    const image = product?.images?.[0];

    if (!image) {
      return "https://picsum.photos/400/400";
    }

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    return `http://localhost:5000/${image}`;
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag
            size={45}
            className="text-[#4B2E20] mx-auto"
          />

          <h2 className="text-2xl font-bold text-[#4B2E20] mt-4">
            Loading Cart...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex items-center gap-3 mb-10">
          <ShoppingBag
            size={35}
            className="text-[#4B2E20]"
          />

          <h1 className="text-4xl font-bold text-[#4B2E20]">
            Shopping Cart
          </h1>
        </div>

        {/* =========================
            EMPTY CART
        ========================= */}

        {validCartItems.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg py-20 px-8 text-center">

            <ShoppingBag
              size={65}
              className="mx-auto text-[#B8860B]"
            />

            <h2 className="text-3xl font-bold text-[#4B2E20] mt-6">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Discover beautiful handmade creations from
              our artisans.
            </p>

            <Link to="/products">
              <button className="bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-4 rounded-xl mt-8 font-semibold transition">
                Explore Products
              </button>
            </Link>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* =========================
                CART ITEMS
            ========================= */}

            <div className="lg:col-span-2 space-y-6">

              {validCartItems.map((item) => {
                const product = item.product;

                const oldPrice = Math.round(
                  Number(product.price || 0) * 1.2
                );

                return (
                  <div
                    key={item._id}
                    className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
                  >

                    {/* Product Image */}

                    <Link to={`/product/${product._id}`}>
                      <img
                        src={getProductImage(product)}
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://picsum.photos/400/400";
                        }}
                        className="w-48 h-48 rounded-2xl object-cover"
                      />
                    </Link>

                    {/* Product Details */}

                    <div className="flex-1">

                      <Link
                        to={`/product/${product._id}`}
                      >
                        <h2 className="text-2xl font-bold text-[#4B2E20] hover:text-[#B8860B] transition">
                          {product.name}
                        </h2>
                      </Link>

                      <p className="text-gray-500 mt-2">
                        Sold by{" "}
                        {product.seller?.name ||
                          "Artisan"}
                      </p>

                      {/* Price */}

                      <div className="flex items-center gap-4 mt-4">

                        <span className="text-3xl font-bold text-[#4B2E20]">
                          ₹{product.price}
                        </span>

                        <span className="line-through text-gray-400">
                          ₹{oldPrice}
                        </span>

                      </div>

                      {/* Quantity */}

                      <div className="flex items-center gap-4 mt-6">

                        <button
                          type="button"
                          onClick={() =>
                            decreaseQty(
                              item._id,
                              item.quantity
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                          <Minus
                            size={18}
                            className="mx-auto"
                          />
                        </button>

                        <span className="font-bold text-xl min-w-8 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQty(
                              item._id,
                              item.quantity
                            )
                          }
                          className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                        >
                          <Plus
                            size={18}
                            className="mx-auto"
                          />
                        </button>

                      </div>

                      {/* Actions */}

                      <div className="flex flex-wrap gap-6 mt-6">

                        <button
                          type="button"
                          onClick={() =>
                            removeItem(item._id)
                          }
                          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                        >
                          <Trash2 size={18} />
                          Remove
                        </button>

                        <button
                          type="button"
                          className="flex items-center gap-2 text-[#4B2E20] hover:text-[#B8860B] font-medium"
                        >
                          <Heart size={18} />
                          Move to Wishlist
                        </button>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* =========================
                ORDER SUMMARY
            ========================= */}

            <div>
              <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-28">

                <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                  Order Summary
                </h2>

                {/* Coupon */}

                <div>
                  <label className="font-semibold text-[#4B2E20]">
                    Coupon Code
                  </label>

                  <div className="flex mt-3">

                    <input
                      type="text"
                      placeholder="Enter Coupon"
                      className="min-w-0 flex-1 border border-gray-300 rounded-l-xl p-3 outline-none focus:border-[#4B2E20]"
                    />

                    <button
                      type="button"
                      className="bg-[#4B2E20] hover:bg-[#6B4226] text-white px-5 rounded-r-xl transition"
                    >
                      Apply
                    </button>

                  </div>
                </div>

                {/* Price Details */}

                <div className="space-y-4 mt-8">

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal
                    </span>

                    <span className="font-semibold">
                      ₹{subtotal}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Shipping
                    </span>

                    <span className="text-green-600 font-semibold">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Discount
                    </span>

                    <span className="text-green-600 font-semibold">
                      -₹{discount}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Tax (18%)
                    </span>

                    <span className="font-semibold">
                      ₹{tax}
                    </span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-2xl font-bold">

                    <span>
                      Total
                    </span>

                    <span className="text-[#4B2E20]">
                      ₹{total}
                    </span>

                  </div>

                </div>

                {/* Delivery */}

                <div className="bg-[#FFF8F2] rounded-2xl p-5 mt-8">

                  <h3 className="font-bold text-[#4B2E20]">
                    Estimated Delivery
                  </h3>

                  <p className="text-gray-500 mt-2">
                    3 - 5 Business Days
                  </p>

                </div>

                {/* Checkout */}

                <Link
                  to="/checkout"
                  className="block"
                >
                  <button className="w-full bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-2xl mt-8 text-lg font-semibold transition">
                    Proceed To Checkout
                  </button>
                </Link>

                {/* Continue Shopping */}

                <Link
                  to="/products"
                  className="block"
                >
                  <button className="w-full border border-[#4B2E20] text-[#4B2E20] py-4 rounded-2xl mt-4 hover:bg-[#FFF8F2] transition">
                    Continue Shopping
                  </button>
                </Link>

                {/* Benefits */}

                <div className="mt-8 text-sm text-gray-500 space-y-2">

                  <p>
                    ✅ 100% Secure Payment
                  </p>

                  <p>
                    🚚 Free Shipping
                  </p>

                  <p>
                    ↩️ 7-Day Easy Returns
                  </p>

                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}