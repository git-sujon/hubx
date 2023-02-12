import React from 'react';

const UserProfiles = () => {
  return (
    <div className="overflow-x-auto my-20 container  mx-auto max-w-[867px]">
        <div className="flex justify-center mx-auto py-4">
            <h2 className="text-4xl font-bold rajdhani-font">User Profiles</h2>
          </div>
    <table className="min-w-full divide-y-2 divide-gray-200 text-sm mt-10">
      <thead>
        <tr>
          <th
            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs"
          >
            First Name
          </th>
          <th
            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs"
          >
            Last Name
          </th>
          <th
            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs"
          >
            Email
          </th>
          <th
            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-500 text-xs"
          >
            Password
          </th>
        </tr>
      </thead>
  
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700 text-xs">
            Mr
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">Sujon</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">git.sujon@gmail.com</td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">sujon12345</td>
        </tr>
  
     
  
       
      </tbody>
    </table>
  </div>
  
  );
};

export default UserProfiles;