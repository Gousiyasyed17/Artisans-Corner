import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Handcrafted Wooden Lamp",
    artisan: "Aarav Crafts",
    rating: "4.9",
    price: "₹2499",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
  },

  {
    id: 2,
    name: "Ceramic Flower Vase",
    artisan: "Clay Studio",
    rating: "4.8",
    price: "₹899",
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5",
  },

  {
    id: 3,
    name: "Traditional Wall Art",
    artisan: "Heritage Arts",
    rating: "5.0",
    price: "₹1599",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988c5",
  },

  {
    id: 4,
    name: "Boho Macrame Hanging",
    artisan: "Boho Crafts",
    rating: "4.7",
    price: "₹799",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
  },
];

export default function ProductCard() {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
            >

              <div className="relative overflow-hidden">

                <Link to={`/product/${item.id}`}>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </Link>

                <button
                  className="
                    absolute
                    top-4
                    right-4
                    bg-white
                    p-3
                    rounded-full
                    shadow-md
                    hover:bg-red-50
                    transition
                  "
                >
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
                    {item.rating}
                  </span>

                </div>

                <p className="text-sm text-gray-500 mt-2">
                  By {item.artisan}
                </p>

                <p className="text-[#b8860b] text-2xl font-bold mt-5">
                  {item.price}
                </p>

                <div className="flex gap-3 mt-6">

                  <Link
                    to={`/product/${item.id}`}
                    className="flex-1"
                  >
                    <button
                      className="
                        w-full
                        border-2
                        border-[#4b2e20]
                        text-[#4b2e20]
                        py-3
                        rounded-xl
                        font-semibold
                        hover:bg-[#4b2e20]
                        hover:text-white
                        transition
                      "
                    >
                      View
                    </button>
                  </Link>

                  <button
                    className="
                      flex-1
                      bg-[#4b2e20]
                      text-white
                      py-3
                      rounded-xl
                      flex
                      justify-center
                      items-center
                      gap-2
                      hover:bg-[#6b432b]
                      transition
                    "
                  >
                    <ShoppingBag size={18} />
                    Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}