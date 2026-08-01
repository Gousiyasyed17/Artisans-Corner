import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Package,
  Truck,
  Home,
  CreditCard,
  MapPin,
} from "lucide-react";

export default function OrderTracking() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Demo order data
  const order = {
    product: "Luxury Ceramic Vase",
    price: "₹2,499",
    trackingId: "AC-TRACK-785214",
    payment: "Cash on Delivery",
    address:
      "H.No 2-45, Guntur, Andhra Pradesh - 522529",
    estimatedDelivery: "05 Aug 2026",
    status: "Shipped",
  };

  const steps = [
    "Order Placed",
    "Payment Confirmed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = steps.indexOf(order.status);

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#4B2E20] mb-8"
        >
          <ArrowLeft />
          Back
        </button>

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Track Your Order
        </h1>

        <p className="text-gray-500 mt-2">
          Order ID: {id}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-[#FFF8F2] rounded-2xl p-6">

            <h2 className="text-2xl font-bold mb-6">
              Order Information
            </h2>

            <p><b>Product:</b> {order.product}</p>

            <p className="mt-3">
              <b>Price:</b> {order.price}
            </p>

            <p className="mt-3">
              <b>Tracking ID:</b> {order.trackingId}
            </p>

            <p className="mt-3 flex items-center gap-2">
              <CreditCard size={18}/>
              {order.payment}
            </p>

            <p className="mt-3 flex items-start gap-2">
              <MapPin size={18}/>
              {order.address}
            </p>

            <p className="mt-3">
              <b>Estimated Delivery:</b>{" "}
              {order.estimatedDelivery}
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold mb-6">
              Delivery Status
            </h2>

            {steps.map((step, index) => (

              <div
                key={step}
                className="flex items-center mb-6"
              >

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    index <= currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-300"
                  }`}
                >

                  {index === 0 && <Package />}
                  {index === 1 && <CheckCircle />}
                  {index === 2 && <Package />}
                  {index === 3 && <Truck />}
                  {index === 4 && <Truck />}
                  {index === 5 && <Home />}

                </div>

                <div className="ml-5">

                  <h3 className="font-semibold">
                    {step}
                  </h3>

                  <p className="text-gray-500">

                    {index <= currentStep
                      ? "Completed"
                      : "Pending"}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}