
function PortfolioAmazingWork() {
  // const filteringData = [
  //   "All",
  //   "Youtube",
  //   "Vimeo",
  //   "SoundCloud",
  //   "Popup",
  //   "Detail",
  // ];
  // const handleFilteration = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
     <div className="text-center px-4">
  <h1 className="text-xl sm:text-2xl text-orange-600">Portfolio</h1>
  <h1 className="text-3xl sm:text-5xl my-4">Bringing Ideas to Life</h1>
  <h1 className="text-gray-500 text-base sm:text-xl my-6 sm:my-10">
  From Creative Designs to Stunning Websites & 
  Apps <br className="hidden sm:block" />
     Showcasing a diverse portfolio of visually appealing designs, responsive websites, and user-friendly mobile 
     Apps <br className="hidden sm:block" />

     crafted with precision, creativity, and innovation.  </h1>
</div>

{/* <div className="flex flex-wrap justify-center gap-4 mx-4 sm:mx-[20%] text-lg sm:text-xl my-10 sm:my-20">
  {filteringData.map((item) => (
    <h1
      key={item}
      className="cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-300 transition"
      onClick={() => handleFilteration(item)}
    >
      {item}
    </h1>
  ))}
</div> */}

      <div className="lg:grid lg:grid-cols-3 lg:gap-4  grid-rows-2 mx-[5%] sm:flex sm:flex-col sm:gap-4">
        <div className="rounded-[5%] lg:h-[70vh]   bg-white flex items-center justify-center text-white font-bold lg:my-[0vh] md:my-[5vh] ">
          <img
            src="/hikenexus.jpg"
            alt=""
            className="w-full h-full object-cover rounded-[5%] duration-500 p-34 hover:p-[20px]"
            // className="p-20 hover:p-[60px] duration-500  sm:h-[50vh]"
          />
        </div>
        {/* <div className="rounded-[5%] bg-white h-[50vh] flex items-center justify-center text-white font-bold sm:h-[50vh] lg:my-[0vh] md:my-[5vh] ">
          <img
            src="platter.jpg"
            alt=""
            className="p-20 hover:p-[60px] duration-500 "
          />
        </div> */}
 <div className="rounded-[5%] bg-white h-[50vh] w-full flex items-center justify-center text-white font-bold sm:h-[50vh] lg:my-[0vh] md:my-[5vh] overflow-hidden">
  <img
    src="web.png"
    alt=""
    className="w-full h-full object-cover hover:scale-105 duration-500"
  />
</div>


        <div className=" rounded-[5%] lg:h-[70vh] bg-gradient-to-r from-blue-400 to-red-500  flex items-center justify-center text-white font-bold  md:my-[5vh] lg:my-[0vh]">
          <img
            src="mockup.png"
            alt=""
            className="w-full h-full object-cover rounded-[5%] hover:scale-95 duration-500"
          />
        </div>
        <div className="rounded-[5%] lg:h-[60vh] bg-white flex items-center justify-center text-white font-bold md:my-[5vh] lg:my-[0vh] overflow-hidden">
  <img
    src="platter.jpg"
    alt=""
    className="w-full h-full object-cover rounded-[5%] hover:scale-95 duration-500"
  />
</div>

        <div className="rounded-[5%] lg:h-[80vh]   lg:mt-[-20vh] bg-white flex items-center justify-center text-white font-bold sm:h-[50vh] lg:my-[0vh] md:my-[5vh] ">
          <img
            src="summer.png"
            alt=""
            className="w-full h-full object-cover rounded-[5%] hover:scale-95 duration-500"
          />
        </div>
        <div className="rounded-[5%] h-[60vh] bg-white flex items-center justify-center text-white font-bold lg:my-[0vh] md:my-[5vh]">
          <img
            src="decoders.jpg"
            alt=""
            className="w-full h-full object-cover rounded-[5%] hover:scale-95 duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioAmazingWork;