
function PortfolioAmazingWork() {
  const filteringData = [
    "All",
    "Youtube",
    "Vimeo",
    "SoundCloud",
    "Popup",
    "Detail",
  ];
  const handleFilteration = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-2xl text-orange-600">Portfolio</h1>
        <h1 className="text-5xl my-4">My Amazing Works</h1>
        <h1 className="text-gray-500 text-xl my-10">
          Most common methods for designing websites that work well on desktop
          is <br />
          responsive and adaptive design
        </h1>
      </div>
      <div className="flex justify-around mx-[20%] text-xl my-20">
        {filteringData.map((item) => {
          return (
            <h1
              key={item}
              className="cursor-pointer"
              onClick={() => handleFilteration(item)}
            >
              {item}
            </h1>
          );
        })}
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4  grid-rows-2 mx-[5%] sm:flex sm:flex-col sm:gap-4">
        <div className="rounded-[5%] lg:h-[70vh]   bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold lg:my-[0vh] md:my-[5vh] ">
          <img
            src="https://png.pngtree.com/png-clipart/20230313/original/pngtree-beautifull-the-nature-red-rose-flower-with-green-leaf-png-image_8986814.png"
            alt=""
            className="p-20 hover:p-[60px] duration-500  sm:h-[50vh]"
          />
        </div>
        <div className="rounded-[5%] bg-gradient-to-r from-green-400 to-blue-500 h-[50vh] flex items-center justify-center text-white font-bold sm:h-[50vh] lg:my-[0vh] md:my-[5vh] ">
          <img
            src="https://www.nsbpictures.com/wp-content/uploads/2018/07/butterfly-png-6.png"
            alt=""
            className="p-20 hover:p-[60px] duration-500 "
          />
        </div>
        <div className=" rounded-[5%] lg:h-[70vh] bg-gradient-to-r from-yellow-400 to-red-500  flex items-center justify-center text-white font-bold  md:my-[5vh] lg:my-[0vh]">
          <img
            src="https://www.nsbpictures.com/wp-content/uploads/2018/07/butterfly-png-6.png"
            alt=""
            className="p-20 hover:p-[60px] duration-500"
          />
        </div>
        <div className="rounded-[5%] lg:h-[60vh] bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold md:my-[5vh] lg:my-[0vh]">
          <img
            src="https://www.nsbpictures.com/wp-content/uploads/2018/07/butterfly-png-6.png"
            alt=""
            className="p-20 hover:p-[60px] duration-500"
          />
        </div>
        <div className="rounded-[5%] lg:h-[80vh]   lg:mt-[-20vh] bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold sm:h-[50vh] lg:my-[0vh] md:my-[5vh] ">
          <img
            src="https://www.nsbpictures.com/wp-content/uploads/2018/07/butterfly-png-6.png"
            alt=""
            className="p-20 hover:p-[60px] duration-500"
          />
        </div>
        <div className="rounded-[5%] h-[60vh] bg-gradient-to-r from-teal-400 to-green-500 flex items-center justify-center text-white font-bold lg:my-[0vh] md:my-[5vh]">
          <img
            src="https://www.nsbpictures.com/wp-content/uploads/2018/07/butterfly-png-6.png"
            alt=""
            className="p-20 hover:p-[60px] duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioAmazingWork;