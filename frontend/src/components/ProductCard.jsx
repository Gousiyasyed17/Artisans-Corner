import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ products = [] }) {
  console.log("Products received:", products);

  return (
    <section className="px-8 py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
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

        {/* No Products */}
        {products.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-500">
              No Products Available
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Link to={`/product/${item._id}`}>
                    <img
                      src={
                        item.images && item.images.length > 0
                          ? item.images[0]
                          : "https://picsum.photos/400/400"
                      }
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = "https://picsum.photos/400/400";
                      }}
                      className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                    />
                  </Link>

                  <button className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md hover:bg-red-50">
                    <Heart size={18} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4b2e20]">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-2">
                    <Star
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span>{item.rating || 0}</span>
                  </div>

                  <p className="text-gray-500 mt-2">
                    By {item.seller?.name || "Artisan"}
                  </p>

                  <p className="text-2xl font-bold text-[#b8860b] mt-4">
                    ₹{item.price}
                  </p>

                  <div className="flex gap-3 mt-6">
                    <Link
                      to={`/product/${item._id}`}
                      className="flex-1"
                    >
                      <button className="w-full border-2 border-[#4b2e20] py-3 rounded-xl font-semibold hover:bg-[#4b2e20] hover:text-white transition">
                        View
                      </button>
                    </Link>

                    <button className="flex-1 bg-[#4b2e20] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#6b432b] transition">
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