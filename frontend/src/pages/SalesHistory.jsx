import React, { useEffect, useState } from "react";
import {
  IndianRupee,
  ShoppingBag,
  Calendar,
  Search,
  Download,
} from "lucide-react";

import { getSellerSalesHistory } from "../services/orderService";

export default function SalesHistory() {
  const [sales, setSales] = useState([]);
  const [summary, setSummary] = useState({
    totalRevenue: 0,
    productsSold: 0,
    monthlyRevenue: 0,
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadSales();
  }, []);

  const loadSales = async () => {
    try {
      const data = await getSellerSalesHistory();

      setSales(data.sales || []);

      setSummary({
        totalRevenue: data.totalRevenue || 0,
        productsSold: data.productsSold || 0,
        monthlyRevenue: data.monthlyRevenue || 0,
      });
    } catch (error) {
      console.error("Sales History Error:", error);
    }
  };

  const filteredSales = sales.filter((sale) => {
    const customer =
      sale.customer?.name?.toLowerCase() || "";

    const product =
      sale.items?.[0]?.product?.name?.toLowerCase() || "";

    return (
      customer.includes(search.toLowerCase()) ||
      product.includes(search.toLowerCase())
    );
  });

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
              ₹{summary.totalRevenue}
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
              {summary.productsSold}
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
              ₹{summary.monthlyRevenue}
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow p-4 flex items-center">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search customer or product..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
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

                <th className="text-left p-5">
                  Sale ID
                </th>

                <th>Customer</th>

                <th>Product</th>

                <th>Date</th>

                <th>Amount</th>

              </tr>

            </thead>

            <tbody>

              {filteredSales.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center p-10 text-gray-500"
                  >
                    No Sales Found
                  </td>

                </tr>

              ) : (

                filteredSales.map((sale) => (

                  <tr
                    key={sale._id}
                    className="border-t"
                  >

                    <td className="p-5 font-semibold">
                      #{sale._id.slice(-6)}
                    </td>

                    <td className="text-center">
                      {sale.customer?.name}
                    </td>

                    <td className="text-center">
                      {sale.items?.[0]?.product?.name}
                    </td>

                    <td className="text-center">
                      {new Date(
                        sale.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="text-center font-bold text-green-600">
                      ₹{sale.totalPrice}
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