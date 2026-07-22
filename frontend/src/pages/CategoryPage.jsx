import React, { useMemo, useState } from "react";
import { Heart, Search, ShoppingCart, Star } from "lucide-react";

export default function CategoryPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");

  const products = [
    {
      id: 1,
      name: "Luxury Ceramic Vase",
      price: 2499,
      oldPrice: 3299,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1616628182509-6b79fba399a7?w=600",
    },
    {
      id: 2,
      name: "Wooden Wall Decor",
      price: 1899,
      oldPrice: 2499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 3,
      name: "Handmade Basket",
      price: 999,
      oldPrice: 1499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600",
    },
    {
      id: 4,
      name: "Modern Wooden Lamp",
      price: 3499,
      oldPrice: 4199,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
    },
    {
      id: 5,
      name: "Clay Pot Collection",
      price: 1599,
      oldPrice: 2199,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600",
    },
    {
      id: 6,
      name: "Decorative Table Piece",
      price: 2799,
      oldPrice: 3299,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600",
    },
  ];

  const filteredProducts = useMemo(() => {
    let list = products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "Price Low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price High") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, search, sort]);

  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <div className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Home Decor Collection
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Discover handcrafted masterpieces created by talented artisans.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row gap-5 justify-between mb-10">

          <div className="relative lg:w-96">

            <Search
              className="absolute left-4 top-4 text-gray-500"
              size={20}
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
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-xl px-5 py-3 outline-none"
          >
            <option>Newest</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                      {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-red-50 transition">
                  <Heart size={20} className="text-red-500" />
                </button>

                <div className="absolute top-4 left-4 bg-[#4B2E20] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Sale
                </div>

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-[#4B2E20]">
                  {item.name}
                </h2>

                <div className="flex items-center gap-2 mt-3">

                  <Star
                    size={18}
                    fill="#FACC15"
                    stroke="#FACC15"
                  />

                  <span className="font-semibold">
                    {item.rating}
                  </span>

                  <span className="text-gray-400">
                    (124 Reviews)
                  </span>

                </div>

                <div className="flex items-center gap-3 mt-5">

                  <span className="text-3xl font-bold text-[#4B2E20]">
                    ₹{item.price}
                  </span>

                  <span className="text-lg line-through text-gray-400">
                    ₹{item.oldPrice}
                  </span>

                </div>

                <button className="w-full mt-6 flex items-center justify-center gap-3 bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-2xl transition">

                  <ShoppingCart size={20} />

                  Add to Cart

                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white p-10 text-center">

          <h2 className="text-3xl font-bold">
            Handmade with Passion ❤️
          </h2>

          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Every handcrafted item is created with care, tradition, and
            creativity. By choosing Artisan Corner, you're supporting local
            artisans and preserving timeless craftsmanship.
          </p>

          <button className="mt-8 bg-white text-[#4B2E20] font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition">
            Explore More Collections
          </button>

        </div>

      </div>

    </div>
  );
}

        