import React from "react";
import {
  FileText,
  Download,
  Calendar,
  IndianRupee,
  ShoppingBag,
  Users,
  Store,
  Package,
  FileSpreadsheet,
  FileDown,
} from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "Sales Report",
      description: "Complete sales summary with daily, weekly and monthly revenue.",
      icon: <IndianRupee size={32} className="text-green-600" />,
    },
    {
      title: "Orders Report",
      description: "Track completed, pending, cancelled and returned orders.",
      icon: <ShoppingBag size={32} className="text-blue-600" />,
    },
    {
      title: "Customers Report",
      description: "Customer registrations, purchases and activity.",
      icon: <Users size={32} className="text-purple-600" />,
    },
    {
      title: "Sellers Report",
      description: "Seller performance, earnings and ratings.",
      icon: <Store size={32} className="text-orange-600" />,
    },
    {
      title: "Products Report",
      description: "Top selling, low stock and inactive products.",
      icon: <Package size={32} className="text-pink-600" />,
    },
    {
      title: "Financial Report",
      description: "Revenue, commissions, refunds and payouts.",
      icon: <FileText size={32} className="text-red-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Reports Center
            </h1>

            <p className="text-gray-500 mt-2">
              Generate professional marketplace reports.
            </p>

          </div>

          <button className="bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226] flex items-center gap-2">

            <Download size={18} />

            Download All Reports

          </button>

        </div>

        {/* Filters */}

        <div className="bg-white rounded-3xl shadow mt-8 p-6">

          <div className="grid md:grid-cols-4 gap-5">

            <div>

              <label className="font-semibold">
                Report Type
              </label>

              <select className="w-full border rounded-xl p-3 mt-2">

                <option>Sales</option>
                <option>Orders</option>
                <option>Customers</option>
                <option>Sellers</option>
                <option>Products</option>
                <option>Financial</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">
                From
              </label>

              <input
                type="date"
                className="w-full border rounded-xl p-3 mt-2"
              />

            </div>

            <div>

              <label className="font-semibold">
                To
              </label>

              <input
                type="date"
                className="w-full border rounded-xl p-3 mt-2"
              />

            </div>

            <div className="flex items-end">

              <button className="w-full bg-[#4B2E20] text-white py-3 rounded-xl hover:bg-[#6B4226] flex items-center justify-center gap-2">

                <Calendar size={18} />

                Generate Report

              </button>

            </div>

          </div>

        </div>

        {/* Report Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

          {reports.map((report) => (

            <div
              key={report.title}
              className="bg-white rounded-3xl shadow p-8 hover:shadow-xl transition"
            >

              {report.icon}

              <h2 className="text-2xl font-bold text-[#4B2E20] mt-5">
                {report.title}
              </h2>

              <p className="text-gray-500 mt-3">
                {report.description}
              </p>

              <div className="flex gap-3 mt-8">

                <button className="flex-1 bg-[#4B2E20] text-white py-3 rounded-xl hover:bg-[#6B4226] flex items-center justify-center gap-2">

                  <FileDown size={18} />

                  PDF

                </button>

                <button className="flex-1 border border-[#4B2E20] text-[#4B2E20] py-3 rounded-xl hover:bg-[#F5ECE2] flex items-center justify-center gap-2">

                  <FileSpreadsheet size={18} />

                  Excel

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Recent Reports */}

        <div className="bg-white rounded-3xl shadow mt-10 p-8">

          <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
            Recently Generated Reports
          </h2>

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-4">Report Name</th>

                <th>Date</th>

                <th>Format</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t">

                <td className="p-4 font-semibold">
                  Sales Report - July 2026
                </td>

                <td className="text-center">
                  20 Jul 2026
                </td>

                <td className="text-center">
                  PDF
                </td>

                <td className="text-center">

                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">

                    Ready

                  </span>

                </td>

              </tr>

              <tr className="border-t">

                <td className="p-4 font-semibold">
                  Orders Report
                </td>

                <td className="text-center">
                  18 Jul 2026
                </td>

                <td className="text-center">
                  Excel
                </td>

                <td className="text-center">

                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">

                    Ready

                  </span>

                </td>

              </tr>

              <tr className="border-t">

                <td className="p-4 font-semibold">
                  Customer Report
                </td>

                <td className="text-center">
                  15 Jul 2026
                </td>

                <td className="text-center">
                  PDF
                </td>

                <td className="text-center">

                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">

                    Processing

                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}