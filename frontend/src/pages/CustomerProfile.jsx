import React from "react";
import { User, Mail, Phone, MapPin, Edit } from "lucide-react";

export default function CustomerProfile() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20] mb-8">
          My Profile
        </h1>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-[#E8D8C4]"
            />

            <div className="flex-1">

              <h2 className="text-3xl font-bold text-[#4B2E20]">
                Gousiya Parveen
              </h2>

              <p className="text-gray-500 mt-1">
                Customer
              </p>

              <button className="mt-5 flex items-center gap-2 bg-[#4B2E20] text-white px-5 py-3 rounded-xl hover:bg-[#6B4226] transition">
                <Edit size={18} />
                Edit Profile
              </button>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-[#FAF5EF] rounded-2xl p-5 flex items-center gap-4">
              <User className="text-[#4B2E20]" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-semibold">Gousiya Parveen</p>
              </div>
            </div>

            <div className="bg-[#FAF5EF] rounded-2xl p-5 flex items-center gap-4">
              <Mail className="text-[#4B2E20]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">
                  example@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-[#FAF5EF] rounded-2xl p-5 flex items-center gap-4">
              <Phone className="text-[#4B2E20]" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold">
                  +91 9876543210
                </p>
              </div>
            </div>

            <div className="bg-[#FAF5EF] rounded-2xl p-5 flex items-center gap-4">
              <MapPin className="text-[#4B2E20]" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}