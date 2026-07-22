import React, { useMemo, useState } from "react";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Search,
  Star,
} from "lucide-react";

export default function Wishlist() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Premium Ceramic Vase",
      price: 2499,
      oldPrice: 3299,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1616628182509-6b79fba399a7?w=600",
    },
    {
      id: 2,
      name: "Handwoven Wall Basket",
      price: 1599,
      oldPrice: 2099,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600",
    },
    {
      id: 3,
      name: "Wooden Table Decor",
      price: 1899,
      oldPrice: 2499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 4,
      name: "Luxury Handmade Lamp",
      price: 3999,
      oldPrice: 4999,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
    },
  ]);

  const removeItem = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredWishlist = useMemo(() => {
    let items = wishlist.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "Price Low") {
      items.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price High") {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }, [wishlist, search, sort]);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFF8F2] flex flex-col items-center justify-center px-6">

        <Heart
          size={80}
          className="text-[#6B4226] mb-6"
        />

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-500 mt-4 text-center max-w-md">
          Save handcrafted products that you love and access
          them anytime.
        </p>

        <button className="mt-8 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-4 rounded-2xl">
          Continue Shopping
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20] mb-10">
          My Wishlist
        </h1>

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
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border outline-none"
            />

          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-xl px-5 py-3 outline-none"
          >
            <option>Newest</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                      {filteredWishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-red-100 transition"
                >
                  <Trash2 size={18} className="text-red-500" />
                </button>

                <div className="absolute top-4 left-4 bg-[#4B2E20] text-white px-3 py-1 rounded-full text-sm">
                  ❤️ Saved
                </div>

              </div>

              <div className="p-5">

                <h2 className="text-xl font-bold text-[#4B2E20]">
                  {item.name}
                </h2>

                <div className="flex items-center gap-2 mt-3">

                  <Star
                    size={18}
                    fill="#FACC15"
                    stroke="#FACC15"
                  />

                  <span className="font-medium">
                    {item.rating}
                  </span>

                </div>

                <div className="flex items-center gap-3 mt-4">

                  <span className="text-2xl font-bold text-[#4B2E20]">
                    ₹{item.price}
                  </span>

                  <span className="line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>

                </div>

                <button className="w-full mt-6 flex items-center justify-center gap-2 bg-[#4B2E20] hover:bg-[#6B4226] text-white py-3 rounded-2xl transition">

                  <ShoppingCart size={20} />

                  Move to Cart

                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
        