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
    <div className="flex flex-col-reverse lg:flex-row items-center py-10 px-6 md:px-12 lg:px-24 mx-[10%] h-auto lg:h-[70vh]">
      <div className="flex-1 text-center lg:text-left lg:h-auto flex items-center">
        <div>
          <div className="text-orange-600 md:text-3xl lg:py-4 sm:py-1">
            Hello I'm <br />
            <div className="lg:mt-10 md:text-4xl lg:text-[8vh] text-black sm:py-1">
              Kainat Batool
            </div>
          </div>
          <div className="lg:py-5 sm:py-1 text-lg md:text-xl lg:text-4xl ">
            <span className="text-green-500"><span className="text-black ">A </span>Flutter Developer</span> from <span className="text-purple-500">Pakistan</span>
          </div>
          <div className="text-base lg:text-2xl md:text-lg ">
            A passionate Flutter Developer dedicated to crafting seamless, high-performance mobile applications.
          </div>

          <div className="py-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <button className={`${mainButton} lg:w-[30%] h-[5vh] rounded-[30px]`}>
              <a href="/public/kainat.pdf" download="kainat.pdf">
                <span className={buttonSpan}></span>
                <span className="relative z-10 group-hover:text-white duration-75">
                  Download CV
                </span>
              </a>
            </button>
            <div className="flex gap-4 text-xl">
              <a href="https://github.com/kainat-Batool"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/kainat-batool-96062424a/"><FaLinkedin /></a>
              <a href="https://www.fiverr.com/kainatsiddiquei" target="_blank" rel="noopener noreferrer">
                <img src="/fiverr.png" alt="Fiverr Logo" className="w-5 h-5 object-contain" />
              </a>
              <a href="https://x.com/kainat_siddiqe"><FaXTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-1 max-w-xs lg:w-[120%] sm:max-w-sm md:max-w-md mx-auto flex justify-center items-center sm:h-auto lg:h-[60vh]">
  <img
    className="sm:max-w-[80%] md:max-w-[100vw] sm:h-auto lg:h-full object-contain"
    src="/kainatt.png"
    alt="Kainat Batool"
  />

  {/* Floating Icons */}
  <motion.div
    className="absolute top-0 left-16 md:left-20 bg-[#fff4f4] rounded-xl justify-center items-center hidden md:block p-2"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <img src="/flutter.png" alt="" className="w-8 h-8 inline-block" />
  </motion.div>

  <motion.div
    className="absolute top-1/3 right-10 md:right-17 bg-[#741937] rounded-xl flex justify-center items-center p-2 hidden md:block"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <img src="/firebase.png" alt="" className="w-8 h-8 inline-block" />
  </motion.div>

  <motion.div
    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black rounded-xl justify-center items-center hidden md:block p-2"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <img src="/figma.png" alt="" className="w-8 h-8 inline-block" />
  </motion.div>
</div>

    </div>
  );
}

export default HeroSection;
