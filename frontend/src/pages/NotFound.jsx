import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <h1 className="text-8xl md:text-9xl font-extrabold text-[#4B2E20]">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-[#4B2E20]">
          Oops! Page Not Found
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry—you can continue exploring beautiful handcrafted products
          on Artisan Corner.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-12">

          <Link
            to="/"
            className="flex items-center gap-2 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            to="/products"
            className="flex items-center gap-2 border-2 border-[#4B2E20] text-[#4B2E20] hover:bg-[#4B2E20] hover:text-white px-8 py-4 rounded-2xl font-semibold transition"
          >
            <ShoppingBag size={20} />
            Browse Products
          </Link>

        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-[#4B2E20] font-semibold hover:underline"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8">

          <h3 className="text-2xl font-bold text-[#4B2E20]">
            Looking for something?
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <Link
              to="/categories"
              className="bg-[#FFF8F2] rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-4xl">🎨</div>

              <h4 className="font-bold text-[#4B2E20] mt-4">
                Categories
              </h4>

              <p className="text-gray-500 text-sm mt-2">
                Browse handcrafted collections.
              </p>
            </Link>

            <Link
              to="/wishlist"
              className="bg-[#FFF8F2] rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-4xl">❤️</div>

              <h4 className="font-bold text-[#4B2E20] mt-4">
                Wishlist
              </h4>

              <p className="text-gray-500 text-sm mt-2">
                View your saved favorites.
              </p>
            </Link>

            <Link
              to="/contact"
              className="bg-[#FFF8F2] rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-4xl">📞</div>

              <h4 className="font-bold text-[#4B2E20] mt-4">
                Contact Us
              </h4>

              <p className="text-gray-500 text-sm mt-2">
                Get help from our support team.
              </p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}