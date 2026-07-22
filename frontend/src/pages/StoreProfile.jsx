import React from "react";
import {
  Store,
  Upload,
  Mail,
  Phone,
  MapPin,
  Globe,
  Save,
} from "lucide-react";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function StoreProfile() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Banner */}

        <div className="relative h-72 bg-gradient-to-r from-[#8B5E3C] to-[#C79A63]">

          <button className="absolute top-6 right-6 bg-white px-5 py-2 rounded-xl shadow hover:bg-gray-100 flex items-center gap-2">
            <Upload size={18} />
            Change Banner
          </button>

        </div>

        {/* Logo */}

        <div className="relative px-10">

          <div className="-mt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between">

            <div className="flex items-end gap-6">

              <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">

                <Store
                  size={55}
                  className="text-[#4B2E20]"
                />

              </div>

              <div className="pb-3">

                <h1 className="text-4xl font-bold text-[#4B2E20]">
                  Artisan Corner Store
                </h1>

                <p className="text-gray-500 mt-2">
                  Premium Handmade Products
                </p>

              </div>

            </div>

            <button className="mt-6 lg:mt-0 bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226] flex items-center gap-2">

              <Upload size={18} />

              Change Logo

            </button>

          </div>

        </div>

        {/* Form */}

        <div className="p-10">

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <label className="font-semibold">
                Store Name
              </label>

              <input
                defaultValue="Artisan Corner Store"
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Owner Name
              </label>

              <input
                defaultValue="John Smith"
                className="w-full mt-2 border rounded-xl p-3"
              />

            </div>

            <div>

              <label className="font-semibold">
                Email
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <Mail size={18} />

                <input
                  defaultValue="seller@email.com"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                Phone
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <Phone size={18} />

                <input
                  defaultValue="+91 9876543210"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                Address
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <MapPin size={18} />

                <input
                  defaultValue="Hyderabad, Telangana"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                Website
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <Globe size={18} />

                <input
                  placeholder="https://yourstore.com"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

          </div>

          <div className="mt-8">

            <label className="font-semibold">
              Store Description
            </label>

            <textarea
              rows={5}
              className="w-full border rounded-xl mt-2 p-4"
              defaultValue="We create premium handcrafted home decor products made with love by skilled artisans."
            />

          </div>

          {/* Social */}

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div>

              <label className="font-semibold">
                FaInstagram
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <FaInstagram size={18} />

                <input
                  placeholder="Instagram URL"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

            <div>

              <label className="font-semibold">
                FaFacebook
              </label>

              <div className="flex items-center border rounded-xl mt-2 px-3">

                <FaFacebook size={18} />

                <input
                  placeholder="Facebook URL"
                  className="w-full p-3 outline-none"
                />

              </div>

            </div>

          </div>

          {/* Business Hours */}

          <div className="mt-8">

            <label className="font-semibold">
              Business Hours
            </label>

            <input
              defaultValue="Monday - Saturday | 9:00 AM - 7:00 PM"
              className="w-full border rounded-xl mt-2 p-3"
            />

          </div>

          <button className="mt-10 bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-4 rounded-xl flex items-center gap-3">

            <Save size={20} />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}