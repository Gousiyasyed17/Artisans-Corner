import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ products = [] }) {
  return (
    <section className="px-8 py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[#b8860b] uppercase tracking-[4px] font-semibold text-sm">
              Featured Products
            </p>

            <h2 className="text-4xl font-bold text-[#4b2e20] mt-3">
              Trending Handmade Products
            </h2>

            <p className="text-gray-600 mt-3">
              Explore our most loved handcrafted creations.
            </p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-16">
            No products available.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${item._id}`}>
                    <img
                      src={
                        item.images?.length > 0
                          ? item.images[0]
                          : "https://via.placeholder.com/400x400?text=No+Image"
                      }
                      alt={item.name}
                      className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </Link>

                  <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md hover:bg-red-50 transition">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-[#4b2e20]">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-3">
                    <Star
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />

                    <span className="text-gray-700 font-medium">
                      {item.rating || 0}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    By {item.seller?.name || "Artisan"}
                  </p>

                  <p className="text-[#b8860b] text-2xl font-bold mt-5">
                    ₹{item.price}
                  </p>

                  <div className="flex gap-3 mt-6">
                    <Link
                      to={`/product/${item._id}`}
                      className="flex-1"
                    >
                      <button className="w-full border-2 border-[#4b2e20] text-[#4b2e20] py-3 rounded-xl font-semibold hover:bg-[#4b2e20] hover:text-white transition">
                        View
                      </button>
                    </Link>

                    <button className="flex-1 bg-[#4b2e20] text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-[#6b432b] transition">
                      <ShoppingBag size={18} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}