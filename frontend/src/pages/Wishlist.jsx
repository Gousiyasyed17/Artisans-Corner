import React, { useEffect, useMemo, useState } from "react";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Search,
  Star,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  getWishlist,
  removeFromWishlist,
} from "../services/wishlistService";

import { addToCart } from "../services/cartService";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [loading, setLoading] = useState(true);
  const [movingId, setMovingId] = useState(null);

  // =========================
  // LOAD WISHLIST
  // =========================

  const loadWishlist = async () => {
    try {
      setLoading(true);

      const data = await getWishlist();

      setWishlist(data?.products || []);
    } catch (error) {
      console.error("Wishlist Load Error:", error);

      setWishlist([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  // =========================
  // REMOVE PRODUCT
  // =========================

  const removeItem = async (productId) => {
    try {
      await removeFromWishlist(productId);

      setWishlist((prev) =>
        prev.filter(
          (product) => product._id !== productId
        )
      );
    } catch (error) {
      console.error(
        "Remove Wishlist Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to remove product"
      );
    }
  };

  // =========================
  // MOVE PRODUCT TO CART
  // =========================

  const moveToCart = async (productId) => {
    try {
      setMovingId(productId);

      await addToCart(productId, 1);

      await removeFromWishlist(productId);

      setWishlist((prev) =>
        prev.filter(
          (product) => product._id !== productId
        )
      );

      alert("Product moved to cart");
    } catch (error) {
      console.error(
        "Move To Cart Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Failed to move product to cart"
      );
    } finally {
      setMovingId(null);
    }
  };

  // =========================
  // SEARCH + SORT
  // =========================

  const filteredWishlist = useMemo(() => {
    const items = wishlist.filter((product) =>
      product?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    if (sort === "Price Low") {
      return [...items].sort(
        (a, b) =>
          Number(a.price) - Number(b.price)
      );
    }

    if (sort === "Price High") {
      return [...items].sort(
        (a, b) =>
          Number(b.price) - Number(a.price)
      );
    }

    return items;
  }, [wishlist, search, sort]);

  // =========================
  // PRODUCT IMAGE
  // =========================

  const getProductImage = (product) => {
    const image = product?.images?.[0];

    if (!image) {
      return "https://picsum.photos/500/500";
    }

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    return `http://localhost:5000/${image}`;
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center">

        <div className="text-center">

          <Heart
            size={60}
            className="mx-auto text-[#4B2E20]"
          />

          <h2 className="text-2xl font-bold text-[#4B2E20] mt-5">
            Loading Wishlist...
          </h2>

        </div>

      </div>
    );
  }

  // =========================
  // EMPTY WISHLIST
  // =========================

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex flex-col items-center justify-center px-6">

        <Heart
          size={80}
          className="text-[#6B4226] mb-6"
        />

        <h1 className="text-4xl font-bold text-[#4B2E20] text-center">
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-500 mt-4 text-center max-w-md">
          Save handcrafted products that you love and
          access them anytime.
        </p>

        <Link to="/products">

          <button className="mt-8 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-4 rounded-2xl transition">
            Continue Shopping
          </button>

        </Link>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="flex items-center gap-3 mb-10">

          <Heart
            size={35}
            className="text-[#4B2E20]"
          />

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              My Wishlist
            </h1>

            <p className="text-gray-500 mt-2">
              {wishlist.length} saved{" "}
              {wishlist.length === 1
                ? "product"
                : "products"}
            </p>

          </div>

        </div>

        {/* SEARCH + SORT */}

        <div className="flex flex-col lg:flex-row gap-5 justify-between mb-10">

          <div className="relative lg:w-96">

            <Search
              size={20}
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search wishlist..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full pl-12 pr-4 py-3 rounded-xl border bg-white outline-none focus:border-[#4B2E20]"
            />

          </div>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
            className="border bg-white rounded-xl px-5 py-3 outline-none"
          >
            <option>Newest</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>

        </div>

        {/* NO SEARCH RESULTS */}

        {filteredWishlist.length === 0 ? (

          <div className="bg-white rounded-3xl p-16 text-center shadow">

            <Search
              size={50}
              className="mx-auto text-gray-400"
            />

            <h2 className="text-2xl font-bold text-[#4B2E20] mt-5">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search.
            </p>

          </div>

        ) : (

          /* PRODUCTS */

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {filteredWishlist.map((product) => {

              const oldPrice = Math.round(
                Number(product.price || 0) * 1.2
              );

              return (
                <div
                  key={product._id}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <Link
                      to={`/product/${product._id}`}
                    >

                      <img
                        src={getProductImage(product)}
                        alt={product.name}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://picsum.photos/500/500";
                        }}
                        className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                      />

                    </Link>

                    {/* REMOVE */}

                    <button
                      type="button"
                      onClick={() =>
                        removeItem(product._id)
                      }
                      className="absolute top-4 right-4 bg-white p-3 rounded-full shadow hover:bg-red-100 transition"
                    >
                      <Trash2
                        size={18}
                        className="text-red-500"
                      />
                    </button>

                    {/* SAVED */}

                    <div className="absolute top-4 left-4 bg-[#4B2E20] text-white px-3 py-1 rounded-full text-sm">
                      ♥ Saved
                    </div>

                  </div>

                  {/* DETAILS */}

                  <div className="p-5">

                    <Link
                      to={`/product/${product._id}`}
                    >

                      <h2 className="text-xl font-bold text-[#4B2E20] hover:text-[#B8860B] transition">
                        {product.name}
                      </h2>

                    </Link>

                    {/* RATING */}

                    <div className="flex items-center gap-2 mt-3">

                      <Star
                        size={18}
                        fill="#FACC15"
                        stroke="#FACC15"
                      />

                      <span className="font-medium">
                        {product.rating || 0}
                      </span>

                    </div>

                    {/* PRICE */}

                    <div className="flex items-center gap-3 mt-4">

                      <span className="text-2xl font-bold text-[#4B2E20]">
                        ₹{product.price}
                      </span>

                      <span className="line-through text-gray-400">
                        ₹{oldPrice}
                      </span>

                    </div>

                    {/* VIEW PRODUCT */}

                    <Link
                      to={`/product/${product._id}`}
                      className="block"
                    >

                      <button className="w-full mt-6 flex items-center justify-center gap-2 border border-[#4B2E20] text-[#4B2E20] hover:bg-[#FFF8F2] py-3 rounded-2xl transition">

                        <Eye size={19} />

                        View Product

                      </button>

                    </Link>

                    {/* MOVE TO CART */}

                    <button
                      type="button"
                      onClick={() =>
                        moveToCart(product._id)
                      }
                      disabled={
                        movingId === product._id
                      }
                      className="w-full mt-3 flex items-center justify-center gap-2 bg-[#4B2E20] hover:bg-[#6B4226] disabled:opacity-60 text-white py-3 rounded-2xl transition"
                    >

                      <ShoppingCart size={20} />

                      {movingId === product._id
                        ? "Moving..."
                        : "Move to Cart"}

                    </button>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}