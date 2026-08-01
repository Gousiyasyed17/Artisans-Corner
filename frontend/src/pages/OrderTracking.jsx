import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Package,
  CheckCircle,
  Truck,
  Home,
  ArrowLeft,
} from "lucide-react";

export default function OrderTracking() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Demo status (later you can fetch this from backend)
  const currentStatus = "Shipped";

  const steps = [
    "Order Placed",
    "Payment Confirmed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentIndex = steps.indexOf(currentStatus);

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#4B2E20] mb-8"
        >
          <ArrowLeft />
          Back
        </button>

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Order Tracking
        </h1>

        <p className="mt-3 text-gray-600">
          Order ID:
        </p>

        <p className="font-semibold break-all">
          {id}
        </p>

        <div className="mt-8 bg-[#FFF8F2] rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
            Delivery Progress
          </h2>

          <div className="space-y-6">

            {steps.map((step, index) => (

              <div
                key={index}
                className="flex items-center gap-5"
              >

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    index <= currentIndex
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-white"
                  }`}
                >

                  {index === 0 && <Package />}
                  {index === 1 && <CheckCircle />}
                  {index === 2 && <Package />}
                  {index === 3 && <Truck />}
                  {index === 4 && <Truck />}
                  {index === 5 && <Home />}

                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    {step}
                  </h3>

                  <p className="text-gray-500">

                    {index <= currentIndex
                      ? "Completed"
                      : "Pending"}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-[#FFF8F2] rounded-2xl p-6">

            <h3 className="font-bold text-xl mb-3">
              Estimated Delivery
            </h3>

            <p>Within 5-7 Business Days</p>

          </div>

          <div className="bg-[#FFF8F2] rounded-2xl p-6">

            <h3 className="font-bold text-xl mb-3">
              Tracking Number
            </h3>

            <p>
              AC-{id.slice(-6).toUpperCase()}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}