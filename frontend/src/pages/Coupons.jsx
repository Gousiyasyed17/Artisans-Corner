import React from "react";
import {
  Plus,
  TicketPercent,
  Calendar,
  Percent,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

const coupons = [
  {
    code: "WELCOME10",
    discount: "10%",
    minimum: "₹1000",
    expiry: "31 Dec 2026",
    status: "Active",
    used: 54,
  },
  {
    code: "ARTISAN20",
    discount: "20%",
    minimum: "₹2500",
    expiry: "15 Aug 2026",
    status: "Active",
    used: 28,
  },
  {
    code: "FESTIVE15",
    discount: "15%",
    minimum: "₹1500",
    expiry: "30 Sep 2026",
    status: "Inactive",
    used: 12,
  },
];

export default function Coupons() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

          <div>
            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Coupons
            </h1>

            <p className="text-gray-500 mt-2">
              Create and manage discount coupons for your customers.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-6 py-3 rounded-xl">

            <Plus size={20} />

            Create Coupon

          </button>

        </div>

        {/* Create Coupon */}

        <div className="bg-white rounded-3xl shadow p-8 mt-8">

          <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
            New Coupon
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <div>

              <label className="font-semibold">
                Coupon Code
              </label>

              <input
                type="text"
                placeholder="WELCOME10"
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Discount
              </label>

              <input
                type="number"
                placeholder="10"
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Minimum Order
              </label>

              <input
                type="number"
                placeholder="1000"
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Expiry Date
              </label>

              <input
                type="date"
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

          </div>

          <button className="mt-8 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-3 rounded-xl">

            Save Coupon

          </button>

        </div>

        {/* Coupon List */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">
                  Coupon
                </th>

                <th>Discount</th>

                <th>Minimum</th>

                <th>Expiry</th>

                <th>Used</th>

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {coupons.map((coupon) => (

                <tr
                  key={coupon.code}
                  className="border-t"
                >

                  <td className="p-5 font-semibold flex items-center gap-2">

                    <TicketPercent size={18} />

                    {coupon.code}

                  </td>

                  <td className="text-center">

                    <div className="flex justify-center items-center gap-1">

                      <Percent size={16} />

                      {coupon.discount}

                    </div>

                  </td>

                  <td className="text-center">
                    {coupon.minimum}
                  </td>

                  <td className="text-center">

                    <div className="flex justify-center items-center gap-1">

                      <Calendar size={16} />

                      {coupon.expiry}

                    </div>

                  </td>

                  <td className="text-center">
                    {coupon.used}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        coupon.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {coupon.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center">

                      {coupon.status === "Active" ? (
                        <ToggleRight
                          size={30}
                          className="text-green-600 cursor-pointer"
                        />
                      ) : (
                        <ToggleLeft
                          size={30}
                          className="text-gray-400 cursor-pointer"
                        />
                      )}

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