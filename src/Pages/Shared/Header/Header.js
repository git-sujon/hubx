import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiSearch , FiUser} from 'react-icons/fi';
import TopInfo from "../../../Components/TopInfo/TopInfo";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)
  return (
   <>
   <TopInfo></TopInfo>
    <nav
      x-data={` ${{ isOpen: false }}`}
      class="bg-white shadow "
    >
      <div class="container px-6 py-4 mx-auto rajdhani-font">
        <div class="lg:flex lg:items-center">
          <div class="flex items-center justify-between">
            <Link to="/">
             <span className="font-bold text-4xl">HUBx</span>
            </Link>

            {/* <!-- Mobile menu button --> */}
            <div class="flex lg:hidden">
              <button
                x-cloak
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                class="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
              {
                !isOpen ?   <svg
             
                
                xmlns="http://www.w3.org/2000/svg"
                class={`w-6 h-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
:
              <svg
               
          
                xmlns="http://www.w3.org/2000/svg"
                class={`w-6 h-6 `}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              }

              </button>
            </div>
          </div>

          <div
            x-cloak
            class={` ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
          >
            <div class="flex flex-col  capitalize  lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center font-medium">
              <Link
                to="/"
                class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
              >
                Home
              </Link>
              <Link
                to="#"
                class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
              >
                Shop
              </Link>
              <Link
                to="#"
                class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
              >
                About
              </Link>
            
              <Link
                to="/login"
                class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
              >
                Login
              </Link>
              <Link
                to="/signUp"
                class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
              >
                Register
              </Link>
              <Link
                to="/userProfiles"
                class="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
              >
                Profiles
              </Link>

           
            </div>

            <div class="flex  mt-6 lg:mt-0 ">
              {/* search  */}

              <FiSearch className="w-5 h-5 text-black ml-5 font-bold cursor-pointer"/>
              <Link to='login'>
                <FiUser className="w-5 h-5 text-black ml-5 font-bold cursor-pointer"/>
              </Link>
              <FiShoppingBag className="w-5 h-5 text-black ml-5 font-bold cursor-pointer"/>

            </div>
          </div>
        </div>
      </div>
    </nav>
   </>
  );
};

export default Header;
