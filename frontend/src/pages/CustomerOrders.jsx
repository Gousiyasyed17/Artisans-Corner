import React from "react";

function CustomerOrders() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] p-10">
      <h1 className="text-3xl font-bold text-gray-800">
        My Orders
      </h1>

      <p className="mt-4 text-gray-600">
        Your purchased artisan products will appear here.
      </p>

      <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          No Orders Yet
        </h2>

        <p className="mt-2 text-gray-500">
          You haven't placed any orders yet.
        </p>

        <button className="mt-6 bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226] transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default CustomerOrders;