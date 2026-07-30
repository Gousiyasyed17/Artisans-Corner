import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import {
  getDashboard,
  getOrders,
} from "../services/adminService";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState({
    users: 0,
    sellers: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });

  const [recentOrders, setRecentOrders] = useState([]);
  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const dashboardData = await getDashboard();
      setDashboard(dashboardData);

      const orders = await getOrders();
      setRecentOrders(orders.slice(0, 5));

    } catch (error) {
      console.log(error);
    }
  };

  const stats = [
    {
      title: "Total Users",
      value: dashboard.users,
      icon: <Users size={32} className="text-blue-600" />,
    },
    {
      title: "Total Sellers",
      value: dashboard.sellers,
      icon: <Store size={32} className="text-orange-600" />,
    },
    {
      title: "Products",
      value: dashboard.products,
      icon: <Package size={32} className="text-green-600" />,
    },
    {
      title: "Orders",
      value: dashboard.orders,
      icon: <ShoppingCart size={32} className="text-purple-600" />,
    },
    {
      title: "Revenue",
      value: `₹${dashboard.revenue}`,
      icon: <IndianRupee size={32} className="text-emerald-600" />,
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
                    key={order._id.slice(-6)}
                    className="border-t"
                  >

                    <td className="p-4 font-semibold">
                      {order._id.slice(-6)}
                    </td>

                    <td className="text-center">
                      {order.customer?.name}
                    </td>

                    <td className="text-center">
                      {order.items?.[0]?.product?.name}
                    </td>

                    <td className="text-center font-semibold">
                      ₹{order.totalPrice}
                    </td>

                    <td className="text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${order.orderStatus === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.orderStatus === "Processing"
                              ? "bg-yellow-100 text-yellow-700"
                              : order.orderStatus === "Shipped"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-700"
                          }`}
                      >
                        {order.orderStatus}
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

            <button
              onClick={() => navigate("/admin/users")}
              className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]"
            >
              Manage Users
            </button>

            <button
              onClick={() => navigate("/admin/vendors")}
              className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]"
            >
              Manage Sellers
            </button>

            <button
              onClick={() => navigate("/admin/products")}
              className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]"
            >
              Manage Products
            </button>

            <button
              onClick={() => navigate("/admin/reports")}
              className="bg-[#4B2E20] text-white py-4 rounded-xl hover:bg-[#6B4226]"
            >
              View Reports
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}