import React from "react";
import "../../Assets/Fonts/fonts.css";
const LogIn = () => {
  return (
    <div className="my-20">
      <div class="w-full max-w-sm mx-auto overflow-hidden bg-white  ">
        <div class=" py-4">
          <div class="flex justify-center mx-auto">
            <p className="text-4xl font-bold rajdhani-font">Log In</p>
          </div>

          <form className="mt-10">
            <div class="w-full mt-4">
            <label for="email" class="block text-sm text-gray-900 font-semibold">Email</label>
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="your@email.com"
                aria-label="Email Address"
              />
            </div>

            <div class="w-full mt-4">
            <label for="password" class="block text-sm text-gray-900 font-semibold">Password</label>
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="********"
                aria-label="Password"
              />
            </div>

            <div class="flex items-center justify-between mt-4">
            

              <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>

              <a href="#" class="text-sm text-gray-600  hover:text-gray-500">
                Forget Password?
              </a>
            </div>
          </form>
        </div>

        <div class="flex items-center justify-center py-4 text-center bg-gray-50 ">
          <span class="text-sm text-gray-600 ">Don't have an account? </span>

          <a
            href="#"
            class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
