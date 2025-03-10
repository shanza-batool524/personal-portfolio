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
        "Working with Kainat Batool has been a game-changer for our brand! The content strategy, design, and engagement have significantly boosted our online presence. Highly professional and creative—couldn’t ask for better social media management",
      image: "/profile.jpg",
      name: "Imran Khan",
      studio: "Tarash Furnitures",
    },
    {
      description:
      "Absolutely impressed with the website Kainat built for us! It’s fast, visually stunning, and easy to navigate. The attention to detail and responsiveness exceeded our expectations. Highly recommended!",
      image: "/profile.jpg",
      name: "Syed Fawad",
      studio: "Furniture Liquidators",
    },
    {
      description:
      "From idea to execution, Kainat delivered an outstanding mobile app that perfectly fits our needs. The UI/UX is seamless, and the performance is top-notch. Truly a skilled and reliable developer",
      image: "/profile.jpg",
      name: "Hamza Hanif",
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
