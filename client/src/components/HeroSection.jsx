import React from "react";
import { assets } from "../assets/assets";
import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/thudarum.jpg")] bg-cover bg-[position:73%_center] h-screen'>
      <img
        src={assets.thudarumLogo}
        alt="Thudarum Logo"
        className="h-20 lg:h-28 w-auto mt-20"
      />

      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | Thriller</span>
        <div className="flex items-center gap-1">
          <CalendarIcon className="w-4.5 h-4.5" /> 2025
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4.5 h-4.5" /> 2h 44m
        </div>
      </div>
      <p className="max-w-md text-gray-300">
        Taxi driver Benz lives a quiet life with his Ambassador and family.
        However, his fate shifts and an unexpected twist drags him into a storm
        he never saw coming.
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
