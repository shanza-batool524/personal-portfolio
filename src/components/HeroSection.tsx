// import { TbBrandBinance } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { SiFiverr } from "react-icons/si";


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
            Kainat Batool
          </div>
        </div>
        <div className="py-5 text-lg md:text-xl">
          <span className="text-green-500">Flutter Developer</span> from <span>Pakistan</span>
        </div>
        <div className="text-base md:text-lg text-gray-500">
          A passionate Flutter Developer dedicated to crafting seamless, high-performance mobile applications.
        </div>

        {/* Buttons & Social Links */}
        <div className="py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
          {/* <button className={mainButton}>
            <span className={buttonSpan}></span>
            <span className="relative z-10 group-hover:text-white duration-75">
              Download CV
            </span>
          </button>   */}
          <a href="/public/kainat.pdf" download="kainat.pdf" className={mainButton}>
            <span className={buttonSpan}></span>
            <span className="relative z-10 group-hover:text-white duration-75">
              Download CV
            </span>
          </a>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/kainat-Batool"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/kainat-batool-96062424a/"><FaLinkedin /></a>
            <a href="https://www.fiverr.com/kainatsiddiquei" target="_blank" rel="noopener noreferrer">
              <img src="/fiverr.png" alt="Fiverr Logo" className="w-5 h-5 object-contain" />
            </a>
            {/* <a href="https://www.fiverr.com/kainatsiddiquei"><SiFiverr  className="text-black-500 w-10 h-10"/></a> */}
            <a href="https://x.com/kainat_siddiqe"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-1/2 flex justify-center">
        <img
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]"
          src="/kainatt.png"
          alt="Kainat Batool"
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-0 left-16 md:left-20 bg-[#fff4f4] w-14 h-14 rounded-xl flex justify-center items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* <h1 className="text-[#015296] text-3xl font-bold"> */}
          <img src="/flutter.png" alt="" className="w-8 h-8 inline-block" />
          {/* </h1> */}
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-10 md:right-16 bg-[#741937] w-14 h-14 rounded-xl flex justify-center items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* <FaFigma className="text-2xl text-blue-500" /> */}
          <img src="/firebase.png" alt="" className="w-8 h-8 inline-block" />

        </motion.div>

        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black w-14 h-14 rounded-xl flex justify-center items-center"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src="/figma.png" alt="" className="w-8 h-8 inline-block" />

          {/* <h1 className="text-2xl font-bold text-blue-500">Ps</h1> */}
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;