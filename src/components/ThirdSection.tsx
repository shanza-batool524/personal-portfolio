
type Props = {
  mainButton: string;
  buttonSpan: string;
  servicesRef: React.RefObject<HTMLDivElement>; // Pass the servicesRef as a prop
};

function ThirdSection({ mainButton, buttonSpan, servicesRef }: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center py-10 px-6 md:px-12 lg:px-24">
      {/* Left Side - Image & Floating Stats */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl"
          src="conference.png"
          alt="Kainat Batoool"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left">
        <div className="text-orange-600 text-2xl md:text-3xl">Crafting Code with Precision</div>
        <div className="py-4 text-3xl md:text-4xl lg:text-5xl font-bold">
          Building Digital Experiences That Matter
        </div>
        <div className="text-base md:text-lg text-gray-500 mt-4">
          I'm a passionate developer who loves bringing ideas to life through clean, efficient, and innovative code. Whether it's crafting seamless mobile applications or building powerful digital solutions, I can develop anything you envision. Let's turn your ideas into reality!
        </div>

        {/* Button Section */}
        <div className="py-8 flex items-center gap-8 justify-center lg:justify-start">
          <button
            className={mainButton}
            onClick={() => {
              servicesRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span className={buttonSpan}></span>
            <span className="relative z-10 group-hover:text-white duration-75">
              View Services
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
