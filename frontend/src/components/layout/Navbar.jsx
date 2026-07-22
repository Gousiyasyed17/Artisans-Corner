import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiUser,
} from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
            AC
          </div>

          <div>

            <h2 className="text-2xl font-bold text-gray-800">
              Artisan's Corner
            </h2>

            <p className="text-xs text-gray-500">
              Handmade Marketplace
            </p>

          </div>

        </div>

        {/* Menu */}

        <nav className="hidden lg:flex gap-8 text-gray-700 font-medium">

          <a href="#">Home</a>

          <a href="#">Products</a>

          <a href="#">Categories</a>

          <a href="#">Artisans</a>

          <a href="#">About</a>

          <a href="#">Contact</a>

        </nav>

        {/* Search */}

        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[320px]">

          <FiSearch className="text-gray-500"/>

          <input
            className="bg-transparent outline-none ml-3 w-full"
            placeholder="Search handmade products..."
          />

        </div>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-5">

          <FiHeart size={22}/>

          <FiShoppingCart size={22}/>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600">

            Become Seller

          </button>

          <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white">

            Login

          </button>

          <FiUser size={22}/>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={()=>setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FiX size={30}/> : <FiMenu size={30}/>}

        </button>

      </div>

      {menuOpen && (

        <div className="lg:hidden bg-white p-6 space-y-5">

          <a className="block">Home</a>

          <a className="block">Products</a>

          <a className="block">Categories</a>

          <a className="block">Artisans</a>

          <button className="w-full bg-orange-500 text-white py-3 rounded-full">

            Become Seller

          </button>

          <button className="w-full border border-orange-500 text-orange-500 py-3 rounded-full">

            Login

          </button>

        </div>

      )}

    </header>
  );
}

export default Navbar;