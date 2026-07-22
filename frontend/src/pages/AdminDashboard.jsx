import React from "react";
import {
  Users,
  Store,
  Package,
  ShoppingCart,
  IndianRupee,
  UserCheck,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,540",
      icon: <Users size={32} className="text-blue-600" />,
    },
    {
      title: "Total Sellers",
      value: "1,248",
      icon: <Store size={32} className="text-orange-600" />,
    },
    {
      title: "Products",
      value: "8,936",
      icon: <Package size={32} className="text-green-600" />,
    },
    {
      title: "Orders",
      value: "25,412",
      icon: <ShoppingCart size={32} className="text-purple-600" />,
    },
    {
      title: "Revenue",
      value: "₹18,52,600",
      icon: <IndianRupee size={32} className="text-emerald-600" />,
    },
    {
      title: "Pending Sellers",
      value: "32",
      icon: <UserCheck size={32} className="text-red-500" />,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD1021",
      customer: "Rahul Sharma",
      seller: "Craft Villa",
      amount: "₹2,450",
      status: "Delivered",
    },
    {
      id: "#ORD1022",
      customer: "Ayesha Khan",
      seller: "Clay Studio",
      amount: "₹1,200",
      status: "Processing",
    },
    {
      id: "#ORD1023",
      customer: "Riya Patel",
      seller: "Wood World",
      amount: "₹3,890",
      status: "Pending",
    },
    {
      id: "#ORD1024",
      customer: "Arjun Kumar",
      seller: "Art Heaven",
      amount: "₹890",
      status: "Shipped",
    },
  ];

  const pendingVendors = [
    "Handmade Dreams",
    "Village Arts",
    "Indian Pottery",
    "Wood Creations",
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor and manage the Artisan Corner marketplace.
            </p>
          </div>

          <button className="bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226]">
            Generate Report
          </button>
        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow p-6"
            >
              <div className="flex justify-between items-center">
                {item.icon}

                <TrendingUp
                  size={22}
                  className="text-green-500"
                />
              </div>

              <h3 className="text-gray-500 mt-5">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#4B2E20] mt-2">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* Recent Orders */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          <div className="lg:col-span-2 bg-white rounded-3xl shadow p-6">

            <h2 className="text-2xl font-bold text-[#4B2E20] mb-5">
              Recent Orders
            </h2>

            <table className="w-full">

              <thead className="bg-[#F5ECE2]">

                <tr>
                  <th className="text-left p-4">Order</th>
                  <th>Customer</th>
                  <th>Seller</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {recentOrders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-t"
                  >

                    <td className="p-4 font-semibold">
                      {order.id}
                    </td>

                    <td className="text-center">
                      {order.customer}
                    </td>

                    <td className="text-center">
                      {order.seller}
                    </td>

                    <td className="text-center font-semibold">
                      {order.amount}
                    </td>

                    <td className="text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Pending Approvals */}

          <div className="bg-white rounded-3xl shadow p-6">

            <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
              Pending Seller Approvals
            </h2>

            {pendingVendors.map((vendor) => (

              <div
                key={vendor}
                className="flex justify-between items-center border-b py-4"
              >

                <div className="flex items-center gap-3">

                  <Clock className="text-orange-500" />

                  <span>{vendor}</span>

                </div>

                <button className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700">
                  Approve
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-3xl shadow p-8 mt-10">

          <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-4 gap-5">

            <button className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]">
              Manage Users
            </button>

            <button className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]">
              Manage Sellers
            </button>

            <button className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]">
              Manage Products
            </button>

            <button className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]">
              View Reports
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}