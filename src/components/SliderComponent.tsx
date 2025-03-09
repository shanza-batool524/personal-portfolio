import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/index.css";
import Slider from "react-slick"; // ✅ Import the Slider component

const SimpleSlider = () => {
  type SlideData = {
    description: string;
    image: string;
    name: string;
    studio: string;
  };

  const data: SlideData[] = [
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum dolorum sed quaerat veniam perferendis corrupti omnis eum iusto, provident facere saepe maiores, voluptas cupiditate perspiciatis esse cum, minima asperiores!",
      image: "/ajooba.jpeg",
      name: "Mike Anderson",
      studio: "Vivaco Studio",
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum dolorum sed quaerat veniam perferendis corrupti omnis eum iusto, provident facere saepe maiores, voluptas cupiditate perspiciatis esse cum, minima asperiores!",
      image: "/ajooba.jpeg",
      name: "James Wills",
      studio: "Vivaco Studio",
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum dolorum sed quaerat veniam perferendis corrupti omnis eum iusto, provident facere saepe maiores, voluptas cupiditate perspiciatis esse cum, minima asperiores!",
      image: "/ajooba.jpeg",
      name: "Tonny Kakkar",
      studio: "Vivaco Studio",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <ul className="flex justify-center gap-2 mt-6">{dots}</ul>
    ),
    customPaging: (_: number) => (
      <div className="w-3 h-3 bg-orange-500 rounded-full transition-all duration-300 border-2 border-transparent hover:border-orange-700"></div>
    ),
  };

  return (
    <div className="flex justify-center items-center w-full px-4 py-10 overflow-hidden">
      <div className="max-w-screen-lg w-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Description */}
              <div className="flex justify-center py-20">
                <h1 className="w-[80%] text-center py-12 text-2xl text-gray-500 font-dancing">
                  {item.description}
                </h1>
              </div>
              {/* User Info */}
              <div className="my-28 flex justify-center items-center gap-6 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="w-auto text-center">
                  <h1 className="text-xl font-medium">{item.name}</h1>
                  <h2 className="text-lg text-gray-500">{item.studio}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
