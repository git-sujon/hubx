import React, { useEffect, useState } from "react";

const UserProfiles = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://hubx-server-git-sujon.vercel.app/users`, {})
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="overflow-x-auto my-20 container  mx-auto max-w-[867px]">
      <div className="flex justify-center mx-auto py-4">
        <h2 className="text-4xl font-bold rajdhani-font">User Profiles</h2>
      </div>
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm mt-10">
        <thead>
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs">
              First Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs">
              Last Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs">
              Password
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.map((user) => {
            return (
              <tr key={user?._id}>
                <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700 text-xs">
                  {user?.firstName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user?.lastName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user?.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user?.password}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfiles;
