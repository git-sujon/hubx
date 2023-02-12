import React from "react";

const Button = ({children}) => {
  return (
    <button className="w-full px-5 py-3 mt-1 text-base font-semibold tracking-wide text-white uppercase transition-none bg-[#2554D7]  hover:bg-sky-900 sm:mt-0 sm:w-auto sm:flex-shrink-0 rajdhani-font">
     {children}
    </button>
  );
};

export default Button;
