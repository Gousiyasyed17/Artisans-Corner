import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Upload,
  ShoppingBag,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordStrength = () => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const strengthColor = () => {
    if (passwordStrength() === "Weak") return "text-red-500";
    if (passwordStrength() === "Medium") return "text-yellow-500";
    if (passwordStrength() === "Strong") return "text-green-600";
    return "";
  };

  const handleRegister = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      return alert("Please fill all fields.");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match.");
    }

    try {
      setLoading(true);

      const { data } = await API.post("/auth/register", {
        name,
        email,
        phone,
        password,
        role,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Registration Successful!");

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] flex">

      {/* Left Panel */}

      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#4B2E20] to-[#8B5E3C] text-white p-16 flex-col justify-center">

        <ShoppingBag size={70} />

        <h1 className="text-5xl font-bold mt-8">
          Join Artisan Corner
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-200">
          Become a part of India's premium handcrafted marketplace.
        </p>

        <div className="mt-16 space-y-5">
          <p>✔ Buy unique handmade products</p>
          <p>✔ Sell your handcrafted creations</p>
          <p>✔ Secure payments</p>
          <p>✔ Fast nationwide delivery</p>
        </div>

      </div>

      {/* Form */}

      <div className="flex-1 flex justify-center items-center p-8">

        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-10">

          <h2 className="text-4xl font-bold text-center text-[#4B2E20]">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Start your journey with Artisan Corner
          </p>

          {/* Role */}

          <div className="mt-8">

            <label className="font-semibold">
              Register As
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-2 border rounded-xl p-3"
            >
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </select>

          </div>

          {/* Name */}

          <div className="mt-5">

            <label className="font-semibold">
              Full Name
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <User size={18} />

              <input
                type="text"
                placeholder="Enter full name"
                className="w-full p-3 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>

          </div>

          {/* Email */}

          <div className="mt-5">

            <label className="font-semibold">
              Email
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <Mail size={18} />

              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

          </div>

          {/* Phone */}

          <div className="mt-5">

            <label className="font-semibold">
              Phone Number
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <Phone size={18} />

              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full p-3 outline-none"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

            </div>

          </div>

          {/* Profile Picture */}

          <div className="mt-5">

            <label className="font-semibold">
              Profile Picture
            </label>

            <div className="border-2 border-dashed rounded-xl p-6 mt-2 text-center">

              <Upload className="mx-auto text-gray-400" size={35} />

              <input
                type="file"
                className="mt-4"
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-5">

            <label className="font-semibold">
              Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <Lock size={18} />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>

            </div>

            {password && (
              <p className={`mt-2 text-sm font-semibold ${strengthColor()}`}>
                Password Strength: {passwordStrength()}
              </p>
            )}

          </div>

          {/* Confirm Password */}

          <div className="mt-5">

            <label className="font-semibold">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-xl mt-2 px-3">

              <Lock size={18} />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full p-3 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <EyeOff /> : <Eye />}
              </button>

            </div>

          </div>

          {/* Terms */}

          <label className="flex items-center gap-2 mt-6">

            <input type="checkbox" />

            <span className="text-sm">
              I agree to the{" "}
              <Link
                to="/terms"
                className="font-semibold text-[#4B2E20]"
              >
                Terms & Conditions
              </Link>
            </span>

          </label>

          {/* Register */}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full mt-8 bg-[#4B2E20] hover:bg-[#6B4226] text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
          >
            {loading ? "Creating Account..." : "Create Account"}
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

          <button className="w-full border rounded-xl py-3 hover:bg-gray-50 font-semibold">
            Continue with Google
          </button>

          {/* Login */}

          <p className="text-center mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-bold text-[#4B2E20]"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}