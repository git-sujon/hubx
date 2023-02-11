

import React from "react";

const ButtonLightBlue = ({children}) => {
  return (
    <button class="w-full px-6 py-4 mt-1 text-base font-semibold tracking-wide text-white uppercase transition-none bg-[#53D3D1]  hover:bg-sky-900 sm:mt-0 sm:w-auto sm:flex-shrink-0 rajdhani-font">
     {children}
    </button>
  );
};

export default ButtonLightBlue;