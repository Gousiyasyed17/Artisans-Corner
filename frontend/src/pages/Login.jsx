import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ShoppingBag,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================
  // LOGIN
  // ==========================

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await API.post("/auth/login", {
        email: email.trim(),
        password,
      });

      if (!data?.token) {
        setError("Login failed. Token was not received.");
        return;
      }

      // Save authentication
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      const userRole =
        data.user?.role?.toLowerCase();

      // Check selected role
      if (userRole && userRole !== role) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setError(
          `This account is registered as ${userRole}.`
        );

        return;
      }

      // Redirect according to role
      if (userRole === "seller") {
        navigate("/seller/dashboard");
      } else if (userRole === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);

      setError(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex">

      {/* LEFT SIDE */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#4B2E20] to-[#8B5E3C] text-white p-16 flex-col justify-center">

        <ShoppingBag size={70} />

        <h1 className="text-5xl font-bold mt-8">
          Artisan Corner
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Discover unique handcrafted treasures created by
          talented artisans across India.
        </p>

        <div className="mt-16 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white" />

            <p>
              Thousands of Handmade Products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white" />

            <p>
              Trusted Sellers
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white" />

            <p>
              Secure Online Payments
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-white" />

            <p>
              Fast Nationwide Delivery
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="flex-1 flex justify-center items-center p-8">

        <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10">

          <h2 className="text-4xl font-bold text-[#4B2E20] text-center">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Login to your Artisan Corner account
          </p>

          {/* FORM */}

          <form onSubmit={handleLogin}>

            {/* ROLE */}

            <div className="mt-8">

              <label className="font-semibold">
                Login As
              </label>

              <select
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="w-full mt-2 border rounded-xl p-3 outline-none focus:border-[#4B2E20]"
              >
                <option value="customer">
                  Customer
                </option>

                <option value="seller">
                  Seller
                </option>

                <option value="admin">
                  Admin
                </option>

              </select>

            </div>

            {/* EMAIL */}

            <div className="mt-6">

              <label className="font-semibold">
                Email Address
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <Mail size={20} />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full p-3 outline-none"
                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="mt-6">

              <label className="font-semibold">
                Password
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <Lock size={20} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full p-3 outline-none"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            {/* REMEMBER / FORGOT */}

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

            {/* ERROR */}

            {error && (
              <div className="mt-5 bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* LOGIN */}

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-[#4B2E20] hover:bg-[#6B4226] disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          {/* DIVIDER */}

          <div className="flex items-center my-6">

            <div className="flex-1 border" />

            <span className="mx-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 border" />

          </div>

          {/* GOOGLE */}

          <button
            type="button"
            className="w-full border py-3 rounded-xl hover:bg-gray-50 font-semibold"
          >
            Continue with Google
          </button>

          {/* REGISTER */}

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