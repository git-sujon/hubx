import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../Assets/Images/Banner/Hero.png";
import Button from "../../../Components/Button/Button";

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
     
     <div className="absolute inset-0 bg-black/25 "></div>
      <div className="relative mx-auto  px-4 py-32 lg:flex  lg:items-center">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-3xl font-bold sm:text-8xl text-white rajdhani-font">
            Sports Clothing & Fitness Equipment Shopify Theme
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to='/shop'><Button>View Shop</Button></Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
