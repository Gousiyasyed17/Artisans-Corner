import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question,
            suggestion, or need support, our team is here to help.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold text-[#4B2E20] mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

                  <MapPin className="text-[#4B2E20]" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4B2E20]">
                    Office Address
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Artisan Corner Headquarters<br />
                    Hyderabad, Telangana, India
                  </p>

                </div>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

                  <Phone className="text-[#4B2E20]" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4B2E20]">
                    Phone
                  </h3>

                  <p className="text-gray-600 mt-2">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

                  <Mail className="text-[#4B2E20]" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4B2E20]">
                    Email
                  </h3>

                  <p className="text-gray-600 mt-2">
                    support@artisancorner.com
                  </p>

                </div>

              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

                  <Clock className="text-[#4B2E20]" />

                </div>

                <div>

                  <h3 className="text-xl font-bold text-[#4B2E20]">
                    Working Hours
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Monday - Saturday<br />
                    9:00 AM - 7:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-[#4B2E20] mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full border rounded-xl p-4 outline-none resize-none"
              ></textarea>
                            <button
                type="submit"
                className="w-full bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold transition"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Map Section */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <iframe
            title="Artisan Corner Location"
            src="https://www.google.com/maps?q=Hyderabad,India&output=embed"
            className="w-full h-[450px]"
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* Social Media */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center text-[#4B2E20] mb-12">
          Connect With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

            <div className="text-5xl mb-5">📘</div>

            <h3 className="text-2xl font-bold text-[#4B2E20]">
              Facebook
            </h3>

            <p className="text-gray-600 mt-3">
              Follow us for new arrivals, artisan stories, and exclusive offers.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

            <div className="text-5xl mb-5">📷</div>

            <h3 className="text-2xl font-bold text-[#4B2E20]">
              Instagram
            </h3>

            <p className="text-gray-600 mt-3">
              Explore beautiful handmade creations and behind-the-scenes moments.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition">

            <div className="text-5xl mb-5">💼</div>

            <h3 className="text-2xl font-bold text-[#4B2E20]">
              LinkedIn
            </h3>

            <p className="text-gray-600 mt-3">
              Stay updated with our company news and community initiatives.
            </p>

          </div>

        </div>

      </section>

      {/* FAQ Preview */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need More Help?
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Visit our Frequently Asked Questions page to find quick answers
            about orders, shipping, returns, payments, and becoming an artisan.
          </p>

          <button className="mt-8 bg-white text-[#4B2E20] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
            Visit FAQ
          </button>

        </div>

      </section>

    </div>
  );
}