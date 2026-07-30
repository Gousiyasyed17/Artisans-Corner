import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Filter,
} from "lucide-react";

import {
  getSellerProducts,
  deleteProduct,
} from "../services/productService";

export default function SellerProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getSellerProducts();
      setProducts(data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await deleteProduct(id);
      alert("Product Deleted Successfully");
      fetchProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to delete product"
      );
    }
  };

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products.map(
          (item) =>
            item.category?.name || "Others"
        )
      ),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch =
        item.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        (item.category?.name || "Others") ===
          category;

      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#FFF8F2]">
        <h1 className="text-3xl font-bold">
          Loading Products...
        </h1>
      </div>
    );
  }

 return (
  <div className="min-h-screen bg-[#FFF8F2] p-8">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#4B2E20]">
            My Products
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all products in your artisan store.
          </p>
        </div>

        <Link
          to="/seller/add-product"
          className="bg-[#4B2E20] hover:bg-[#6B4226] text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={20} />
          Add Product
        </Link>

      </div>

      {/* Search & Filter */}

      <div className="bg-white rounded-2xl shadow p-6 mb-8">

        <div className="grid md:grid-cols-2 gap-5">

          <div className="relative">

            <Search
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none"
            />

          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl py-3 px-4"
          >

            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}

          </select>

        </div>

      </div>

      {/* Product Table */}

      <div className="bg-white rounded-3xl shadow overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">Product</th>

                <th className="text-center">Category</th>

                <th className="text-center">Price</th>

                <th className="text-center">Stock</th>

                <th className="text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredProducts.length === 0 ? (

                <tr>

                  <td
                    colSpan={5}
                    className="text-center py-10"
                  >
                    No Products Found
                  </td>

                </tr>

              ) : (

                filteredProducts.map((item) => (

                  <tr
                    key={item._id}
                    className="border-t"
                  >

                    <td className="p-5">

                      <div className="flex items-center gap-4">

                        <img
                          src={
                            item.images?.[0] ||
                            "https://picsum.photos/100"
                          }
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover"
                        />

                        <div>

                          <h2 className="font-semibold">
                            {item.name}
                          </h2>

                        </div>

                      </div>

                    </td>

                    <td className="text-center">
                      {item.category?.name || "Others"}
                    </td>

                    <td className="text-center">
                      ₹{item.price}
                    </td>

                    <td className="text-center">
                      {item.stock}
                    </td>

                    <td>

                      <div className="flex justify-center gap-3">

                        <Link
                          to={`/product/${item._id}`}
                          className="bg-blue-100 p-2 rounded-lg"
                        >
                          <Eye size={18} />
                        </Link>

                        <Link
                          to={`/seller/edit-product/${item._id}`}
                          className="bg-green-100 p-2 rounded-lg"
                        >
                          <Pencil size={18} />
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(item._id)
                          }
                          className="bg-red-100 p-2 rounded-lg"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
            {/* Product Summary */}

      <div className="mt-8 grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Total Products
          </p>

          <h2 className="text-3xl font-bold text-[#4B2E20] mt-2">
            {products.length}
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            In Stock
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {
              products.filter(
                (p) => p.stock > 0
              ).length
            }
          </h2>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <p className="text-gray-500">
            Out Of Stock
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {
              products.filter(
                (p) => p.stock === 0
              ).length
            }
          </h2>

        </div>

      </div>

    </div>

  </div>
);
}
