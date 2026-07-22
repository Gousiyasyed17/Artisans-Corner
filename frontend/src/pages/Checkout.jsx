import React, { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20] mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Section */}

          <div className="lg:col-span-2 space-y-8">

            {/* Shipping Address */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 text-[#4B2E20]">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-xl p-3 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border rounded-xl p-3 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-xl p-3 outline-none md:col-span-2"
                />

                <textarea
                  placeholder="Complete Address"
                  rows="4"
                  className="border rounded-xl p-3 outline-none md:col-span-2"
                ></textarea>

                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-xl p-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="border rounded-xl p-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="Pincode"
                  className="border rounded-xl p-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="Country"
                  defaultValue="India"
                  className="border rounded-xl p-3 outline-none"
                />

              </div>

            </div>

            {/* Payment Method */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                  <input
                    type="radio"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                  />

                  Cash on Delivery

                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                  <input
                    type="radio"
                    checked={paymentMethod === "UPI"}
                    onChange={() => setPaymentMethod("UPI")}
                  />

                  UPI

                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                  <input
                    type="radio"
                    checked={paymentMethod === "CARD"}
                    onChange={() => setPaymentMethod("CARD")}
                  />

                  Credit / Debit Card

                </label>

              </div>

            </div>
            
          </div>
                    {/* Right Section */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-6">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Order Summary
              </h2>

              {/* Product */}

              <div className="flex gap-4 border-b pb-5">

                <img
                  src="https://images.unsplash.com/photo-1616628182509-6b79fba399a7?w=400"
                  alt="Product"
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div>

                  <h3 className="font-semibold">
                    Premium Ceramic Vase
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Qty : 1
                  </p>

                  <p className="font-bold text-[#4B2E20] mt-2">
                    ₹2,499
                  </p>

                </div>

              </div>

              {/* Coupon */}

              <div className="mt-6">

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
                  <span>₹2,499</span>
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
                  <span>GST (18%)</span>
                  <span>₹450</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span className="text-[#4B2E20]">
                    ₹2,449
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

              {/* Place Order */}

              <button className="w-full bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-2xl mt-8 text-lg font-semibold">

                Place Order

              </button>

              <div className="mt-6 text-sm text-gray-500 space-y-2">

                <p>🔒 Secure Payment</p>

                <p>🚚 Free Shipping</p>

                <p>↩️ Easy Returns</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
