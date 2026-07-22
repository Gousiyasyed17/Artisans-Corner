import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Customer");

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#4B2E20] to-[#8B5E3C] text-white p-16 flex-col justify-center">

        <ShoppingBag size={70} />

        <h1 className="text-5xl font-bold mt-8">
          Artisan Corner
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Discover unique handcrafted treasures created by talented artisans
          across India.
        </p>

        <div className="mt-16 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <p>Thousands of Handmade Products</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <p>Trusted Sellers</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <p>Secure Online Payments</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <p>Fast Nationwide Delivery</p>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex-1 flex justify-center items-center p-8">

        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10">

          <h2 className="text-4xl font-bold text-[#4B2E20] text-center">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Login to your Artisan Corner account
          </p>

          {/* Role */}

          <div className="mt-8">

            <label className="font-semibold">
              Login As
            </label>

            <select
              className="w-full mt-2 border rounded-xl p-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Customer</option>
              <option>Seller</option>
              <option>Admin</option>
            </select>

          </div>

          {/* Email */}

          <div className="mt-6">

            <label className="font-semibold">
              Email Address
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <Mail size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-6">

            <label className="font-semibold">
              Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <Lock size={20} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full p-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex justify-between items-center mt-5">

            <label className="flex items-center gap-2 text-sm">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/forgot-password"
              className="text-[#4B2E20] font-semibold"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login */}

          <button className="w-full mt-8 bg-[#4B2E20] hover:bg-[#6B4226] text-white py-3 rounded-xl font-semibold">

            Login

          </button>

          {/* Divider */}

          <div className="flex items-center my-6">

            <div className="flex-1 border"></div>

            <span className="mx-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 border"></div>

          </div>

          {/* Google */}

          <button className="w-full border py-3 rounded-xl hover:bg-gray-50 font-semibold">

            Continue with Google

          </button>

          {/* Register */}

          <p className="text-center mt-8">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-[#4B2E20] font-bold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}