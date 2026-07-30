import React, { useEffect, useState } from "react";
import {
  IndianRupee,
  Wallet,
  CreditCard,
  TrendingUp,
} from "lucide-react";

import { getSellerEarnings } from "../services/orderService";

export default function Earnings() {
  const [summary, setSummary] = useState({
    totalEarnings: 0,
    availableBalance: 0,
    pendingPayout: 0,
    monthlyEarnings: 0,
  });

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadEarnings();
  }, []);

  const loadEarnings = async () => {
    try {
      const data = await getSellerEarnings();

      setSummary({
        totalEarnings: data.totalEarnings,
        availableBalance: data.availableBalance,
        pendingPayout: data.pendingPayout,
        monthlyEarnings: data.monthlyEarnings,
      });

      setTransactions(data.transactions || []);
    } catch (error) {
      console.error(error);
    }
  };

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
              ₹{summary.totalEarnings}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <IndianRupee className="text-blue-600" size={35} />

            <h2 className="mt-4 text-gray-500">
              Available Balance
            </h2>

            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹{summary.availableBalance}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <CreditCard className="text-orange-500" size={35} />

            <h2 className="mt-4 text-gray-500">
              Pending Payout
            </h2>

            <p className="text-3xl font-bold text-orange-600">
              ₹{summary.pendingPayout}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <TrendingUp className="text-purple-600" size={35} />

            <h2 className="mt-4 text-gray-500">
              This Month
            </h2>

            <p className="text-3xl font-bold text-[#4B2E20]">
              ₹{summary.monthlyEarnings}
            </p>
          </div>

        </div>

        {/* Withdraw */}

        <div className="bg-white rounded-3xl shadow mt-8 p-6 flex flex-col md:flex-row justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold text-[#4B2E20]">
              Withdraw Balance
            </h2>

            <p className="text-gray-500 mt-2">
              Transfer available balance to your bank account.
            </p>

          </div>

          <button className="bg-[#4B2E20] text-white px-8 py-3 rounded-xl">
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

              {transactions.length === 0 ? (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center p-8"
                  >
                    No Transactions Found
                  </td>

                </tr>

              ) : (

                transactions.map((item) => (

                  <tr
                    key={item._id}
                    className="border-t"
                  >

                    <td className="p-5 font-semibold">
                      #{item._id.slice(-6)}
                    </td>

                    <td className="text-center">
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="text-center">
                      {item.customer?.name}
                    </td>

                    <td className="text-center font-bold text-green-600">
                      ₹{item.totalPrice}
                    </td>

                    <td className="text-center">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          item.orderStatus === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.orderStatus}
                      </span>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}