import React, { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Category() {
  const [search, setSearch] = useState("");

  const categories = [
    {
      id: 1,
      name: "Home Decor",
      products: 248,
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=700",
    },
    {
      id: 2,
      name: "Ceramic Art",
      products: 164,
      image:
        "https://images.unsplash.com/photo-1616628182509-6b79fba399a7?w=700",
    },
    {
      id: 3,
      name: "Wall Decor",
      products: 192,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=700",
    },
    {
      id: 4,
      name: "Wood Crafts",
      products: 135,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700",
    },
    {
      id: 5,
      name: "Handwoven Baskets",
      products: 112,
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700",
    },
    {
      id: 6,
      name: "Handmade Lamps",
      products: 86,
      image:
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=700",
    },
    {
      id: 7,
      name: "Paintings",
      products: 140,
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=700",
    },
    {
      id: 8,
      name: "Gift Items",
      products: 220,
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=700",
    },
  ];

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <div className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Explore Categories
          </h1>

          <p className="mt-4 text-lg max-w-2xl text-gray-200">
            Browse beautiful handcrafted collections made by talented artisans
            from across India.
          </p>

          <div className="relative mt-10 max-w-xl">

            <Search
              size={22}
              className="absolute left-5 top-4 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search Categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white text-black rounded-full py-4 pl-14 pr-5 outline-none"
            />

          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="overflow-hidden">

                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold text-[#4B2E20]">
                  {category.name}
                </h2>

                <p className="text-gray-500 mt-3">
                  {category.products} Products Available
                </p>

                <Link
                  to={`/category/${encodeURIComponent(category.name)}`}
                  className="mt-6 inline-flex items-center gap-2 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-6 py-3 rounded-xl transition"
                >
                  Explore
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 bg-gradient-to-r from-[#4B2E20] to-[#7A5238] rounded-3xl text-white p-10 text-center">

          <h2 className="text-3xl font-bold">
            Support Local Artisans ❤️
          </h2>

          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Every purchase directly supports skilled artisans and helps preserve
            traditional craftsmanship while bringing unique handmade products
            into your home.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-white text-[#4B2E20] font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition"
          >
            Shop All Products
          </Link>

        </div>

      </div>

    </div>
  );
}  
        