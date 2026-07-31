import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../services/cartService";
import API from "../services/api";
import {
  placeOrder,
  createRazorpayOrder,
  verifyPayment,
} from "../services/orderService";

export default function Checkout() {
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(true);
  const [placingOrder, setPlacingOrder] = useState(false);

  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  // ==============================
  // LOAD CART
  // ==============================

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      setLoading(true);

      const cart = await getCart();

      setCartItems(cart?.items || []);
    } catch (error) {
      console.error("Checkout Cart Error:", error);

      alert(
        error.response?.data?.message ||
        "Failed to load cart"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // ADDRESS INPUT
  // ==============================

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // ==============================
  // PRICE CALCULATIONS
  // ==============================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.product?.price || 0) *
      Number(item.quantity || 0),
    0
  );

  const shippingCharge = 0;

  const gst = Math.round(subtotal * 0.18);

  const totalPrice =
    subtotal + shippingCharge + gst - couponDiscount;
  // ==============================
  // VALIDATE ADDRESS
  // ==============================

  const validateForm = () => {
    if (!shippingAddress.fullName.trim()) {
      alert("Please enter your full name");
      return false;
    }

    if (!shippingAddress.phone.trim()) {
      alert("Please enter your phone number");
      return false;
    }

    if (!shippingAddress.address.trim()) {
      alert("Please enter your complete address");
      return false;
    }

    if (!shippingAddress.city.trim()) {
      alert("Please enter your city");
      return false;
    }

    if (!shippingAddress.state.trim()) {
      alert("Please enter your state");
      return false;
    }

    if (!shippingAddress.pincode.trim()) {
      alert("Please enter your pincode");
      return false;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return false;
    }

    return true;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };
  const applyCoupon = async () => {
    try {
      const { data } = await API.post("/coupons/apply", {
        code: coupon,
        total: subtotal,
      });

      setCouponDiscount(data.discount);
      alert("Coupon Applied Successfully");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid Coupon");
    }
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    try {
      setPlacingOrder(true);

      const items = cartItems.map((item) => ({
        product: item.product._id,
        seller:
          item.product.seller?._id ||
          item.product.seller,
        quantity: item.quantity,
        price: item.product.price,
      }));

      const backendPaymentMethod =
        paymentMethod === "COD"
          ? "COD"
          : "Online";

      const orderData = {
        items,

        shippingAddress: {
          fullName: shippingAddress.fullName,
          phone: shippingAddress.phone,
          email: shippingAddress.email,
          address: shippingAddress.address,
          city: shippingAddress.city,
          state: shippingAddress.state,
          pincode: shippingAddress.pincode,
          country: shippingAddress.country,
        },

        totalPrice,
        shippingCharge,
        discount: couponDiscount,

        paymentMethod:
          backendPaymentMethod,
      };

      // ===========================
      // CASH ON DELIVERY
      // ===========================

      if (paymentMethod === "COD") {

        await placeOrder(orderData);

        alert("Order Placed Successfully!");

        navigate("/customer/orders");

        return;
      }

      // ===========================
      // LOAD RAZORPAY SDK
      // ===========================

      const loaded =
        await loadRazorpayScript();

      if (!loaded) {

        alert(
          "Failed to load Razorpay."
        );

        return;

      }

      // ===========================
      // CREATE ORDER
      // ===========================

      const razorpayOrder =
        await createRazorpayOrder(
          totalPrice
        );
      console.log(
        "Razorpay Key:",
        import.meta.env.VITE_RAZORPAY_KEY_ID
      );

      const options = {

        key:
          import.meta.env
            .VITE_RAZORPAY_KEY_ID,

        amount:
          razorpayOrder.order.amount,

        currency:
          razorpayOrder.order.currency,

        name: "Artisans Corner",

        description:
          "Order Payment",

        order_id:
          razorpayOrder.order.id,

        handler: async (
          response
        ) => {
          try {

            await verifyPayment({
              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,
            });

            const result =
              await placeOrder(orderData);

            console.log(
              "Order:",
              result
            );

            alert(
              "Payment Successful!\nOrder Placed Successfully!"
            );

            navigate(
              "/customer/orders"
            );

          } catch (error) {

            console.error(error);

            alert(
              error.response?.data
                ?.message ||
              "Payment verification failed"
            );

          }

        },

        theme: {
          color: "#4B2E20",
        },

        modal: {
          ondismiss: () => {

            alert(
              "Payment Cancelled"
            );

          },
        },

      };

      const paymentObject =
        new window.Razorpay(
          options
        );

      paymentObject.open();

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data
          ?.message ||
        "Payment Failed"
      );

    } finally {

      setPlacingOrder(false);

    }

  };
  // ==============================
  // LOADING
  // ==============================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-[#4B2E20]">
          Loading Checkout...
        </h2>
      </div>
    );
  }

  // ==============================
  // EMPTY CART
  // ==============================

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex flex-col items-center justify-center px-6">

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Your Cart is Empty
        </h1>

        <p className="text-gray-500 mt-4">
          Add products before proceeding to checkout.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="mt-8 bg-[#4B2E20] text-white px-8 py-4 rounded-2xl"
        >
          Continue Shopping
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20] mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* =========================
              LEFT SECTION
          ========================== */}

          <div className="lg:col-span-2 space-y-8">

            {/* SHIPPING ADDRESS */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6 text-[#4B2E20]">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  name="fullName"
                  value={shippingAddress.fullName}
                  onChange={handleAddressChange}
                  placeholder="Full Name"
                  className="border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
                />

                <input
                  type="tel"
                  name="phone"
                  value={shippingAddress.phone}
                  onChange={handleAddressChange}
                  placeholder="Phone Number"
                  className="border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
                />

                <input
                  type="email"
                  name="email"
                  value={shippingAddress.email}
                  onChange={handleAddressChange}
                  placeholder="Email"
                  className="border rounded-xl p-3 outline-none md:col-span-2 focus:border-[#4B2E20]"
                />

                <textarea
                  name="address"
                  value={shippingAddress.address}
                  onChange={handleAddressChange}
                  placeholder="Complete Address"
                  rows="4"
                  className="border rounded-xl p-3 outline-none md:col-span-2 focus:border-[#4B2E20]"
                />

                <input
                  type="text"
                  name="city"
                  value={shippingAddress.city}
                  onChange={handleAddressChange}
                  placeholder="City"
                  className="border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
                />

                <input
                  type="text"
                  name="state"
                  value={shippingAddress.state}
                  onChange={handleAddressChange}
                  placeholder="State"
                  className="border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
                />

                <input
                  type="text"
                  name="pincode"
                  value={shippingAddress.pincode}
                  onChange={handleAddressChange}
                  placeholder="Pincode"
                  className="border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
                />

                <input
                  type="text"
                  name="country"
                  value={shippingAddress.country}
                  onChange={handleAddressChange}
                  placeholder="Country"
                  className="border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
                />

              </div>

            </div>

            {/* PAYMENT */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "COD"}
                    onChange={() =>
                      setPaymentMethod("COD")
                    }
                  />

                  <div>
                    <p className="font-semibold">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay when your order arrives
                    </p>
                  </div>

                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "UPI"}
                    onChange={() =>
                      setPaymentMethod("UPI")
                    }
                  />

                  <div>
                    <p className="font-semibold">
                      UPI
                    </p>

                    <p className="text-sm text-gray-500">
                      Google Pay, PhonePe, Paytm or other UPI apps
                    </p>
                  </div>

                </label>

                <label className="flex items-center gap-3 border rounded-xl p-4 cursor-pointer">

                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "CARD"}
                    onChange={() =>
                      setPaymentMethod("CARD")
                    }
                  />

                  <div>
                    <p className="font-semibold">
                      Credit / Debit Card
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay securely using your card
                    </p>
                  </div>

                </label>

              </div>

              {paymentMethod !== "COD" && (
                <div className="mt-6 bg-[#FFF8F2] p-5 rounded-2xl">

                  <p className="font-semibold text-[#4B2E20]">
                    Online Payment
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Payment gateway integration will process
                    this payment before the order is marked paid.
                  </p>

                </div>
              )}

            </div>

          </div>

          {/* =========================
              RIGHT SECTION
          ========================== */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-24">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Order Summary
              </h2>

              {/* REAL CART PRODUCTS */}

              <div className="space-y-5 max-h-96 overflow-y-auto">

                {cartItems.map((item) => (

                  <div
                    key={item._id}
                    className="flex gap-4 border-b pb-5"
                  >

                    <img
                      src={
                        item.product?.images?.[0] ||
                        "https://picsum.photos/200/200"
                      }
                      alt={
                        item.product?.name ||
                        "Product"
                      }
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="font-semibold text-[#4B2E20]">
                        {item.product?.name}
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Qty: {item.quantity}
                      </p>

                      <p className="font-bold text-[#4B2E20] mt-2">
                        ₹
                        {Number(
                          item.product?.price || 0
                        ).toLocaleString("en-IN")}
                      </p>

                    </div>

                  </div>

                ))}

              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter Coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="border p-3 rounded-lg w-full"
                />

                <button
                  onClick={applyCoupon}
                  className="mt-2 bg-green-600 text-white px-5 py-2 rounded-lg"
                >
                  Apply Coupon
                </button>
              </div>

              {/* PRICE DETAILS */}

              <div className="space-y-4 mt-8">

                <div className="flex justify-between">
                  <span>Subtotal</span>

                  <span>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
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
                    ₹{couponDiscount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>GST (18%)</span>

                  <span>
                    ₹{gst.toLocaleString("en-IN")}
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span className="text-[#4B2E20]">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>

                </div>

              </div>

              {/* DELIVERY */}

              <div className="bg-[#FFF8F2] rounded-2xl p-5 mt-8">

                <h3 className="font-bold">
                  Estimated Delivery
                </h3>

                <p className="text-gray-500 mt-2">
                  3 - 5 Business Days
                </p>

              </div>

              {/* PLACE ORDER */}

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={placingOrder}
                className="w-full bg-[#4B2E20] hover:bg-[#6B4226] disabled:opacity-60 text-white py-4 rounded-2xl mt-8 text-lg font-semibold transition"
              >
                {placingOrder
                  ? "Placing Order..."
                  : paymentMethod === "COD"
                    ? "Place Order"
                    : "Continue to Payment"}
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