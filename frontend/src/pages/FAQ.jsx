import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse products, add your favorite items to the cart, proceed to checkout, enter your shipping details, choose a payment method, and place your order.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We support Cash on Delivery (COD), UPI, Credit Cards, Debit Cards, and Net Banking.",
    },
    {
      question: "Can I return a handmade product?",
      answer:
        "Yes. Eligible products can be returned within the return window mentioned on the product page if they meet our return policy.",
    },
    {
      question: "How can I become a seller?",
      answer:
        "Create a seller account, complete profile verification, upload your products, and start selling on Artisan Corner.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Go to Customer Dashboard → My Orders and click Track Order to view the latest shipping updates.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most products are delivered within 3–7 business days depending on your location.",
    },
    {
      question: "Is online payment secure?",
      answer:
        "Yes. All payments are processed using secure encrypted payment gateways.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Orders can be cancelled before they are shipped from the seller.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FFF8F2]">

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] py-20 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Find answers to the most commonly asked questions.
          </p>

          <div className="relative max-w-xl mx-auto mt-10">

            <Search
              className="absolute left-4 top-4 text-gray-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full py-4 pl-12 pr-4 text-black outline-none"
            />

          </div>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="space-y-5">
                      {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#4B2E20]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </section>

      {/* Still Need Help */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="bg-gradient-to-r from-[#4B2E20] to-[#7A5238] rounded-3xl text-white p-12 text-center">

          <h2 className="text-4xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto">
            Our support team is always ready to help you with orders,
            payments, seller registration, shipping, or anything else.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <button className="bg-white text-[#4B2E20] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
              Contact Support
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-[#4B2E20] transition">
              Email Us
            </button>

          </div>

        </div>

      </section>

      {/* Help Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-5">📦</div>

            <h3 className="text-2xl font-bold text-[#4B2E20]">
              Orders
            </h3>

            <p className="text-gray-600 mt-4">
              Learn how to place, cancel, or track your orders quickly.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-5">💳</div>

            <h3 className="text-2xl font-bold text-[#4B2E20]">
              Payments
            </h3>

            <p className="text-gray-600 mt-4">
              Information about UPI, cards, COD, refunds, and invoices.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-5">🎨</div>

            <h3 className="text-2xl font-bold text-[#4B2E20]">
              Sellers
            </h3>

            <p className="text-gray-600 mt-4">
              Everything you need to know about joining Artisan Corner as a seller.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}
        