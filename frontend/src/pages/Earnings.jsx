import React from "react";
import {
  IndianRupee,
  Wallet,
  CreditCard,
  TrendingUp,
} from "lucide-react";

const transactions = [
  {
    id: "#TXN001",
    date: "20 Jul 2026",
    customer: "Rahul Sharma",
    amount: "₹999",
    status: "Paid",
  },
  {
    id: "#TXN002",
    date: "19 Jul 2026",
    customer: "Priya Singh",
    amount: "₹2,499",
    status: "Paid",
  },
  {
    id: "#TXN003",
    date: "18 Jul 2026",
    customer: "Arjun Patel",
    amount: "₹1,299",
    status: "Pending",
  },
  {
    id: "#TXN004",
    date: "17 Jul 2026",
    customer: "Sneha Reddy",
    amount: "₹799",
    status: "Paid",
  },
];

export default function Earnings() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-[#4B2E20]">
          Earnings
        </h1>

        <p className="text-gray-500 mt-2">
          View your earnings, payouts and transaction history.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <Wallet className="text-green-600" size={35} />
            <h2 className="mt-4 text-gray-500">
              Total Earnings
            </h2>
            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹2,45,800
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <IndianRupee className="text-blue-600" size={35} />
            <h2 className="mt-4 text-gray-500">
              Available Balance
            </h2>
            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹38,500
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <CreditCard className="text-orange-500" size={35} />
            <h2 className="mt-4 text-gray-500">
              Pending Payout
            </h2>
            <p className="text-3xl font-bold text-orange-600">
              ₹8,250
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <TrendingUp className="text-purple-600" size={35} />
            <h2 className="mt-4 text-gray-500">
              This Month
            </h2>
            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹42,500
            </p>
          </div>

        </div>

        {/* Withdraw */}

        <div className="bg-white rounded-3xl shadow mt-8 p-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <div>

            <h2 className="text-2xl font-bold text-[#4B2E20]">
              Withdraw Balance
            </h2>

            <p className="text-gray-500 mt-2">
              Transfer available balance to your bank account.
            </p>

          </div>

          <button className="bg-[#4B2E20] hover:bg-[#6B4226] text-white px-8 py-3 rounded-xl">
            Withdraw Now
          </button>

        </div>

        {/* Transactions */}

        <div className="bg-white rounded-3xl shadow mt-8 overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">
                  Transaction ID
                </th>

                <th>Date</th>

                <th>Customer</th>

                <th>Amount</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {transactions.map((item) => (

                <tr
                  key={item.id}
                  className="border-t"
                >

                  <td className="p-5 font-semibold">
                    {item.id}
                  </td>

                  <td className="text-center">
                    {item.date}
                  </td>

                  <td className="text-center">
                    {item.customer}
                  </td>

                  <td className="text-center font-bold text-green-600">
                    {item.amount}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}