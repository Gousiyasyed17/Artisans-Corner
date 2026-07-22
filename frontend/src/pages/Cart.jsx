import React, { useState } from "react";
import { Trash2, Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Ceramic Vase",
      artisan: "Priya Handicrafts",
      price: 2499,
      oldPrice: 3299,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1616628182509-6b79fba399a7?w=600",
    },
    {
      id: 2,
      name: "Handwoven Basket",
      artisan: "Village Crafts",
      price: 1499,
      oldPrice: 1899,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-10">

          <ShoppingBag
            size={35}
            className="text-[#4B2E20]"
          />

          <h1 className="text-4xl font-bold text-[#4B2E20]">
            Shopping Cart
          </h1>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-48 h-48 rounded-2xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Sold by {item.artisan}
                  </p>

                  <div className="flex items-center gap-4 mt-4">

                    <span className="text-3xl font-bold text-[#4B2E20]">
                      ₹{item.price}
                    </span>

                    <span className="line-through text-gray-400">
                      ₹{item.oldPrice}
                    </span>

                  </div>

                  {/* Quantity */}

                  <div className="flex items-center gap-4 mt-6">

                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-10 h-10 rounded-lg bg-gray-100"
                    >
                      <Minus className="mx-auto" />
                    </button>

                    <span className="font-bold text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-10 h-10 rounded-lg bg-gray-100"
                    >
                      <Plus className="mx-auto" />
                    </button>

                  </div>

                  {/* Actions */}

                  <div className="flex gap-6 mt-6">

                    <button
                      className="flex items-center gap-2 text-red-600"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>

                    <button className="flex items-center gap-2 text-[#4B2E20]">

                      <Heart size={18} />

                      Move to Wishlist

                    </button>

                  </div>

                </div>

              </div>

            ))}
            </div>  
             {/* End of Cart Items */}
                       {/* Order Summary */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-6">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Order Summary
              </h2>

              {/* Coupon */}

              <div>

                <label className="font-semibold">
                  Coupon Code
                </label>

                <div className="flex mt-3">

                  <input
                    type="text"
                    placeholder="Enter Coupon"
                    className="flex-1 border rounded-l-xl p-3 outline-none"
                  />

                  <button className="bg-[#4B2E20] text-white px-6 rounded-r-xl">
                    Apply
                  </button>

                </div>

              </div>

              {/* Price Details */}

              <div className="space-y-4 mt-8">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹500
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span>
                    ₹{Math.round(subtotal * 0.18)}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span className="text-[#4B2E20]">

                    ₹
                    {subtotal -
                      500 +
                      Math.round(subtotal * 0.18)}

                  </span>

                </div>

              </div>

              {/* Delivery */}

              <div className="bg-[#FFF8F2] rounded-2xl p-5 mt-8">

                <h3 className="font-bold">
                  Estimated Delivery
                </h3>

                <p className="text-gray-500 mt-2">
                  3 - 5 Business Days
                </p>

              </div>

              {/* Buttons */}

              <Link to="/checkout">

                <button className="w-full bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-2xl mt-8 text-lg font-semibold">

                  Proceed To Checkout

                </button>

              </Link>

              <Link to="/products">

                <button className="w-full border border-[#4B2E20] text-[#4B2E20] py-4 rounded-2xl mt-4 hover:bg-[#FFF8F2]">

                  Continue Shopping

                </button>

              </Link>

              <div className="mt-8 text-sm text-gray-500 space-y-2">

                <p>✅ 100% Secure Payment</p>

                <p>🚚 Free Shipping</p>

                <p>↩️ 7-Day Easy Returns</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


    