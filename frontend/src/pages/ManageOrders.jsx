import React, { useState } from "react";
import {
  Search,
  Eye,
  Truck,
  CheckCircle,
  XCircle,
  Download,
} from "lucide-react";

export default function ManageOrders() {
  const [orders] = useState([
    {
      id: "ORD001",
      customer: "Rahul Sharma",
      seller: "Craft Villa",
      product: "Ceramic Flower Vase",
      amount: "₹999",
      payment: "Paid",
      status: "Delivered",
    },
    {
      id: "ORD002",
      customer: "Priya Singh",
      seller: "Clay Studio",
      product: "Clay Pot",
      amount: "₹1,599",
      payment: "Pending",
      status: "Processing",
    },
    {
      id: "ORD003",
      customer: "Arjun Patel",
      seller: "Wood World",
      product: "Wooden Wall Decor",
      amount: "₹2,499",
      payment: "Paid",
      status: "Shipped",
    },
    {
      id: "ORD004",
      customer: "Sneha Reddy",
      seller: "Art Heaven",
      product: "Macrame Hanging",
      amount: "₹1,299",
      payment: "Refunded",
      status: "Cancelled",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Manage Orders
            </h1>

            <p className="text-gray-500 mt-2">
              Track, manage and monitor all marketplace orders.
            </p>

          </div>

          <button className="bg-[#4B2E20] hover:bg-[#6B4226] text-white px-6 py-3 rounded-xl flex items-center gap-2">

            <Download size={18} />

            Export Orders

          </button>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">

            <h3 className="text-gray-500">
              Total Orders
            </h3>

            <p className="text-3xl font-bold text-[#4B2E20] mt-2">
              25,412
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <h3 className="text-gray-500">
              Delivered
            </h3>

            <p className="text-3xl font-bold text-green-600 mt-2">
              21,350
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <h3 className="text-gray-500">
              Processing
            </h3>

            <p className="text-3xl font-bold text-yellow-600 mt-2">
              2,814
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <h3 className="text-gray-500">
              Cancelled
            </h3>

            <p className="text-3xl font-bold text-red-600 mt-2">
              1,248
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow p-4 flex items-center">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search orders..."
              className="ml-4 outline-none w-full"
            />

          </div>

          <select className="bg-white rounded-2xl shadow p-4">

            <option>All Orders</option>
            <option>Delivered</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Cancelled</option>

          </select>

        </div>

        {/* Orders Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">
                  Order ID
                </th>

                <th>Customer</th>

                <th>Seller</th>

                <th>Product</th>

                <th>Amount</th>

                <th>Payment</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-5 font-semibold">
                    {order.id}
                  </td>

                  <td className="text-center">
                    {order.customer}
                  </td>

                  <td className="text-center">
                    {order.seller}
                  </td>

                  <td className="text-center">
                    {order.product}
                  </td>

                  <td className="text-center font-semibold">
                    {order.amount}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.payment === "Paid"
                          ? "bg-green-100 text-green-700"
                          : order.payment === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.payment}
                    </span>

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

                  <td>

                    <div className="flex justify-center gap-2">

                      <button className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200">

                        <Eye
                          size={18}
                          className="text-blue-600"
                        />

                      </button>

                      <button className="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200">

                        <Truck
                          size={18}
                          className="text-yellow-600"
                        />

                      </button>

                      <button className="bg-green-100 p-2 rounded-lg hover:bg-green-200">

                        <CheckCircle
                          size={18}
                          className="text-green-600"
                        />

                      </button>

                      <button className="bg-red-100 p-2 rounded-lg hover:bg-red-200">

                        <XCircle
                          size={18}
                          className="text-red-600"
                        />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}