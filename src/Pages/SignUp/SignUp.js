import React from 'react';
import Button from '../../Components/Button/Button';

const SignUp = () => {
  return (
    <div className="my-20">
    <div class="w-full max-w-sm mx-auto overflow-hidden bg-white  ">
      <div class=" py-4">
        <div class="flex justify-center mx-auto">
          <h2 className="text-4xl font-bold rajdhani-font">Sign up</h2>
        </div>

        <form className="mt-10">
          <div class="w-full mt-4">
          <label for="firstName" class="block text-sm text-gray-900 font-semibold">First name</label>
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Enter your first name"
              aria-label="First Name"
            />
          </div>
          <div class="w-full mt-8">
          <label for="firstName" class="block text-sm text-gray-900 font-semibold">Last name</label>
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Enter your last name"
              aria-label="last Name"
            />
          </div>
          <div class="w-full mt-8">
          <label for="email" class="block text-sm text-gray-900 font-semibold">Email</label>
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="your@email.com"
              aria-label="Email Address"
            />
          </div>

          <div class="w-full mt-8">
          <label for="password" class="block text-sm text-gray-900 font-semibold">Password</label>
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="***********"
              aria-label="Password"
            />
          </div>

          <div class="flex items-center gap-x-8 mt-10">
          

            <Button>Register</Button>

     
          </div>
        </form>
      </div>

     
    </div>

  </div>
  );
};

export default SignUp;