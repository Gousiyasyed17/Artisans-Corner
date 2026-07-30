import React, { useEffect, useState } from "react";
import { getUsers } from "../services/adminService";

import {
  Search,
  Eye,
  Trash2,
  UserCheck,
  UserX,
} from "lucide-react";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Manage Users
            </h1>

            <p className="text-gray-500 mt-2">
              View, search and manage all marketplace users.
            </p>

          </div>

        </div>

        {/* Top Controls */}

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow p-4 flex items-center">

            <Search className="text-gray-400" />

            <input
              type="text"
              placeholder="Search users..."
              className="ml-4 w-full outline-none"
            />

          </div>

          <select className="bg-white rounded-2xl shadow p-4 outline-none">

            <option>All Roles</option>
            <option>Customer</option>
            <option>Seller</option>
            <option>Admin</option>

          </select>

        </div>

        {/* Summary */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-3xl font-bold text-[#4B2E20] mt-2">
              {users.length}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Customers</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {users.filter(user => user.role === "customer").length}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Sellers</h3>
            <p className="text-3xl font-bold text-orange-600 mt-2">
              {users.filter(user => user.role === "seller").length}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow p-6">
            <h3 className="text-gray-500">Blocked</h3>
            <p className="text-3xl font-bold text-red-600 mt-2">
              {users.filter(user => user.role === "admin").length}
            </p>
          </div>

        </div>

        {/* Users Table */}

        <div className="overflow-x-auto bg-white rounded-3xl shadow mt-8">

          <table className="w-full">

            <thead className="bg-[#F5ECE2]">

              <tr>

                <th className="text-left p-5">User ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {users.map((user) => (

                <tr
                  key={user._id.slice(-6)}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-5 font-semibold">
                    {user._id.slice(-6)}
                  </td>

                  <td className="text-center">
                    {user.name}
                  </td>

                  <td className="text-center">
                    {user.email}
                  </td>

                  <td className="text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${user.role === "seller"
                          ? "bg-orange-100 text-orange-700"
                          : user.role === "admin"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {user.role}
                    </span>

                  </td>

                  <td className="text-center">

                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200">
                        <Eye
                          size={18}
                          className="text-blue-600"
                        />
                      </button>

                      <button className="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200">
                        <UserX size={18} className="text-yellow-700" />
                      </button>

                      <button className="bg-red-100 p-2 rounded-lg hover:bg-red-200">
                        <Trash2
                          size={18}
                          className="text-red-600"
                        />
                      </button>

                    </div>

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