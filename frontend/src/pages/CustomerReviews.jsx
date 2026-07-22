import React from "react";
import { Star, Camera } from "lucide-react";

const reviews = [
  {
    id: 1,
    product: "Ceramic Flower Vase",
    rating: 5,
    review:
      "Excellent craftsmanship! The vase looks even more beautiful in person.",
    date: "15 July 2026",
  },
  {
    id: 2,
    product: "Wooden Wall Decor",
    rating: 4,
    review:
      "Very premium quality. Packaging was excellent and delivery was quick.",
    date: "10 July 2026",
  },
];

export default function CustomerReviews() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#4B2E20]">
              My Reviews
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all the reviews you've shared.
            </p>
          </div>

          <button className="bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226] transition">
            Write Review
          </button>
        </div>

        <div className="space-y-6">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-md p-6"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-2xl font-bold text-[#4B2E20]">
                    {item.product}
                  </h2>

                  <div className="flex mt-3">

                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                </div>

                <span className="text-gray-500 text-sm">
                  {item.date}
                </span>

              </div>

              <p className="text-gray-600 mt-5">
                {item.review}
              </p>

              <div className="flex gap-4 mt-6">

                <button className="flex items-center gap-2 border px-5 py-2 rounded-xl hover:bg-gray-100">
                  <Camera size={18} />
                  Add Photos
                </button>

                <button className="bg-[#4B2E20] text-white px-5 py-2 rounded-xl hover:bg-[#6B4226]">
                  Edit Review
                </button>

                <button className="border border-red-500 text-red-500 px-5 py-2 rounded-xl hover:bg-red-50">
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}