import React from "react";
import { Link } from "react-router-dom";
import { BsBagPlus, BsEye } from "react-icons/bs";

const ProductDetails = ({ product }) => {
  const { id, title, img, prePrice, price } = product;
  return (
    <li className="">
      <div className="block overflow-hidden group  ">
        <div className="relative">
          <img src={img} alt={title} className=" w-full " />

          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 overly-bg bg-opacity-75 opacity-0 hover:opacity-100  font-black hover:bg-black/40 border-2 border-white bg-white  ">
            <div className=" bottom-20 right-4 absolute p-3 rounded-full bg-white hover:bg-sky-900 ">
              <Link to=" ">
                <BsBagPlus className="text-black  font-bold  hover:text-white" />
              </Link>
            
            </div>
            <div className="  bottom-8 right-4 space-y-4 absolute p-3 rounded-full bg-white hover:bg-sky-900 ">
            <Link to=" ">
                <BsEye className="text-black  font-bold  hover:text-white" />
              </Link>
            
            </div>
          </div>
        </div>

        <div className=" pt-3 bg-white rajdhani-font">
          <h3 className="text-base text-[#040F16] font-bold ">{title}</h3>

          <div className="flex items-center gap-x-1.5">
            {prePrice && (
              <p className="mt-2">
                <span className="sr-only"> Previous Price </span>

                <span className="tracking-wider text-gray-500 font-semibold text-base ">
                  ${prePrice}
                </span>
              </p>
            )}
            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>

              <span className="tracking-wider text-[#D47969] font-semibold text-base ">
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
