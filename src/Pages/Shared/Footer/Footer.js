import React from "react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const Footer = () => {
  return (
    <footer className="bg-[#040F16] text-white">
      <div className="max-w-screen-xl px-4 py-16  mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-[70px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 ">
          <div>
            <div className="">
              <span className="text-4xl font-bold rajdhani-font">Hubx</span>
            </div>

            <p className="max-w-xs mt-4 text-normal">
              Be the first who learns about our great promotions!
            </p>

            <p className="uppercase text-2xl mt-10 font-semibold rajdhani-font">Follow us</p>
            <ul className="flex gap-6 mt-4">
              {/* Twitter  */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  className=" transition border-2 border-white hover:border-[#2554D7] p-2 inline-block hover:bg-[#2554D7]"
                >
                  <span className="sr-only">Twitter</span>
                  <FiTwitter className="text-2xl  text-white "></FiTwitter>
                </a>
              </li>
              {/* Facebook  */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  className=" transition border-2 border-white hover:border-[#2554D7] p-2 inline-block hover:bg-[#2554D7]"
                >
                  <span className="sr-only">Facebook</span>
                  <FiFacebook className="text-2xl  text-white "></FiFacebook>
                </a>
              </li>
              {/* Instagram  */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  className=" transition border-2 border-white hover:border-[#2554D7] p-2 inline-block hover:bg-[#2554D7]"
                >
                  <span className="sr-only">Instagram</span>
                  <FiInstagram className="text-2xl  text-white "></FiInstagram>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid  gap-8 grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-xl  uppercase rajdhani-font">Products</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      New Arrival
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Best Seller
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      On Sale
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      All Connection
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-xl  uppercase rajdhani-font">Category</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Barbells
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Plates
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Benches
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Apparel
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Straps & Supports
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-semibold text-xl  uppercase rajdhani-font">Info</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Feature
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Store Location
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className=" transition hover:opacity-75">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

           
          </div>

          <div className="">
              <p className="font-semibold text-xl  uppercase rajdhani-font">Subscribe</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <p className="text-normal">
                    Subscribe our newsletter and get discount 30% off
                  </p>

                  <form className="w-full mt-6">
                    <label for="UserEmail" className="sr-only">
                      {" "}
                      Email{" "}
                    </label>

                    <div className=" border border-gray-100  flex items-center mt-16">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="Enter Your Email"
                        className="w-full border-none  p-2 bg-transparent sm:text-sm "
                      />

                      <Button>Sign Up</Button>
                    </div>
                  </form>
                </ul>
              </nav>
            </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
