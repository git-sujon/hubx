import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiSearch, FiUser } from "react-icons/fi";
import TopInfo from "../../../Components/TopInfo/TopInfo";
import { AuthContext } from "../../../Contexts/AuthProvider";
import Button from "../../../Components/Button/Button";
import Spinner from "../../../Components/Sppiner/Sppiner";
import toast  from 'react-hot-toast';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, setLoading, loading } = useContext(AuthContext);

  console.log("user", user);

const signOutHandler = () => {
  logOut()
  .then(()=> {
    toast.success("Sign Out Successfully")
  })
  .catch((error)=> {
    console.error(error.message)
  })
}

  return (
    <>
      <TopInfo></TopInfo>
      <nav x-data={` ${{ isOpen: false }}`} className="bg-white shadow ">
        <div className="container px-6 py-4 mx-auto rajdhani-font">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <Link to="/">
                <span className="font-bold text-4xl">HUBx</span>
              </Link>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  x-cloak
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6`}
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
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 `}
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
                  )}
                </button>
              </div>
            </div>

            <div
              x-cloak
              className={` ${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col  capitalize  lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center font-medium">
                <Link
                  to="/"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
                >
                  Shop
                </Link>
                <Link
                  to="#"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
                >
                  About
                </Link>

                <Link
                  to="/userProfiles"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
                >
                  User Profiles
                </Link>

                <Link
                  to="/signUp"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
                >
                  Register
                </Link>

                {!user?.email ? (
                  <Link
                    to="/login"
                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-white hover:bg-[#040F16] px-2 py-1"
                  >
                    Login
                  </Link>
                ) : (
                  <button onClick={signOutHandler} className="w-full px-2 py-1  text-base font-semibold tracking-wide uppercase transition-none  text-white bg-[#040F16] hover:bg-sky-900 sm:mt-0 sm:w-auto sm:flex-shrink-0 rajdhani-font">
                   Sign Out
                  </button>
                )}
              </div>

              <div className="flex  mt-6 lg:mt-0 ">
                {/* search  */}

                <FiSearch className="w-5 h-5 text-black ml-5 font-bold cursor-pointer" />
                <Link to="login">
                  <FiUser className="w-5 h-5 text-black ml-5 font-bold cursor-pointer" />
                </Link>
                <FiShoppingBag className="w-5 h-5 text-black ml-5 font-bold cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
