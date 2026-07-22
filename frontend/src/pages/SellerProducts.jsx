import React from "react";
import { Search, Plus, Pencil, Trash2, Eye } from "lucide-react";

const products = [
  {
    id: "ART001",
    name: "Ceramic Flower Vase",
    category: "Vases",
    price: "₹999",
    stock: 18,
    status: "In Stock",
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=600",
  },
  {
    id: "ART002",
    name: "Wooden Wall Decor",
    category: "Wall Decor",
    price: "₹2499",
    stock: 8,
    status: "Low Stock",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
  },
  {
    id: "ART003",
    name: "Boho Macrame",
    category: "Macrame",
    price: "₹1499",
    stock: 0,
    status: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600",
  },
];

export default function SellerProducts() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              My Products
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all products in your artisan store.
            </p>

          </div>

          <button className="flex items-center gap-2 bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6b4226]">

            <Plus size={20} />

            Add Product

          </button>

        </div>

        {/* Search */}

        <div className="bg-white rounded-2xl shadow mt-8 p-5 flex items-center">

          <Search className="text-gray-400" />

          <input
            type="text"
            placeholder="Search products..."
            className="ml-4 w-full outline-none"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">Product</th>
                <th>Product ID</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {products.map((item) => (

                <tr key={item.id} className="border-t">

                  <td className="p-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      <span className="font-semibold">
                        {item.name}
                      </span>

                    </div>

                  </td>

                  <td className="text-center">{item.id}</td>

                  <td className="text-center">{item.category}</td>

                  <td className="text-center font-semibold">
                    {item.price}
                  </td>

                  <td className="text-center">{item.stock}</td>

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

                    <div className="flex justify-center gap-3">

                      <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200">
                        <Pencil size={18} />
                      </button>

                      <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200">
                        <Trash2 size={18} />
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