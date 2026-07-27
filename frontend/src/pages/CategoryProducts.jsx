import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  Eye,
  SlidersHorizontal,
} from "lucide-react";

import { getProducts } from "../services/productService";

export default function CategoryProducts() {

  const { name } = useParams();

  const categoryName = decodeURIComponent(name);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("latest");

  const [handmadeOnly, setHandmadeOnly] = useState(false);

  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {

    fetchProducts();

  }, [name]);

  const fetchProducts = async () => {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  const filteredProducts = useMemo(() => {

    let result = products.filter((product) => {

      const category =
        product.category?.name ||
        product.category;

      return (
        category === categoryName
      );

    });

    result = result.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    result = result.filter(
      (product) =>
        product.price <= maxPrice
    );

    if (handmadeOnly) {

      result = result.filter(
        (product) => product.handmade
      );

    }

    switch (sortBy) {

      case "low":

        result.sort(
          (a, b) => a.price - b.price
        );

        break;

      case "high":

        result.sort(
          (a, b) => b.price - a.price
        );

        break;

      default:

        result.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );

    }

    return result;

  }, [
    products,
    categoryName,
    search,
    sortBy,
    handmadeOnly,
    maxPrice,
  ]);

  if (loading) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        <h1 className="text-4xl font-bold">

          Loading...

        </h1>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <div className="bg-gradient-to-r from-[#4B2E20] to-[#6B4226] text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">

            {categoryName}

          </h1>

          <p className="mt-3 text-lg">

            {filteredProducts.length} Products Found

          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid lg:grid-cols-4 gap-8">

          {/* Filters */}

          <div className="bg-white rounded-3xl shadow-lg p-6 h-fit">

            <div className="flex items-center gap-2 mb-6">

              <SlidersHorizontal size={22} />

              <h2 className="text-2xl font-bold text-[#4B2E20]">
                Filters
              </h2>

            </div>

            {/* Search */}

            <div className="relative mb-8">

              <Search
                size={20}
                className="absolute left-4 top-4 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search Products"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full border rounded-xl py-3 pl-12 pr-4"
              />

            </div>

            {/* Sort */}

            <div className="mb-8">

              <label className="font-semibold block mb-3">

                Sort By

              </label>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="w-full border rounded-xl p-3"
              >

                <option value="latest">
                  Latest
                </option>

                <option value="low">
                  Price Low → High
                </option>

                <option value="high">
                  Price High → Low
                </option>

              </select>

            </div>

            {/* Price */}

            <div className="mb-8">

              <label className="font-semibold">

                Maximum Price

              </label>

              <input
                type="range"
                min="100"
                max="100000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full mt-4"
              />

              <p className="mt-2 font-bold text-[#4B2E20]">

                ₹{maxPrice}

              </p>

            </div>

            {/* Handmade */}

            <div>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={handmadeOnly}
                  onChange={() =>
                    setHandmadeOnly(!handmadeOnly)
                  }
                />

                Handmade Only

              </label>

            </div>

          </div>

          {/* Products */}

          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                              {filteredProducts.length === 0 ? (

                <div className="col-span-full text-center py-20">

                  <h2 className="text-3xl font-bold text-[#4B2E20]">

                    No Products Found

                  </h2>

                  <p className="mt-3 text-gray-500">

                    Try changing the search or filters.

                  </p>

                </div>

              ) : (

                filteredProducts.map((product) => (

                  <div
                    key={product._id}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >

                    <div className="relative">

                      <img
                        src={
                          product.images?.[0] ||
                          "https://via.placeholder.com/500x500?text=No+Image"
                        }
                        alt={product.name}
                        className="w-full h-64 object-cover"
                      />

                      {product.handmade && (

                        <span className="absolute top-4 left-4 bg-[#4B2E20] text-white px-3 py-1 rounded-full text-sm">

                          Handmade

                        </span>

                      )}

                      <button
                        className="absolute top-4 right-4 bg-white rounded-full p-3 shadow hover:bg-red-50"
                      >

                        <Heart size={20} />

                      </button>

                    </div>

                    <div className="p-6">

                      <h2 className="text-2xl font-bold text-[#4B2E20]">

                        {product.name}

                      </h2>

                      <p className="text-gray-500 mt-3 line-clamp-2">

                        {product.description}

                      </p>

                      <div className="flex justify-between items-center mt-5">

                        <span className="text-2xl font-bold text-[#4B2E20]">

                          ₹{product.price}

                        </span>

                        <span className="text-yellow-600 font-semibold">

                          ⭐ {product.rating || 0}

                        </span>

                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-6">

                        <Link
                          to={`/product/${product._id}`}
                          className="bg-[#4B2E20] hover:bg-[#6B4226] text-white py-3 rounded-xl flex justify-center items-center gap-2"
                        >

                          <Eye size={18} />

                          View

                        </Link>

                        <button
                          className="border border-[#4B2E20] text-[#4B2E20] hover:bg-[#FFF8F2] py-3 rounded-xl flex justify-center items-center gap-2"
                        >

                          <ShoppingCart size={18} />

                          Cart

                        </button>

                      </div>

                    </div>

                  </div>

                ))

              )}
                          </div>

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 bg-gradient-to-r from-[#4B2E20] to-[#6B4226] rounded-3xl text-white p-10 text-center">

          <h2 className="text-4xl font-bold">

            Discover More Handmade Treasures

          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-200">

            Every handcrafted product tells a unique story. Explore more
            collections created by talented artisans from across India.

          </p>

          <Link
            to="/categories"
            className="inline-block mt-8 bg-white text-[#4B2E20] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >

            Browse All Categories

          </Link>

        </div>

      </div>

    </div>

  );

}
                
          