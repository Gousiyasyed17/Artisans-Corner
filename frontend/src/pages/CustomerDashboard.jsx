import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Heart,
  CreditCard,
  MapPin,
  Package,
  Star,
  Gift,
  ArrowRight,
} from "lucide-react";

export default function CustomerDashboard() {
  const navigate = useNavigate();
  const stats = [
    {
      title: "Total Orders",
      value: "18",
      icon: <ShoppingBag size={28} />,
      color: "bg-amber-100",
    },
    {
      title: "Wishlist",
      value: "12",
      icon: <Heart size={28} />,
      color: "bg-red-100",
    },
    {
      title: "Coupons",
      value: "5",
      icon: <Gift size={28} />,
      color: "bg-green-100",
    },
    {
      title: "Saved Addresses",
      value: "3",
      icon: <MapPin size={28} />,
      color: "bg-blue-100",
    },
  ];

  const orders = [
    {
      id: "#AC1042",
      product: "Luxury Ceramic Vase",
      status: "Delivered",
      price: "₹2,499",
    },
    {
      id: "#AC1043",
      product: "Wooden Wall Decor",
      status: "Shipped",
      price: "₹1,899",
    },
    {
      id: "#AC1044",
      product: "Handmade Basket",
      status: "Processing",
      price: "₹999",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-6">

      <div className="max-w-7xl mx-auto">

        {/* Welcome Banner */}

        <div className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] rounded-3xl text-white p-10 mb-10">

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-lg opacity-90">
            Discover beautiful handcrafted creations and
            track all your orders in one place.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {stats.map((item, index) => (

            <div
              key={index}
              onClick={() => {
                if (item.title === "Total Orders") {
                  navigate("/customer/orders");
                }
              }}
              className="bg-white rounded-3xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition"
            >

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold mt-5 text-[#4B2E20]">
                {item.value}
              </h2>

              <p className="text-gray-500 mt-1">
                {item.title}
              </p>

            </div>

          ))}

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Recent Orders */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-[#4B2E20]">
                Recent Orders
              </h2>

              <button
                onClick={() => navigate("/customer/orders")}
                className="flex items-center gap-2 text-[#4B2E20] font-semibold hover:text-[#8B5E3C]"
              >
                View All
                <ArrowRight size={18} />
              </button>

            </div>
            <div className="space-y-5">

              {orders.map((order) => (

                <div
                  key={order.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between border rounded-2xl p-5 hover:shadow-md transition"
                >

                  <div>

                    <h3 className="font-bold text-lg text-[#4B2E20]">
                      {order.product}
                    </h3>

                    <p className="text-gray-500 mt-1">
                      Order ID : {order.id}
                    </p>

                  </div>

                  <div className="mt-4 md:mt-0 text-right">

                    <p className="font-bold text-xl">
                      {order.price}
                    </p>

                    <span
                      className={`inline-block mt-2 px-4 py-1 rounded-full text-sm ${order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {order.status}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Sidebar */}

          <div className="space-y-6">

            {/* Wishlist */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <div className="flex items-center gap-3 mb-4">

                <Heart className="text-red-500" />

                <h2 className="text-xl font-bold text-[#4B2E20]">
                  Wishlist
                </h2>

              </div>

              <p className="text-4xl font-bold">
                12
              </p>

              <p className="text-gray-500 mt-2">
                Saved handcrafted products
              </p>

            </div>

            {/* Rewards */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <div className="flex items-center gap-3 mb-4">

                <Gift className="text-green-600" />

                <h2 className="text-xl font-bold text-[#4B2E20]">
                  Rewards
                </h2>

              </div>

              <p className="text-4xl font-bold">
                1,250
              </p>

              <p className="text-gray-500 mt-2">
                Reward points earned
              </p>

            </div>

            {/* Reviews */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <div className="flex items-center gap-3 mb-4">

                <Star className="text-yellow-500" />

                <h2 className="text-xl font-bold text-[#4B2E20]">
                  Reviews
                </h2>

              </div>

              <p className="text-4xl font-bold">
                8
              </p>

              <p className="text-gray-500 mt-2">
                Reviews submitted
              </p>

            </div>

            {/* Quick Actions */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

              <h2 className="text-xl font-bold text-[#4B2E20] mb-5">
                Quick Actions
              </h2>

              <div className="space-y-3">

                <button className="w-full flex items-center gap-3 bg-[#FFF8F2] hover:bg-[#F4ECE3] rounded-xl p-4 transition">
                  <ShoppingBag />
                  Shop Now
                </button>

                <button
                  onClick={() => navigate("/customer/orders")}
                  className="w-full flex items-center gap-3 bg-[#FFF8F2] hover:bg-[#F4ECE3] rounded-xl p-4 transition"
                >
                  <Package />
                  Track Orders
                </button>

                <button className="w-full flex items-center gap-3 bg-[#FFF8F2] hover:bg-[#F4ECE3] rounded-xl p-4 transition">
                  <CreditCard />
                  Payment Methods
                </button>

                <button className="w-full flex items-center gap-3 bg-[#FFF8F2] hover:bg-[#F4ECE3] rounded-xl p-4 transition">
                  <MapPin />
                  Manage Addresses
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}