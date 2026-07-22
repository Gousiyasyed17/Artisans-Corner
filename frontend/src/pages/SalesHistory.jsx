import React from "react";
import {
  IndianRupee,
  ShoppingBag,
  Calendar,
  Search,
  Download,
} from "lucide-react";

const sales = [
  {
    id: "#SALE001",
    customer: "Rahul Sharma",
    product: "Ceramic Flower Vase",
    date: "20 Jul 2026",
    amount: "₹999",
  },
  {
    id: "#SALE002",
    customer: "Priya Singh",
    product: "Wooden Wall Decor",
    date: "19 Jul 2026",
    amount: "₹2,499",
  },
  {
    id: "#SALE003",
    customer: "Arjun Patel",
    product: "Macrame Hanging",
    date: "18 Jul 2026",
    amount: "₹1,299",
  },
  {
    id: "#SALE004",
    customer: "Sneha Reddy",
    product: "Clay Lamp",
    date: "17 Jul 2026",
    amount: "₹799",
  },
];

export default function SalesHistory() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Sales History
            </h1>

            <p className="text-gray-500 mt-2">
              Track your completed sales and revenue.
            </p>

          </div>

          <button className="flex items-center gap-2 bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226]">

            <Download size={18} />

            Download Report

          </button>

        </div>

        {/* Summary Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">

            <IndianRupee
              className="text-green-600"
              size={34}
            />

            <h2 className="mt-4 text-gray-500">
              Total Revenue
            </h2>

            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹2,45,800
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <ShoppingBag
              className="text-blue-600"
              size={34}
            />

            <h2 className="mt-4 text-gray-500">
              Products Sold
            </h2>

            <p className="text-3xl font-bold text-[#4B2E20]">
              326
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <Calendar
              className="text-orange-500"
              size={34}
            />

            <h2 className="mt-4 text-gray-500">
              This Month
            </h2>

            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹42,500
            </p>

          </div>

        </div>

        {/* Search & Filter */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow p-4 flex items-center">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search customer or product..."
              className="ml-4 outline-none w-full"
            />

          </div>

          <select className="bg-white rounded-2xl shadow p-4 outline-none">
            <option>All Time</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>

        </div>

        {/* Sales Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">Sale ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Amount</th>

              </tr>

            </thead>

            <tbody>

              {sales.map((sale) => (

                <tr
                  key={sale.id}
                  className="border-t"
                >

                  <td className="p-5 font-semibold">
                    {sale.id}
                  </td>

                  <td className="text-center">
                    {sale.customer}
                  </td>

                  <td className="text-center">
                    {sale.product}
                  </td>

                  <td className="text-center">
                    {sale.date}
                  </td>

                  <td className="text-center font-bold text-green-600">
                    {sale.amount}
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