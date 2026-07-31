import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Package,
  Calendar,
  CreditCard,
  Truck,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import API from "../services/api";
import { getMyOrders } from "../services/orderService";

export default function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await getMyOrders();

      setOrders(data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = useMemo(() => {
    let data = [...orders];

    if (statusFilter !== "All") {
      data = data.filter(
        (order) =>
          order.orderStatus === statusFilter
      );
    }

    if (search.trim()) {
      data = data.filter((order) =>
        order.invoiceNumber
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    return data;
  }, [orders, search, statusFilter]);

  const badgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Shipped":
        return "bg-purple-100 text-purple-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      case "Returned":
        return "bg-gray-200 text-gray-700";

      default:
        return "bg-gray-100";
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#4B2E20]">
          Loading Orders...
        </h1>
      </div>
    );
  }
  const downloadInvoice = async (orderId) => {
    try {
      const response = await API.get(
        `/invoice/${orderId}`,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data])
      );

      const link = document.createElement("a");

      link.href = url;

      link.download = `Invoice-${orderId}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

    } catch (error) {

      console.log(error);

      alert("Failed to download invoice");

    }
  };
  const cancelOrder = async (orderId) => {
    try {
      await API.put(`/orders/${orderId}/cancel`);

      alert("Order cancelled successfully");

      loadOrders();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to cancel order"
      );
    }
  };
  const returnOrder = async (id) => {
    try {
      await API.put(`/orders/${id}/return`);

      alert("Return request submitted");

      loadOrders();

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed"
      );
    }
  };

  if (filteredOrders.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex flex-col items-center justify-center">

        <Package
          size={80}
          className="text-[#4B2E20]"
        />

        <h1 className="text-4xl font-bold text-[#4B2E20] mt-6">
          No Orders Found
        </h1>

        <p className="text-gray-500 mt-3">
          You haven't placed any orders yet.
        </p>

        <Link
          to="/products"
          className="mt-8 bg-[#4B2E20] text-white px-8 py-4 rounded-2xl"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20] mb-10">
          My Orders
        </h1>

        {/* Search + Filter */}

        <div className="flex flex-col lg:flex-row gap-5 justify-between mb-10">

          <div className="relative lg:w-96">

            <Search
              size={20}
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search Invoice..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full pl-12 pr-4 py-3 rounded-xl border outline-none"
            />

          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="border rounded-xl px-5 py-3"
          >
            <option>All</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
            <option>Returned</option>
          </select>

        </div>

        <div className="space-y-8">

          {filteredOrders.map((order) => (

            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <div className="flex justify-between flex-wrap gap-4">

                <div>

                  <h2 className="text-xl font-bold text-[#4B2E20]">

                    Invoice :
                    {" "}
                    {order.invoiceNumber}

                  </h2>

                  <p className="text-gray-500 mt-2">
                    Order ID : {order._id}
                  </p>

                </div>

                <span
                  className={`px-5 py-2 rounded-full font-semibold ${badgeColor(
                    order.orderStatus
                  )}`}
                >
                  {order.orderStatus}
                </span>

              </div>

              <div className="mt-8 space-y-6">

                {order.items.map((item) => (

                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row gap-6 border-b pb-6"
                  >

                    <img
                      src={
                        item.product?.images?.[0]
                      }
                      alt={
                        item.product?.name
                      }
                      className="w-40 h-40 rounded-2xl object-cover"
                    />

                    <div className="flex-1">

                      <h2 className="text-2xl font-bold text-[#4B2E20]">

                        {item.product?.name}

                      </h2>

                      <p className="text-gray-500 mt-2">

                        Quantity :
                        {" "}
                        {item.quantity}

                      </p>

                      <p className="text-2xl font-bold mt-4 text-[#4B2E20]">

                        ₹{item.price}

                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

                        <div className="flex items-center gap-3">

                          <Calendar
                            size={20}
                            className="text-[#4B2E20]"
                          />

                          <div>

                            <p className="text-gray-500 text-sm">
                              Order Date
                            </p>

                            <p className="font-semibold">
                              {new Date(
                                order.createdAt
                              ).toLocaleDateString()}
                            </p>

                          </div>

                        </div>

                        <div className="flex items-center gap-3">

                          <Truck
                            size={20}
                            className="text-[#4B2E20]"
                          />

                          <div>

                            <p className="text-gray-500 text-sm">
                              Estimated Delivery
                            </p>

                            <p className="font-semibold">
                              {order.estimatedDelivery
                                ? new Date(
                                  order.estimatedDelivery
                                ).toLocaleDateString()
                                : "5-7 Days"}
                            </p>

                          </div>

                        </div>

                        <div className="flex items-center gap-3">

                          <CreditCard
                            size={20}
                            className="text-[#4B2E20]"
                          />

                          <div>

                            <p className="text-gray-500 text-sm">
                              Payment
                            </p>

                            <p className="font-semibold">
                              {order.paymentMethod}
                            </p>

                          </div>

                        </div>

                        <div>

                          <p className="text-gray-500 text-sm">
                            Payment Status
                          </p>

                          <p className="font-semibold">
                            {order.paymentStatus}
                          </p>

                        </div>

                      </div>

                      <div className="flex flex-wrap gap-4 mt-8">

                        <Link
                          to={`/customer/orders/${order._id}`}
                          className="bg-[#4B2E20] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#6B4226]"
                        >
                          <Eye size={18} />
                          View Details
                        </Link>
                        <button
                          onClick={() => downloadInvoice(order._id)}
                          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
                        >
                          Download Invoice
                        </button>

                        {(order.orderStatus === "Pending" ||
                          order.orderStatus === "Confirmed") && (
                            <button
                              onClick={() => cancelOrder(order._id)}
                              className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
                            >
                              Cancel Order
                            </button>
                          )}

                        {order.orderStatus === "Delivered" && (
                          <button
                            onClick={() => returnOrder(order._id)}
                            className="bg-yellow-600 text-white px-6 py-3 rounded-xl hover:bg-yellow-700"
                          >
                            Return Order
                          </button>
                        )}

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}