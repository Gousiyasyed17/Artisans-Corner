import {
  Search,
  Heart,
  ShoppingBag,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-[#fffaf3] shadow-sm sticky top-0 z-50">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-[#4b2e20]"
      >
        Artisan
        <span className="text-[#b8860b]">
          Corner
        </span>
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex gap-8 text-[#4b2e20] font-medium">

        <Link
          to="/"
          className="hover:text-[#b8860b] transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="hover:text-[#b8860b] transition"
        >
          Explore
        </Link>

        <Link
          to="/categories"
          className="hover:text-[#b8860b] transition"
        >
          Categories
        </Link>
        <Link
          to="/seller/dashboard"
          className="hover:text-[#b8860b] transition"
        >
          Sell
        </Link>

        <Link
          to="/about"
          className="hover:text-[#b8860b] transition"
        >
          About
        </Link>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <Link
          to="/products"
          title="Search Products"
          className="text-[#4b2e20] hover:text-[#b8860b] transition"
        >
          <Search size={22} />
        </Link>

        {/* Wishlist */}
        <Link
          to="/wishlist"
          title="Wishlist"
          className="text-[#4b2e20] hover:text-[#b8860b] transition"
        >
          <Heart size={22} />
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          title="Cart"
          className="text-[#4b2e20] hover:text-[#b8860b] transition relative"
        >
          <ShoppingBag size={22} />
        </Link>

        {/* Login */}
        <Link
          to="/login"
          title="Account"
          className="text-[#4b2e20] hover:text-[#b8860b] transition"
        >
          <User size={22} />
        </Link>

      </div>

    </nav>
  );
}