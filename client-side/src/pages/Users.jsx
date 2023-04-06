import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Users() {
  const navigate = useNavigate();
  const token = localStorage.getItem("user_token");
  const userGlobal = useSelector((state) => state.user.user);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    let response = await axios.get("http://localhost:8001/auth/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  const renderUsers = () => {
    return users.map((user) => {
      return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {user.name}
          </th>
          <td class="px-6 py-4">{user.email}</td>
          <td class="px-6 py-4">{user.username}</td>
          <td class="px-6 py-4">{user.isActive ? "Active" : "Not Active"}</td>
        </tr>
      );
    });
  };

  useEffect(() => {
    if (userGlobal.isAdmin) {
      fetchUsers();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
