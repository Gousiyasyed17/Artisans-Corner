import React, { useEffect, useState } from "react";
import {
  Search,
  Eye,
  Truck,
  CheckCircle,
} from "lucide-react";
import {
  getSellerOrders,
  updateOrderStatus,
} from "../services/orderService";

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
  try {
    const response = await getSellerOrders();

    console.log(response);

    setOrders(response.orders || response.data?.orders || []);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  const changeStatus = async (id, status) => {
  try {
    await updateOrderStatus(id, status);

    alert(`Order marked as ${status}`);

    loadOrders();
  } catch (error) {
    console.error(error);

    alert("Failed to update order");
  }
};

  const filteredOrders = orders.filter((order) =>
    (order._id || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
            placeholder="Search Orders..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="ml-4 w-full outline-none"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">
                  Order ID
                </th>

                <th>Customer</th>

                <th>Product</th>

                <th>Amount</th>

                <th>Payment</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center p-10"
                  >
                    Loading...
                  </td>

                </tr>

              ) : filteredOrders.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center p-10 text-gray-500"
                  >
                    No Orders Found
                  </td>

                </tr>

              ) : (

                filteredOrders.map((order) => (

                  <tr
                    key={order._id}
                    className="border-t"
                  >

                    <td className="p-5 font-semibold">
                      {order._id.slice(-6)}
                    </td>

                    <td className="text-center">
                      {order.customer?.name || "Customer"}
                    </td>

                    <td className="text-center">
                      {order.items?.[0]?.product?.name || "Product"}
                    </td>

                    <td className="text-center font-semibold">
                      ₹{order.totalPrice}
                    </td>

                    <td className="text-center">
                      {order.paymentMethod}
                    </td>

                    <td className="text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          order.orderStatus === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.orderStatus ===
                              "Processing"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.orderStatus ===
                              "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {order.orderStatus}
                      </span>

                    </td>

                    <td>

                      <div className="flex justify-center gap-2">

                        <button className="bg-blue-100 p-2 rounded-lg">
                          <Eye size={18} />
                        </button>

                        <button
                          onClick={() =>
                            changeStatus(order._id, "Shipped")
                          }
                          className="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200"
                        >
                          <Truck size={18} />
                        </button>

                        <button
                          onClick={() =>
                            changeStatus(order._id, "Delivered")
                          }
                          className="bg-green-100 p-2 rounded-lg hover:bg-green-200"
                        >
                          <CheckCircle size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}