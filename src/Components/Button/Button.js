import React from "react";

const Button = ({children}) => {
  return (
    <button class="w-full px-3 py-2 mt-1 text-sm font-bold tracking-wide text-white uppercase transition-none bg-[#2554D7]  hover:bg-sky-900 sm:mt-0 sm:w-auto sm:flex-shrink-0 rajdhani-font">
     {children}
    </button>
  );
};

export default Button;
