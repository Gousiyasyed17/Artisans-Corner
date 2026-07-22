import React from "react";
import {
  Package,
  ShoppingCart,
  IndianRupee,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export default function SellerDashboard() {
  const stats = [
    {
      title: "Total Products",
      value: "48",
      icon: <Package size={28} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Orders",
      value: "326",
      icon: <ShoppingCart size={28} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Earnings",
      value: "₹2,45,800",
      icon: <IndianRupee size={28} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Store Rating",
      value: "4.9 ★",
      icon: <Star size={28} />,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Seller Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your artisan store.
        </p>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-6"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="mt-5 text-gray-500">
                {item.title}
              </h2>

              <p className="text-3xl font-bold text-[#4B2E20] mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Recent Orders */}

        <div className="bg-white rounded-3xl shadow-md mt-10 p-6">

          <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
            Recent Orders
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">Order ID</th>
                  <th className="text-left">Customer</th>
                  <th className="text-left">Product</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Status</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="py-4">#AR1201</td>
                  <td>Rahul Sharma</td>
                  <td>Ceramic Vase</td>
                  <td>₹999</td>

                  <td>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Delivered
                    </span>
                  </td>

                </tr>

                <tr className="border-b">

                  <td className="py-4">#AR1202</td>
                  <td>Priya Singh</td>
                  <td>Wooden Wall Art</td>
                  <td>₹2,499</td>

                  <td>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      Processing
                    </span>
                  </td>

                </tr>

                <tr>

                  <td className="py-4">#AR1203</td>
                  <td>Arjun Patel</td>
                  <td>Macrame Decor</td>
                  <td>₹1,299</td>

                  <td>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      Shipped
                    </span>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

        {/* Store Performance */}

        <div className="grid lg:grid-cols-2 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex items-center gap-3">

              <TrendingUp className="text-green-600" />

              <h2 className="text-xl font-bold text-[#4B2E20]">
                Sales Growth
              </h2>

            </div>

            <p className="mt-4 text-gray-600">
              Your sales increased by
              <span className="font-bold text-green-600">
                {" "}18%
              </span>
              {" "}this month compared to last month.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex items-center gap-3">

              <Users className="text-blue-600" />

              <h2 className="text-xl font-bold text-[#4B2E20]">
                Customers
              </h2>

            </div>

            <p className="mt-4 text-gray-600">
              145 customers purchased from your store this month.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}