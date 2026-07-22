import React, { useState } from "react";
import {
  Search,
  Eye,
  CheckCircle,
  XCircle,
  Ban,
  Store,
  Star,
  Phone,
  Mail,
} from "lucide-react";

export default function ManageVendors() {
  const [vendors] = useState([
    {
      id: "VEN001",
      store: "Craft Villa",
      owner: "Rahul Sharma",
      email: "craftvilla@gmail.com",
      phone: "+91 9876543210",
      products: 56,
      revenue: "₹1,25,000",
      rating: 4.8,
      status: "Approved",
    },
    {
      id: "VEN002",
      store: "Clay Studio",
      owner: "Priya Singh",
      email: "claystudio@gmail.com",
      phone: "+91 9123456780",
      products: 34,
      revenue: "₹82,300",
      rating: 4.5,
      status: "Pending",
    },
    {
      id: "VEN003",
      store: "Wood World",
      owner: "Arjun Patel",
      email: "woodworld@gmail.com",
      phone: "+91 9988776655",
      products: 79,
      revenue: "₹2,14,800",
      rating: 4.9,
      status: "Suspended",
    },
    {
      id: "VEN004",
      store: "Art Heaven",
      owner: "Sneha Reddy",
      email: "artheaven@gmail.com",
      phone: "+91 9012345678",
      products: 21,
      revenue: "₹63,200",
      rating: 4.6,
      status: "Approved",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

          <div>
            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Manage Vendors
            </h1>

            <p className="text-gray-500 mt-2">
              Approve, reject and manage artisan stores.
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow p-4 flex items-center">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search vendors..."
              className="ml-4 w-full outline-none"
            />

          </div>

          <select className="bg-white rounded-2xl shadow p-4 outline-none">

            <option>All Vendors</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Suspended</option>

          </select>

        </div>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <Store className="text-orange-600" size={35} />
            <h3 className="mt-4 text-gray-500">Total Vendors</h3>
            <p className="text-3xl font-bold text-[#4B2E20]">1,248</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <CheckCircle className="text-green-600" size={35} />
            <h3 className="mt-4 text-gray-500">Approved</h3>
            <p className="text-3xl font-bold text-green-600">1,186</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <XCircle className="text-yellow-600" size={35} />
            <h3 className="mt-4 text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600">42</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <Ban className="text-red-600" size={35} />
            <h3 className="mt-4 text-gray-500">Suspended</h3>
            <p className="text-3xl font-bold text-red-600">20</p>
          </div>

        </div>

        {/* Vendors Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">Vendor ID</th>
                <th>Store</th>
                <th>Owner</th>
                <th>Products</th>
                <th>Revenue</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {vendors.map((vendor) => (

                <tr
                  key={vendor.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-5 font-semibold">
                    {vendor.id}
                  </td>

                  <td className="text-center">
                    {vendor.store}
                  </td>

                  <td className="text-center">

                    <div>{vendor.owner}</div>

                    <div className="text-xs text-gray-500 flex justify-center gap-2 mt-1">
                      <Mail size={12} />
                      {vendor.email}
                    </div>

                    <div className="text-xs text-gray-500 flex justify-center gap-2 mt-1">
                      <Phone size={12} />
                      {vendor.phone}
                    </div>

                  </td>

                  <td className="text-center">
                    {vendor.products}
                  </td>

                  <td className="text-center font-semibold text-green-600">
                    {vendor.revenue}
                  </td>

                  <td>

                    <div className="flex justify-center items-center gap-1">

                      <Star
                        size={16}
                        fill="#facc15"
                        className="text-yellow-400"
                      />

                      {vendor.rating}

                    </div>

                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        vendor.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : vendor.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {vendor.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200">
                        <Eye size={18} className="text-blue-600" />
                      </button>

                      <button className="bg-green-100 p-2 rounded-lg hover:bg-green-200">
                        <CheckCircle
                          size={18}
                          className="text-green-600"
                        />
                      </button>

                      <button className="bg-red-100 p-2 rounded-lg hover:bg-red-200">
                        <Ban
                          size={18}
                          className="text-red-600"
                        />
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