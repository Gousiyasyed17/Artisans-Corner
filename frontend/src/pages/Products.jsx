import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Star,
  ArrowUpDown,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";

export default function Products() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [priceFilter, setPriceFilter] = useState("all");

  const [ratingFilter, setRatingFilter] = useState(0);

  const [handmadeOnly, setHandmadeOnly] =
    useState(false);

  const [sortBy, setSortBy] =
    useState("latest");

  const [categoryFilter, setCategoryFilter] =
    useState("all");

  useEffect(() => {

    loadProducts();

  }, []);

  const loadProducts = async () => {

    try {

      const data = await getProducts();

      setProducts(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  const handleAddToCart = async (id) => {

    try {

      await addToCart(id, 1);

      alert("Product Added To Cart");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Unable to add product"
      );

    }

  };

  const categories = useMemo(() => {

    return [

      "all",

      ...new Set(

        products.map(
          (p) =>
            p.category?.name ||
            "Handmade"
        )

      ),

    ];

  }, [products]);

  const filteredProducts = useMemo(() => {

    let result = [...products];

    result = result.filter((product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    if (categoryFilter !== "all") {

      result = result.filter(
        (product) =>
          (product.category?.name ||
            "Handmade") ===
          categoryFilter
      );

    }

    if (priceFilter === "under1000") {

      result = result.filter(
        (product) =>
          product.price < 1000
      );

    }

    if (priceFilter === "1000to2000") {

      result = result.filter(
        (product) =>
          product.price >= 1000 &&
          product.price <= 2000
      );

    }

    if (priceFilter === "above2000") {

      result = result.filter(
        (product) =>
          product.price > 2000
      );

    }

    if (ratingFilter > 0) {

      result = result.filter(
        (product) =>
          (product.rating || 0) >=
          ratingFilter
      );

    }

    if (handmadeOnly) {

      result = result.filter(
        (product) =>
          product.handmade === true
      );

    }

    switch (sortBy) {

      case "low":

        result.sort(
          (a, b) =>
            a.price - b.price
        );

        break;

      case "high":

        result.sort(
          (a, b) =>
            b.price - a.price
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
    search,
    priceFilter,
    ratingFilter,
    handmadeOnly,
    sortBy,
    categoryFilter,
  ]);

  if (loading) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        <h1 className="text-4xl font-bold">

          Loading Products...

        </h1>

      </div>

    );

  }

  return (

    <>

      <Navbar />

      <section className="min-h-screen bg-[#FFF8F2] py-10 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-[#4B2E20]">

            Explore Handmade Collection

          </h1>

          <p className="mt-4 text-gray-500">

            Discover premium handcrafted products.

          </p>

          <div className="grid lg:grid-cols-4 gap-8 mt-10">
                      {/* Filters */}

          <aside className="bg-white rounded-3xl shadow-lg p-6 h-fit">

            <div className="flex items-center gap-2 mb-6">

              <SlidersHorizontal />

              <h2 className="text-2xl font-bold text-[#4B2E20]">

                Filters

              </h2>

            </div>

            {/* Search */}

            <div className="relative mb-6">

              <Search
                size={20}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search Products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full border rounded-xl py-3 pl-12 pr-4"
              />

            </div>

            {/* Category */}

            <div className="mb-6">

              <label className="font-semibold block mb-2">

                Category

              </label>

              <select
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-3"
              >

                {categories.map((cat) => (

                  <option
                    key={cat}
                    value={cat}
                  >

                    {cat === "all"
                      ? "All Categories"
                      : cat}

                  </option>

                ))}

              </select>

            </div>

            {/* Price */}

            <div className="mb-6">

              <label className="font-semibold block mb-2">

                Price

              </label>

              <div className="space-y-2">

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    name="price"
                    checked={
                      priceFilter === "all"
                    }
                    onChange={() =>
                      setPriceFilter("all")
                    }
                  />

                  All

                </label>

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    name="price"
                    checked={
                      priceFilter ===
                      "under1000"
                    }
                    onChange={() =>
                      setPriceFilter(
                        "under1000"
                      )
                    }
                  />

                  Under ₹1000

                </label>

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    name="price"
                    checked={
                      priceFilter ===
                      "1000to2000"
                    }
                    onChange={() =>
                      setPriceFilter(
                        "1000to2000"
                      )
                    }
                  />

                  ₹1000 - ₹2000

                </label>

                <label className="flex items-center gap-2">

                  <input
                    type="radio"
                    name="price"
                    checked={
                      priceFilter ===
                      "above2000"
                    }
                    onChange={() =>
                      setPriceFilter(
                        "above2000"
                      )
                    }
                  />

                  Above ₹2000

                </label>

              </div>

            </div>

            {/* Rating */}

            <div className="mb-6">

              <label className="font-semibold block mb-2">

                Rating

              </label>

              <select
                value={ratingFilter}
                onChange={(e) =>
                  setRatingFilter(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full border rounded-xl p-3"
              >

                <option value={0}>
                  All Ratings
                </option>

                <option value={4}>
                  4★ & Above
                </option>

                <option value={3}>
                  3★ & Above
                </option>

              </select>

            </div>

            {/* Handmade */}

            <div className="mb-6">

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={handmadeOnly}
                  onChange={() =>
                    setHandmadeOnly(
                      !handmadeOnly
                    )
                  }
                />

                Handmade Only

              </label>

            </div>

            {/* Sort */}

            <div className="mb-8">

              <label className="font-semibold block mb-2">

                Sort By

              </label>

              <div className="relative">

                <ArrowUpDown
                  size={18}
                  className="absolute left-3 top-4 text-gray-500"
                />

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(
                      e.target.value
                    )
                  }
                  className="w-full border rounded-xl py-3 pl-10 pr-4"
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

            </div>

            <button
              onClick={() => {

                setSearch("");

                setCategoryFilter("all");

                setPriceFilter("all");

                setRatingFilter(0);

                setHandmadeOnly(false);

                setSortBy("latest");

              }}
              className="w-full bg-[#4B2E20] text-white py-3 rounded-xl hover:bg-[#6B4226]"
            >

              Clear Filters

            </button>

          </aside>

          {/* Product Grid */}

          <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredProducts.length === 0 ? (

              <div className="col-span-full text-center py-24">

                <h2 className="text-3xl font-bold text-[#4B2E20]">

                  No Products Found

                </h2>

                <p className="mt-3 text-gray-500">

                  Try changing your search or filters.

                </p>

              </div>

            ) : (

              filteredProducts.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >

                  <div className="relative">

                    <Link to={`/product/${item._id}`}>

                      <img
                        src={
                          item.images?.length
                            ? item.images[0]
                            : "https://picsum.photos/600/600"
                        }
                        alt={item.name}
                        onError={(e) => {
                          e.target.src =
                            "https://picsum.photos/600/600";
                        }}
                        className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                      />

                    </Link>

                    {item.handmade && (

                      <span className="absolute top-4 left-4 bg-[#4B2E20] text-white px-3 py-1 rounded-full text-sm">

                        Handmade

                      </span>

                    )}

                    <button
                      className="absolute top-4 right-4 bg-white rounded-full p-3 shadow hover:bg-red-50 transition"
                    >

                      ❤️

                    </button>

                  </div>

                  <div className="p-6">

                    <Link to={`/product/${item._id}`}>

                      <h2 className="text-2xl font-bold text-[#4B2E20] hover:text-[#B8860B] transition">

                        {item.name}

                      </h2>

                    </Link>

                    <p className="text-gray-500 mt-3 line-clamp-2">

                      {item.description}

                    </p>

                    <div className="flex justify-between items-center mt-5">

                      <span className="text-2xl font-bold text-[#4B2E20]">

                        ₹{item.price}

                      </span>

                      <div className="flex items-center gap-1">

                        <Star
                          size={18}
                          className="fill-yellow-500 text-yellow-500"
                        />

                        {item.rating || 0}

                      </div>

                    </div>

                    <p className="mt-4 text-gray-500">

                      By{" "}

                      <span className="font-semibold">

                        {item.seller?.name ||
                          "Artisan"}

                      </span>

                    </p>

                    <span className="inline-block mt-4 bg-[#F5E8D8] text-[#4B2E20] px-4 py-2 rounded-full text-sm">

                      {item.category?.name ||
                        "Handmade"}

                    </span>

                    <div className="grid grid-cols-2 gap-3 mt-6">

                      <Link
                        to={`/product/${item._id}`}
                      >

                        <button className="w-full border-2 border-[#4B2E20] py-3 rounded-xl font-semibold hover:bg-[#4B2E20] hover:text-white transition">

                          View Details

                        </button>

                      </Link>

                      <button
                        onClick={() =>
                          handleAddToCart(item._id)
                        }
                        className="w-full bg-[#4B2E20] text-white py-3 rounded-xl hover:bg-[#6B4226] transition"
                      >

                        Add To Cart

                      </button>

                    </div>

                  </div>

                </div>

              ))

            )}
                      </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#4B2E20] to-[#6B4226] text-white p-10 text-center">

          <h2 className="text-4xl font-bold">

            Discover More Handmade Treasures

          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-200">

            Explore authentic handcrafted products created by talented
            artisans across India. Every purchase supports local
            craftsmanship and preserves traditional art.

          </p>

          <Link
            to="/categories"
            className="inline-block mt-8 bg-white text-[#4B2E20] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >

            Browse Categories

          </Link>

        </div>

      </div>

    </section>

    <Footer />

    </>

  );

}
         