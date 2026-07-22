import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative bg-[#f5efe8] overflow-hidden">

      <div className="max-w-[1700px] mx-auto">

        <div className="grid lg:grid-cols-2 items-center min-h-[760px]">

          {/* LEFT */}

          <div className="px-8 md:px-16 xl:px-24 py-20 relative z-20">

            <p className="uppercase tracking-[6px] text-[#b58a55] text-sm font-semibold">
              HANDMADE • PREMIUM • LUXURY
            </p>

            <h1
              className="
                mt-6
                text-[#3d2b1f]
                font-serif
                text-5xl
                md:text-6xl
                xl:text-7xl
                leading-tight
                font-semibold
              "
            >
              Elevate Your
              <br />
              Home With
              <br />
              Timeless Art
            </h1>

            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-9
                max-w-xl
              "
            >
              Discover handcrafted décor made by talented artisans.
              Every creation is designed with passion, tradition,
              and elegance to make your home truly unique.
            </p>

            <div className="flex gap-5 flex-wrap mt-10">

              <Link to="/products">

                <button
                  className="
                    bg-[#4b2e20]
                    hover:bg-[#6c4730]
                    text-white
                    rounded-full
                    px-8
                    py-4
                    flex
                    items-center
                    gap-3
                    transition
                    font-semibold
                  "
                >
                  Shop Collection

                  <ArrowRight size={20}/>
                </button>

              </Link>

              <Link to="/sell">

                <button
                  className="
                    border-2
                    border-[#4b2e20]
                    rounded-full
                    px-8
                    py-4
                    font-semibold
                    text-[#4b2e20]
                    hover:bg-[#4b2e20]
                    hover:text-white
                    transition
                  "
                >
                  Become Artisan
                </button>

              </Link>

            </div>

            <div className="flex gap-14 mt-20 flex-wrap">

              <div>

                <h2 className="text-4xl font-bold text-[#4b2e20]">
                  500+
                </h2>

                <p className="text-gray-500 mt-2">
                  Handmade Products
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#4b2e20]">
                  100+
                </h2>

                <p className="text-gray-500 mt-2">
                  Skilled Artisans
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-[#4b2e20]">
                  4.9★
                </h2>

                <p className="text-gray-500 mt-2">
                  Customer Rating
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-full">            {/* Blend from left side */}

            <div
              className="
                absolute
                inset-y-0
                left-0
                w-48
                bg-gradient-to-r
                from-[#f5efe8]
                via-[#f5efe8]/70
                to-transparent
                z-20
              "
            ></div>

            {/* Decorative Glow */}

            <div
              className="
                absolute
                -top-16
                right-0
                w-96
                h-96
                rounded-full
                bg-[#e6d7c5]
                blur-3xl
                opacity-40
              "
            ></div>

            {/* Hero Image */}

            <img
              src={heroImage}
              alt="Luxury Handmade Decor"
              className="
                w-full
                h-[760px]
                object-cover
                object-center
                relative
                z-10
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
}