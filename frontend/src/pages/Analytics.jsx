import React from "react";
import {
  TrendingUp,
  Users,
  Package,
  IndianRupee,
  Star,
  ShoppingCart,
  Download,
  Calendar,
} from "lucide-react";

export default function Analytics() {
  const topProducts = [
    {
      name: "Ceramic Flower Vase",
      sales: 520,
      revenue: "₹5,18,000",
    },
    {
      name: "Wooden Wall Decor",
      sales: 438,
      revenue: "₹8,72,000",
    },
    {
      name: "Macrame Hanging",
      sales: 401,
      revenue: "₹4,85,000",
    },
    {
      name: "Clay Lamp",
      sales: 368,
      revenue: "₹2,94,000",
    },
  ];

  const topSellers = [
    {
      name: "Craft Villa",
      rating: 4.9,
      revenue: "₹12,50,000",
    },
    {
      name: "Wood World",
      rating: 4.8,
      revenue: "₹10,80,000",
    },
    {
      name: "Clay Studio",
      rating: 4.7,
      revenue: "₹9,30,000",
    },
    {
      name: "Art Heaven",
      rating: 4.7,
      revenue: "₹8,90,000",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Analytics Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Marketplace insights, revenue and growth analytics.
            </p>

          </div>

          <div className="flex gap-4">

            <select className="bg-white rounded-xl shadow px-4 py-3">

              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
              <option>This Year</option>

            </select>

            <button className="bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226] flex items-center gap-2">

              <Download size={18} />

              Export

            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <IndianRupee className="text-green-600" size={35}/>
            <h3 className="mt-4 text-gray-500">Revenue</h3>
            <p className="text-3xl font-bold text-[#4B2E20] mt-2">
              ₹18.5L
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <Users className="text-blue-600" size={35}/>
            <h3 className="mt-4 text-gray-500">Customers</h3>
            <p className="text-3xl font-bold text-[#4B2E20] mt-2">
              12,540
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <Package className="text-orange-600" size={35}/>
            <h3 className="mt-4 text-gray-500">Products</h3>
            <p className="text-3xl font-bold text-[#4B2E20] mt-2">
              8,936
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <ShoppingCart className="text-purple-600" size={35}/>
            <h3 className="mt-4 text-gray-500">Orders</h3>
            <p className="text-3xl font-bold text-[#4B2E20] mt-2">
              25,412
            </p>
          </div>

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow p-8">

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold text-[#4B2E20]">
                Revenue Trend
              </h2>

              <TrendingUp className="text-green-600"/>

            </div>

            <div className="h-72 mt-8 bg-gradient-to-br from-[#FFF5EC] to-[#F5ECE2] rounded-2xl flex items-center justify-center">

              <div className="text-center">

                <TrendingUp
                  size={80}
                  className="mx-auto text-gray-400"
                />

                <p className="mt-4 text-gray-500">
                  Revenue Chart (Backend Integration)
                </p>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold text-[#4B2E20]">
                Customer Growth
              </h2>

              <Calendar className="text-blue-600"/>

            </div>

            <div className="h-72 mt-8 bg-gradient-to-br from-[#FFF5EC] to-[#F5ECE2] rounded-2xl flex items-center justify-center">

              <div className="text-center">

                <Users
                  size={80}
                  className="mx-auto text-gray-400"
                />

                <p className="mt-4 text-gray-500">
                  Growth Chart (Backend Integration)
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Tables */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-3xl shadow p-6">

            <h2 className="text-2xl font-bold text-[#4B2E20] mb-5">
              Best Selling Products
            </h2>

            <table className="w-full">

              <thead className="bg-[#F5ECE2]">

                <tr>

                  <th className="text-left p-4">Product</th>
                  <th>Sales</th>
                  <th>Revenue</th>

                </tr>

              </thead>

              <tbody>

                {topProducts.map((item)=>(
                  <tr key={item.name} className="border-t">

                    <td className="p-4 font-semibold">
                      {item.name}
                    </td>

                    <td className="text-center">
                      {item.sales}
                    </td>

                    <td className="text-center text-green-600 font-semibold">
                      {item.revenue}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          <div className="bg-white rounded-3xl shadow p-6">

            <h2 className="text-2xl font-bold text-[#4B2E20] mb-5">
              Top Sellers
            </h2>

            <table className="w-full">

              <thead className="bg-[#F5ECE2]">

                <tr>

                  <th className="text-left p-4">Seller</th>
                  <th>Rating</th>
                  <th>Revenue</th>

                </tr>

              </thead>

              <tbody>

                {topSellers.map((seller)=>(
                  <tr key={seller.name} className="border-t">

                    <td className="p-4 font-semibold">
                      {seller.name}
                    </td>

                    <td>

                      <div className="flex justify-center items-center gap-1">

                        <Star
                          size={16}
                          fill="#FFD700"
                          className="text-yellow-400"
                        />

                        {seller.rating}

                      </div>

                    </td>

                    <td className="text-center font-semibold text-green-600">
                      {seller.revenue}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}