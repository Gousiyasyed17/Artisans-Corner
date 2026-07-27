import React, { useEffect, useState } from "react";

import {
  ArrowLeft,
  User,
  MapPin,
  CreditCard,
  Package,
  Truck,
  Calendar,
  Download,
  XCircle,
  RotateCcw,
  CheckCircle,
} from "lucide-react";

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  getOrderById,
  cancelOrder,
} from "../services/orderService";
import generateInvoice from "../utils/generateInvoice";

export default function OrderDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    try {

      const data = await getOrderById(id);

      setOrder(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handleCancelOrder = async () => {

    const ok = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!ok) return;

    try {

      await cancelOrder(order._id);

      alert("Order Cancelled Successfully");

      fetchOrder();

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable to cancel order"
      );

    }

  };
  const handleDownloadInvoice = () => {
    generateInvoice(order);
  };

  const statusColor = (status) => {

    switch (status) {

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Confirmed":
        return "bg-blue-100 text-blue-700";

      case "Processing":
        return "bg-indigo-100 text-indigo-700";

      case "Shipped":
        return "bg-purple-100 text-purple-700";

      case "Out for Delivery":
        return "bg-orange-100 text-orange-700";

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

      <div className="min-h-screen flex justify-center items-center bg-[#FFF8F2]">

        <h1 className="text-4xl font-bold text-[#4B2E20]">

          Loading Order...

        </h1>

      </div>

    );

  }

  if (!order) {

    return (

      <div className="min-h-screen flex justify-center items-center bg-[#FFF8F2]">

        <h1 className="text-4xl font-bold text-red-600">

          Order Not Found

        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 mb-8 text-[#4B2E20] font-semibold"
        >

          <ArrowLeft size={22}/>

          Back

        </button>

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div>

              <h1 className="text-4xl font-bold text-[#4B2E20]">

                Order Details

              </h1>

              <p className="text-gray-500 mt-4">

                Invoice Number

              </p>

              <h2 className="text-2xl font-bold">

                {order.invoiceNumber}

              </h2>

              <p className="mt-6 text-gray-500">

                Order ID

              </p>

              <p className="break-all">

                {order._id}

              </p>

            </div>

            <div>

              <span
                className={`px-6 py-3 rounded-full font-bold ${statusColor(order.orderStatus)}`}
              >

                {order.orderStatus}

              </span>

            </div>

          </div>

          <hr className="my-10"/>
                    {/* Customer + Shipping */}

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Customer */}

            <div className="bg-[#FFF8F2] rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <User
                  size={26}
                  className="text-[#4B2E20]"
                />

                <h2 className="text-2xl font-bold text-[#4B2E20]">

                  Customer Information

                </h2>

              </div>

              <div className="space-y-4">

                <p>

                  <strong>Name :</strong>{" "}

                  {order.customer?.name}

                </p>

                <p>

                  <strong>Email :</strong>{" "}

                  {order.customer?.email}

                </p>

              </div>

            </div>

            {/* Shipping */}

            <div className="bg-[#FFF8F2] rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <MapPin
                  size={26}
                  className="text-[#4B2E20]"
                />

                <h2 className="text-2xl font-bold text-[#4B2E20]">

                  Shipping Address

                </h2>

              </div>

              <div className="space-y-3">

                <p>

                  {order.shippingAddress?.fullName}

                </p>

                <p>

                  {order.shippingAddress?.phone}

                </p>

                <p>

                  {order.shippingAddress?.address}

                </p>

                <p>

                  {order.shippingAddress?.city},{" "}
                  {order.shippingAddress?.state}

                </p>

                <p>

                  {order.shippingAddress?.pincode}

                </p>

                <p>

                  {order.shippingAddress?.country}

                </p>

              </div>

            </div>

          </div>

          <hr className="my-10"/>

          {/* Products */}

          <div>

            <div className="flex items-center gap-3 mb-8">

              <Package
                size={28}
                className="text-[#4B2E20]"
              />

              <h2 className="text-3xl font-bold text-[#4B2E20]">

                Ordered Products

              </h2>

            </div>

            {order.items.map((item) => (

              <div
                key={item._id}
                className="bg-[#FFF8F2] rounded-3xl p-8 mb-8"
              >

                <div className="flex flex-col lg:flex-row gap-8">

                  <img
                    src={item.product?.images?.[0]}
                    alt={item.product?.name}
                    className="w-56 h-56 rounded-3xl object-cover"
                  />

                  <div className="flex-1">

                    <h2 className="text-3xl font-bold text-[#4B2E20]">

                      {item.product?.name}

                    </h2>

                    <p className="text-gray-500 mt-4">

                      {item.product?.description}

                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                                              <div>

                        <p className="text-gray-500">
                          Quantity
                        </p>

                        <h3 className="text-xl font-bold">
                          {item.quantity}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Price
                        </p>

                        <h3 className="text-xl font-bold text-[#4B2E20]">
                          ₹{item.price}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Material
                        </p>

                        <h3>
                          {item.product?.material || "N/A"}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Dimensions
                        </p>

                        <h3>
                          {item.product?.dimensions || "N/A"}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Weight
                        </p>

                        <h3>
                          {item.product?.weight || "N/A"}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Color
                        </p>

                        <h3>
                          {item.product?.color || "N/A"}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Handmade
                        </p>

                        <h3>
                          {item.product?.handmade ? "Yes" : "No"}
                        </h3>

                      </div>

                      <div>

                        <p className="text-gray-500">
                          Estimated Delivery
                        </p>

                        <h3>
                          {item.product?.estimatedDelivery}
                        </h3>

                      </div>

                    </div>

                    {/* Seller */}

                    <div className="mt-8 bg-white rounded-2xl p-6 shadow">

                      <h3 className="text-2xl font-bold text-[#4B2E20] mb-5">

                        Seller Information

                      </h3>

                      <div className="grid md:grid-cols-2 gap-5">

                        <div>

                          <p className="text-gray-500">
                            Seller Name
                          </p>

                          <h3 className="font-bold">
                            {item.product?.seller?.name}
                          </h3>

                        </div>

                        <div>

                          <p className="text-gray-500">
                            Seller Email
                          </p>

                          <h3>
                            {item.product?.seller?.email}
                          </h3>

                        </div>

                        <div>

                          <p className="text-gray-500">
                            Seller Phone
                          </p>

                          <h3>
                            {item.product?.seller?.phone || "Not Available"}
                          </h3>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}
            </div>
            <hr className="my-10" />

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Payment */}

            <div className="bg-[#FFF8F2] rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <CreditCard
                  size={26}
                  className="text-[#4B2E20]"
                />

                <h2 className="text-2xl font-bold text-[#4B2E20]">
                  Payment Information
                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span>Payment Method</span>

                  <strong>{order.paymentMethod}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Payment Status</span>

                  <strong>{order.paymentStatus}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Subtotal</span>

                  <strong>₹{order.totalPrice}</strong>

                </div>

                <div className="flex justify-between">

                  <span>Shipping</span>

                  <strong className="text-green-600">
                    {order.shippingCharge === 0
                      ? "FREE"
                      : `₹${order.shippingCharge}`}
                  </strong>

                </div>

                <div className="flex justify-between">

                  <span>Discount</span>

                  <strong className="text-green-600">
                    -₹{order.discount}
                  </strong>

                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span className="text-[#4B2E20]">
                    ₹{order.totalPrice}
                  </span>

                </div>

              </div>

            </div>

            {/* Delivery */}

            <div className="bg-[#FFF8F2] rounded-3xl p-8">

              <div className="flex items-center gap-3 mb-6">

                <Truck
                  size={26}
                  className="text-[#4B2E20]"
                />

                <h2 className="text-2xl font-bold text-[#4B2E20]">

                  Delivery Details

                </h2>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between">

                  <span>Order Date</span>

                  <strong>

                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}

                  </strong>

                </div>

                <div className="flex justify-between">

                  <span>Estimated Delivery</span>

                  <strong>

                    {order.estimatedDelivery
                      ? new Date(
                          order.estimatedDelivery
                        ).toLocaleDateString()
                      : "5-7 Days"}

                  </strong>

                </div>

                <div className="flex justify-between">

                  <span>Status</span>

                  <strong>

                    {order.orderStatus}

                  </strong>

                </div>

                <div className="flex justify-between">

                  <span>Invoice</span>

                  <strong>

                    {order.invoiceNumber}

                  </strong>

                </div>

              </div>

            </div>

          </div>

          <hr className="my-10" />

          <div className="flex items-center gap-3 mb-8">

            <Calendar
              size={28}
              className="text-[#4B2E20]"
            />

            <h2 className="text-3xl font-bold text-[#4B2E20]">

              Order Timeline

            </h2>

          </div>
                    <div className="bg-[#FFF8F2] rounded-3xl p-8">

            <div className="space-y-8">

              {/* Order Placed */}

              <div className="flex gap-5">

                <CheckCircle
                  size={28}
                  className="text-green-600"
                />

                <div>

                  <h3 className="font-bold text-lg">
                    Order Placed
                  </h3>

                  <p className="text-gray-500">

                    {new Date(
                      order.createdAt
                    ).toLocaleString()}

                  </p>

                </div>

              </div>

              {/* Confirmed */}

              <div className="flex gap-5">

                <CheckCircle
                  size={28}
                  className={
                    order.orderStatus === "Pending"
                      ? "text-gray-400"
                      : "text-green-600"
                  }
                />

                <div>

                  <h3 className="font-bold text-lg">

                    Order Confirmed

                  </h3>

                </div>

              </div>

              {/* Processing */}

              <div className="flex gap-5">

                <CheckCircle
                  size={28}
                  className={
                    ["Processing", "Shipped", "Out for Delivery", "Delivered"].includes(
                      order.orderStatus
                    )
                      ? "text-green-600"
                      : "text-gray-400"
                  }
                />

                <div>

                  <h3 className="font-bold text-lg">

                    Processing

                  </h3>

                </div>

              </div>

              {/* Shipped */}

              <div className="flex gap-5">

                <Truck
                  size={28}
                  className={
                    ["Shipped", "Out for Delivery", "Delivered"].includes(
                      order.orderStatus
                    )
                      ? "text-green-600"
                      : "text-gray-400"
                  }
                />

                <div>

                  <h3 className="font-bold text-lg">

                    Shipped

                  </h3>

                </div>

              </div>

              {/* Delivered */}

              <div className="flex gap-5">

                <Package
                  size={28}
                  className={
                    order.orderStatus === "Delivered"
                      ? "text-green-600"
                      : "text-gray-400"
                  }
                />

                <div>

                  <h3 className="font-bold text-lg">

                    Delivered

                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={handleDownloadInvoice}
              className="bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-4 rounded-2xl flex items-center gap-3"
            >
              <Download size={22} />
              Download Invoice
            </button>

            {(order.orderStatus === "Pending" ||
              order.orderStatus === "Confirmed") && (

              <button
                onClick={handleCancelOrder}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3"
              >
                <XCircle size={22} />

                Cancel Order

              </button>

            )}

            {order.orderStatus === "Delivered" && (

              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3"
              >
                <RotateCcw size={22} />

                Return Order

              </button>

            )}

            <Link
              to="/customer/orders"
              className="border border-[#4B2E20] text-[#4B2E20] px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-[#FFF8F2]"
            >
              <ArrowLeft size={22} />

              Back To Orders

            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}
            

