import React from "react";
import {
  Search,
  AlertTriangle,
  Package,
  Plus,
  Minus,
} from "lucide-react";

const inventory = [
  {
    id: "ART001",
    name: "Ceramic Flower Vase",
    stock: 24,
    category: "Vases",
    status: "In Stock",
  },
  {
    id: "ART002",
    name: "Wooden Wall Decor",
    stock: 5,
    category: "Wall Decor",
    status: "Low Stock",
  },
  {
    id: "ART003",
    name: "Macrame Hanging",
    stock: 0,
    category: "Macrame",
    status: "Out of Stock",
  },
  {
    id: "ART004",
    name: "Clay Lamp",
    stock: 17,
    category: "Lighting",
    status: "In Stock",
  },
];

export default function Inventory() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Inventory Management
        </h1>

        <p className="text-gray-500 mt-2">
          Track product stock and manage inventory efficiently.
        </p>

        {/* Summary */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">

            <Package size={35} className="text-green-600" />

            <h2 className="text-lg mt-4 text-gray-500">
              Total Products
            </h2>

            <p className="text-3xl font-bold text-[#4B2E20]">
              48
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <AlertTriangle
              size={35}
              className="text-yellow-500"
            />

            <h2 className="text-lg mt-4 text-gray-500">
              Low Stock
            </h2>

            <p className="text-3xl font-bold text-yellow-600">
              7
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <Package
              size={35}
              className="text-red-500"
            />

            <h2 className="text-lg mt-4 text-gray-500">
              Out of Stock
            </h2>

            <p className="text-3xl font-bold text-red-600">
              2
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white shadow rounded-2xl p-5 mt-8 flex items-center">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search inventory..."
            className="ml-4 outline-none w-full"
          />

        </div>

        {/* Inventory Table */}

        <div className="overflow-x-auto mt-8 bg-white rounded-3xl shadow">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">
                  Product
                </th>

                <th>ID</th>

                <th>Category</th>

                <th>Stock</th>

                <th>Status</th>

                <th>Update</th>

              </tr>

            </thead>

            <tbody>

              {inventory.map((item) => (

                <tr key={item.id} className="border-t">

                  <td className="p-5 font-semibold">
                    {item.name}
                  </td>

                  <td className="text-center">
                    {item.id}
                  </td>

                  <td className="text-center">
                    {item.category}
                  </td>

                  <td className="text-center font-bold">
                    {item.stock}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "In Stock"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button className="bg-green-100 p-2 rounded-lg hover:bg-green-200">

                        <Plus size={18} />

                      </button>

                      <button className="bg-red-100 p-2 rounded-lg hover:bg-red-200">

                        <Minus size={18} />

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