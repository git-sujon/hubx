import React from "react";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const Footer = () => {
  return (
    <footer class="bg-[#040F16] text-white">
      <div class="max-w-screen-xl px-4 py-16  mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-[70px]">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4 ">
          <div>
            <div class="">
              <span className="text-4xl font-bold rajdhani-font">Hubx</span>
            </div>

            <p class="max-w-xs mt-4 text-normal">
              Be the first who learns about our great promotions!
            </p>

            <p className="uppercase text-2xl mt-10 font-semibold rajdhani-font">Follow us</p>
            <ul class="flex gap-6 mt-4">
              {/* Twitter  */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  class=" transition border-2 border-white hover:border-[#2554D7] p-2 inline-block hover:bg-[#2554D7]"
                >
                  <span class="sr-only">Twitter</span>
                  <FiTwitter className="text-2xl  text-white "></FiTwitter>
                </a>
              </li>
              {/* Facebook  */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  class=" transition border-2 border-white hover:border-[#2554D7] p-2 inline-block hover:bg-[#2554D7]"
                >
                  <span class="sr-only">Facebook</span>
                  <FiFacebook className="text-2xl  text-white "></FiFacebook>
                </a>
              </li>
              {/* Instagram  */}
              <li>
                <a
                  href="/"
                  target="_blank"
                  class=" transition border-2 border-white hover:border-[#2554D7] p-2 inline-block hover:bg-[#2554D7]"
                >
                  <span class="sr-only">Instagram</span>
                  <FiInstagram className="text-2xl  text-white "></FiInstagram>
                </a>
              </li>
            </ul>
          </div>

          <div class="grid  gap-8 grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p class="font-semibold text-xl  uppercase rajdhani-font">Products</p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      New Arrival
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Best Seller
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      On Sale
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      All Connection
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-semibold text-xl  uppercase rajdhani-font">Category</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Barbells
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Plates
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Benches
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Apparel
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Straps & Supports
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p class="font-semibold text-xl  uppercase rajdhani-font">Info</p>

              <nav aria-label="Footer Navigation - Company" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Feature
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Store Location
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" class=" transition hover:opacity-75">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

           
          </div>

          <div className="">
              <p class="font-semibold text-xl  uppercase rajdhani-font">Subscribe</p>

              <nav aria-label="Footer Navigation - Legal" class="mt-6">
                <ul class="space-y-4 text-sm">
                  <p className="text-normal">
                    Subscribe our newsletter and get discount 30% off
                  </p>

                  <form class="w-full mt-6">
                    <label for="UserEmail" class="sr-only">
                      {" "}
                      Email{" "}
                    </label>

                    <div class=" border border-gray-100  flex items-center mt-16">
                      <input
                        type="email"
                        id="UserEmail"
                        placeholder="Enter Your Email"
                        class="w-full border-none  p-2 bg-transparent sm:text-sm "
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
