import React from "react";
import { Link } from "react-router-dom";
import { BsBagPlus, BsEye } from "react-icons/bs";

const ProductDetails = ({ product }) => {
  const { id, title, img, prePrice, price } = product;
  return (
    <li className="">
      <div class="block overflow-hidden group  ">
        <div className="relative">
          <img src={img} alt={title} class=" w-full " />

          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 overly-bg bg-opacity-75 opacity-0 hover:opacity-100  font-black hover:bg-black/40 border-2 border-white bg-white  ">
            <div className=" bottom-20 right-4 absolute p-3 rounded-full bg-white">
              <Link to=" ">
                <BsBagPlus className="text-black  font-bold  " />
              </Link>
            
            </div>
            <div className="  bottom-8 right-4 space-y-4 absolute p-3 rounded-full bg-white">
            <Link to=" ">
                <BsEye className="text-black  font-bold  " />
              </Link>
            
            </div>
          </div>
        </div>

        <div class=" pt-3 bg-white rajdhani-font">
          <h3 class="text-base text-[#040F16] font-bold ">{title}</h3>

          <div className="flex items-center gap-x-1.5">
            {prePrice && (
              <p class="mt-2">
                <span class="sr-only"> Previous Price </span>

                <span class="tracking-wider text-gray-500 font-semibold text-base ">
                  ${prePrice}
                </span>
              </p>
            )}
            <p class="mt-2">
              <span class="sr-only"> Regular Price </span>

              <span class="tracking-wider text-[#D47969] font-semibold text-base ">
                ${price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductDetails;
