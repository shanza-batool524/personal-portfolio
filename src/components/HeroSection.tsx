import React from "react";
import { FaTwitter, FaFacebookSquare, FaFigma } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandBinance } from "react-icons/tb";
import { motion } from "framer-motion";

type Props = {
  mainButton: string;
  buttonSpan: string;
};

function HeroSection({ mainButton, buttonSpan }: Props) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center py-10 px-6 md:px-12 lg:px-24">
      {/* Left Section */}
      <div className="lg:w-1/2 flex-1 text-center lg:text-left">
        <div className="text-orange-500 text-2xl md:text-3xl py-4">
          Hello I'm <br />
          <div className="mt-4 text-4xl md:text-5xl lg:text-6xl text-black font-bold">
            James Smith
          </div>
        </div>
        <div className="py-5 text-lg md:text-xl">
          A <span className="text-green-500">Creative Designer</span> from <span>New York</span>
        </div>
        <div className="text-base md:text-lg text-gray-500">
          I am a creative designer in New York and I am passionate, dedicated, and creative in my work.
        </div>
        
        {/* Buttons & Social Links */}
        <div className="py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
        <button className={mainButton}>
              <span className={buttonSpan}></span>
              <span className="relative z-10 group-hover:text-white duration-75">
                Download CV
              </span>
            </button>          <div className="flex gap-4 text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><RiInstagramFill /></a>
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><TbBrandBinance /></a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 flex justify-center">
        <img
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]"
          src="https://dizme-vue.vercel.app/img/slider/avatar.png"
          alt="James Smith"
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-0 left-16 md:left-20 bg-[#3f1010] w-14 h-14 rounded-xl flex justify-center items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <h1 className="text-[#c53d3d] text-xl font-bold text-blue-500">Ai</h1>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-10 md:right-16 bg-white w-14 h-14 rounded-xl flex justify-center items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaFigma className="text-2xl text-blue-500" />
        </motion.div>

        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black w-14 h-14 rounded-xl flex justify-center items-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <h1 className="text-2xl font-bold text-blue-500">Ps</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;