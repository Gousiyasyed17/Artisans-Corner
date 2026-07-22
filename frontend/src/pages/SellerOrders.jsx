import React from "react";
import { Search, Eye, Truck, CheckCircle } from "lucide-react";

const orders = [
  {
    id: "#ART1201",
    customer: "Rahul Sharma",
    product: "Ceramic Flower Vase",
    amount: "₹999",
    payment: "Online",
    status: "Delivered",
  },
  {
    id: "#ART1202",
    customer: "Priya Singh",
    product: "Wooden Wall Decor",
    amount: "₹2,499",
    payment: "COD",
    status: "Processing",
  },
  {
    id: "#ART1203",
    customer: "Arjun Patel",
    product: "Macrame Hanging",
    amount: "₹1,299",
    payment: "Online",
    status: "Shipped",
  },
  {
    id: "#ART1204",
    customer: "Sneha Reddy",
    product: "Clay Lamp",
    amount: "₹799",
    payment: "Online",
    status: "Pending",
  },
];

export default function SellerOrders() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Seller Orders
        </h1>

        <p className="text-gray-500 mt-2">
          View and manage customer orders.
        </p>

        {/* Search */}

        <div className="bg-white rounded-2xl shadow p-5 flex items-center mt-8">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search orders..."
            className="ml-4 w-full outline-none"
          />

        </div>

        {/* Orders Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">Order ID</th>
                <th>Customer</th>
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
                  className="border-t"
                >

                  <td className="p-5 font-semibold">
                    {order.id}
                  </td>

                  <td className="text-center">
                    {order.customer}
                  </td>

                  <td className="text-center">
                    {order.product}
                  </td>

                  <td className="text-center font-semibold">
                    {order.amount}
                  </td>

                  <td className="text-center">
                    {order.payment}
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

                      <button className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200">
                        <Eye size={18} />
                      </button>

                      <button className="bg-yellow-100 text-yellow-700 p-2 rounded-lg hover:bg-yellow-200">
                        <Truck size={18} />
                      </button>

                      <button className="bg-green-100 text-green-700 p-2 rounded-lg hover:bg-green-200">
                        <CheckCircle size={18} />
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