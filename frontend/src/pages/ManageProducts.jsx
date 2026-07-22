import React, { useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  CheckCircle,
  XCircle,
  Star,
} from "lucide-react";

export default function ManageProducts() {
  const [products] = useState([
    {
      id: "PRD001",
      name: "Ceramic Flower Vase",
      seller: "Craft Villa",
      category: "Home Decor",
      price: "₹999",
      stock: 25,
      status: "Approved",
      featured: true,
      image: "https://images.unsplash.com/photo-1616628182509-6b79fba399a7?w=200",
    },
    {
      id: "PRD002",
      name: "Wooden Wall Decor",
      seller: "Wood World",
      category: "Wall Decor",
      price: "₹2499",
      stock: 10,
      status: "Pending",
      featured: false,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200",
    },
    {
      id: "PRD003",
      name: "Macrame Hanging",
      seller: "Art Heaven",
      category: "Handmade",
      price: "₹1299",
      stock: 18,
      status: "Rejected",
      featured: false,
      image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=200",
    },
    {
      id: "PRD004",
      name: "Clay Lamp",
      seller: "Clay Studio",
      category: "Lighting",
      price: "₹799",
      stock: 42,
      status: "Approved",
      featured: true,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Manage Products
            </h1>

            <p className="text-gray-500 mt-2">
              Review, approve and manage marketplace products.
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow p-4 flex items-center">

            <Search className="text-gray-400"/>

            <input
              type="text"
              placeholder="Search product..."
              className="ml-4 w-full outline-none"
            />

          </div>

          <select className="bg-white rounded-2xl shadow p-4">

            <option>All Products</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>

          </select>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Products</h3>
            <p className="text-3xl font-bold text-[#4B2E20] mt-2">8,936</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Approved</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">8,200</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Pending</h3>
            <p className="text-3xl font-bold text-yellow-600 mt-2">520</p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Rejected</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">216</p>
          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">Image</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Featured</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {products.map((product)=>(

                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-4">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />

                  </td>

                  <td>

                    <div className="font-semibold">
                      {product.name}
                    </div>

                    <div className="text-xs text-gray-500">
                      {product.id}
                    </div>

                  </td>

                  <td className="text-center">
                    {product.seller}
                  </td>

                  <td className="text-center">
                    {product.category}
                  </td>

                  <td className="text-center font-semibold">
                    {product.price}
                  </td>

                  <td className="text-center">
                    {product.stock}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        product.status==="Approved"
                        ? "bg-green-100 text-green-700"
                        : product.status==="Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>

                  </td>

                  <td className="text-center">

                    {product.featured ? (
                      <Star
                        fill="#FFD700"
                        className="text-yellow-400 mx-auto"
                      />
                    ) : (
                      <Star className="mx-auto text-gray-300"/>
                    )}

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200">
                        <Eye size={18} className="text-blue-600"/>
                      </button>

                      <button className="bg-green-100 p-2 rounded-lg hover:bg-green-200">
                        <CheckCircle size={18} className="text-green-600"/>
                      </button>

                      <button className="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200">
                        <XCircle size={18} className="text-yellow-600"/>
                      </button>

                      <button className="bg-red-100 p-2 rounded-lg hover:bg-red-200">
                        <Trash2 size={18} className="text-red-600"/>
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