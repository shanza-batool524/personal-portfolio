import React from "react";

function DesignOfLife() {
  const progressBars = [
    { name: "Illustrator", color: "bg-orange-600", percentage: "85%" },
    { name: "Photoshop", color: "bg-green-600", percentage: "95%" },
    { name: "Figma", color: "bg-purple-600", percentage: "75%" },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-[10vw] py-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 py-6">
        <h1 className="text-orange-600 text-xl sm:text-2xl my-2">Design is Life</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium my-3">
          I Develop Skills Regularly to Keep Me Updated
        </h2>
        <h1 className="text-gray-500 text-lg my-4">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </h1>

        {/* Progress Bars */}
        {progressBars.map((item, index) => (
          <div key={index} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg my-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-800 font-medium text-lg">{item.name}</span>
              <span className="text-orange-600 font-semibold">{item.percentage}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${item.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src="https://dizme-vue.vercel.app/img/skills/1.jpg"
          alt="Design Skills"
          className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
  );
}

export default DesignOfLife;
