import React from "react";
import { ShieldCheck, Lock, Database, Eye } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
            Your privacy matters to us. This policy explains how Artisan Corner
            collects, uses, stores, and protects your personal information.
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto bg-[#FFF2E8] rounded-2xl flex items-center justify-center">

              <ShieldCheck className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Secure Platform
            </h3>

            <p className="text-gray-600 mt-3">
              We use industry-standard security practices to protect your data.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto bg-[#FFF2E8] rounded-2xl flex items-center justify-center">

              <Lock className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Protected Payments
            </h3>

            <p className="text-gray-600 mt-3">
              Payment details are processed securely through trusted gateways.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto bg-[#FFF2E8] rounded-2xl flex items-center justify-center">

              <Database className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Data Protection
            </h3>

            <p className="text-gray-600 mt-3">
              Your information is stored securely and accessed only when required.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="w-16 h-16 mx-auto bg-[#FFF2E8] rounded-2xl flex items-center justify-center">

              <Eye className="text-[#4B2E20]" size={30} />

            </div>

            <h3 className="text-2xl font-bold text-[#4B2E20] mt-6">
              Transparency
            </h3>

            <p className="text-gray-600 mt-3">
              We clearly explain how your information is collected and used.
            </p>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10 space-y-10">

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Information We Collect
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We may collect your name, email address, phone number, shipping
              address, payment details (processed securely), and order history
              to provide our services efficiently.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              How We Use Your Information
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Your information is used to process orders, provide customer
              support, improve user experience, communicate updates, prevent
              fraud, and comply with legal obligations.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Data Security
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We implement appropriate technical and organizational measures to
              protect your information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

          </div>
                    <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Cookies Policy
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Artisan Corner uses cookies and similar technologies to improve
              website performance, remember your preferences, analyze traffic,
              and provide a personalized shopping experience. You can control
              cookie settings through your browser at any time.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Your Rights
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              You have the right to access, update, or request deletion of your
              personal information. You may also request a copy of your stored
              data or withdraw consent for certain communications, subject to
              applicable laws.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Sharing of Information
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We do not sell your personal information. Your data may be shared
              only with trusted service providers such as payment processors,
              delivery partners, or when required by law to complete our
              services safely and efficiently.
            </p>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-[#4B2E20]">
              Policy Updates
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              This Privacy Policy may be updated from time to time to reflect
              changes in our services or legal requirements. Any updates will be
              published on this page with the revised effective date.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Questions About Your Privacy?
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            If you have any questions about this Privacy Policy or how your
            information is handled, our support team is happy to help.
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