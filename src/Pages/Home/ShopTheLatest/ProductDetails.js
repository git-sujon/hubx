import React from "react";

const ProductDetails = ({ product }) => {
  const { id, title, img, prePrice, price } = product;
  return (
    <li>
      <a href="#" class="block overflow-hidden group">
        <img src={img} alt={title} class=" w-full " />

        <div class="relative pt-3 bg-white rajdhani-font">
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
      </a>
    </li>
  );
};

export default ProductDetails;
