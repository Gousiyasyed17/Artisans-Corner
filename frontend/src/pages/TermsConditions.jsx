import React from "react";
import {
  FileText,
  Shield,
  ShoppingBag,
  AlertTriangle,
} from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-bold">
            Terms & Conditions
          </h1>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            Please read these Terms & Conditions carefully before using
            Artisan Corner. By accessing our platform, you agree to these
            terms.
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

              <FileText className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Fair Usage
            </h3>

            <p className="text-gray-600 mt-3">
              Users must use Artisan Corner responsibly and legally.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

              <ShoppingBag className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Orders
            </h3>

            <p className="text-gray-600 mt-3">
              Orders are processed only after successful confirmation.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

              <Shield className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Secure Platform
            </h3>

            <p className="text-gray-600 mt-3">
              We maintain a secure shopping environment for all users.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FFF2E8] flex items-center justify-center">

              <AlertTriangle className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Responsibilities
            </h3>

            <p className="text-gray-600 mt-3">
              Buyers and sellers must comply with all platform policies.
            </p>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10">

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Acceptance of Terms
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              By accessing Artisan Corner, you agree to comply with these
              Terms & Conditions, our Privacy Policy, and all applicable laws.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              User Accounts
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Users are responsible for maintaining the confidentiality of
              their account credentials and for all activities performed using
              their account.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Orders & Payments
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              All orders are subject to product availability and payment
              confirmation. Prices may change without prior notice.
            </p>

          </div>
                    <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Shipping & Delivery
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Delivery times vary depending on your location and product
              availability. Estimated delivery dates are provided during
              checkout, but delays caused by weather, logistics, or unforeseen
              circumstances may occur.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Returns & Refunds
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Returns are accepted only for eligible products within the
              specified return period. Refunds are processed after successful
              inspection of the returned item according to our return policy.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Seller Responsibilities
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Sellers must provide accurate product descriptions, genuine
              handmade products, correct pricing, and timely order fulfillment.
              Repeated policy violations may result in account suspension.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Limitation of Liability
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Artisan Corner acts as a marketplace connecting buyers and
              artisans. While we strive to maintain a secure and reliable
              platform, we are not liable for indirect damages arising from the
              use of our services beyond the limits permitted by law.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Changes to These Terms
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We may revise these Terms & Conditions periodically. Continued
              use of the platform after changes are published indicates your
              acceptance of the updated terms.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Questions About These Terms?
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            If you have questions regarding these Terms & Conditions, please
            contact our support team. We'll be happy to assist you.
          </p>

          <div className="mt-10 space-y-3">

            <p className="text-xl">
              📧 support@artisancorner.com
            </p>

            <p className="text-xl">
              📞 +91 98765 43210
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}