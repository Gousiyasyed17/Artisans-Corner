import React from "react";
import { Award, Heart, Users, Globe } from "lucide-react";

export default function About() {
  const stats = [
    {
      number: "10K+",
      title: "Happy Customers",
      icon: <Heart size={28} />,
    },
    {
      number: "2K+",
      title: "Verified Artisans",
      icon: <Users size={28} />,
    },
    {
      number: "15K+",
      title: "Handmade Products",
      icon: <Award size={28} />,
    },
    {
      number: "28",
      title: "States Connected",
      icon: <Globe size={28} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-bold">
            About Artisan Corner
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-200 leading-8">
            Artisan Corner is a premium marketplace that connects talented
            artisans with people who appreciate authentic handmade creations.
            Every purchase supports craftsmanship, creativity, and local
            communities across India.
          </p>

        </div>

      </section>

      {/* Our Story */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900"
              alt="Artisans"
              className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />

          </div>

          <div>

            <h2 className="text-4xl font-bold text-[#4B2E20]">
              Our Story
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Thousands of skilled artisans create beautiful handmade products,
              but many struggle to reach customers beyond their local markets.
              Artisan Corner was created to bridge that gap by giving artisans
              a trusted online platform to showcase and sell their work.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              We believe every handcrafted item carries a unique story,
              preserving generations of tradition, culture, and creativity.
              Our mission is to help artisans grow while giving customers access
              to authentic handmade products.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                      {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FFF2E8] flex items-center justify-center text-[#4B2E20]">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-[#4B2E20] mt-6">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          <div className="rounded-3xl bg-[#FFF8F2] p-10 shadow-lg">

            <h2 className="text-3xl font-bold text-[#4B2E20] mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To empower artisans by providing a trusted digital marketplace
              where handcrafted products reach customers worldwide while
              preserving India's rich artistic heritage.
            </p>

          </div>

          <div className="rounded-3xl bg-[#FFF8F2] p-10 shadow-lg">

            <h2 className="text-3xl font-bold text-[#4B2E20] mb-6">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To become the world's leading destination for authentic handmade
              products, connecting every artisan with customers who value
              creativity, sustainability, and craftsmanship.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center text-[#4B2E20] mb-14">
          Why Choose Artisan Corner?
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#4B2E20] mb-4">
              🏺 Authentic Handmade
            </h3>

            <p className="text-gray-600 leading-7">
              Every product is handcrafted by verified artisans using
              traditional techniques and premium materials.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#4B2E20] mb-4">
              🤝 Support Local Communities
            </h3>

            <p className="text-gray-600 leading-7">
              Your purchases directly help artisans grow their businesses and
              preserve cultural craftsmanship.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#4B2E20] mb-4">
              🌱 Sustainable Shopping
            </h3>

            <p className="text-gray-600 leading-7">
              Handmade products are eco-friendly, durable, and created with
              care for people and the environment.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#4B2E20] mb-4">
              ⭐ Premium Quality
            </h3>

            <p className="text-gray-600 leading-7">
              Every item is carefully reviewed to ensure excellent quality and
              customer satisfaction.
            </p>
          </div>

        </div>

      </section>

      {/* Community Section */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Building a Strong Artisan Community
          </h2>

          <p className="mt-8 text-lg text-gray-200 leading-8">
            Artisan Corner is more than an online marketplace. It is a community
            where talented creators, passionate buyers, and traditional
            craftsmanship come together to inspire each other and keep handmade
            art alive for future generations.
          </p>

        </div>

      </section>

    </div>
  );
}
        