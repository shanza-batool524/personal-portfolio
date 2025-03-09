import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import PortfolioAmazingWork from "./components/PortfolioAmazingWork";
import DesignOfLife from "./components/DesignOfLife";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import SimpleSlider from "./components/SliderComponent";
import GridTable from "./components/Table";
import Blogs from "./components/Blogs";
import EmailSending from "./components/EmailSending";
import FormWebsite from "./components/FormWebsite";
import GoogleMapComponent from "./components/GoogleMap";
import Preloader from "./preloader/Preloader";
function App() {
  const [loading, setLoading] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const tailwindCss = {
    mainButton:
      "relative overflow-hidden bg-white text-orange-600 border-2 border-orange-600 px-6 py-2 rounded-[25px] transition-all duration-500 group",
    buttonSpan:
      "absolute inset-x-0 bottom-0 h-0 bg-orange-600 transition-all duration-500 group-hover:h-full",
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolling(true); // Navbar changes color after scrolling 50px
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500); // Adjust timing to match animation
  }, []);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <div className="h-screen bg-no-repeat bg-cover  ">
            <div className="relative bg-[url('https://img.freepik.com/premium-photo/colorful-feather-with-white-background_354831-1943.jpg')] bg-cover bg-center bg-no-repeat">
              {/* Light Overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-70"></div>

              {/* Content */}
              <div className="relative">
                <Navbar
                  mainButton={tailwindCss.mainButton}
                  buttonSpan={tailwindCss.buttonSpan}
                  isScrolling={isScrolling}
                />
                <div className="py-[15vh]">
                  <HeroSection
                    mainButton={tailwindCss.mainButton}
                    buttonSpan={tailwindCss.buttonSpan}
                  />
                </div>
              </div>
            </div>

            <div className="pt-[10%]">
              <SecondSection />
            </div>
          </div>
          <div className="mt-[45%]">
            <ThirdSection
              mainButton={tailwindCss.mainButton}
              buttonSpan={tailwindCss.buttonSpan}
            />
          </div>
          <div className="my-20">
            <PortfolioAmazingWork />
          </div>
          <DesignOfLife />
          <Services />
          <Testimonial />
          <SimpleSlider />
          <div className="my-14">
            <GridTable />
            <div className="my-[30vh]">
              <Blogs />
            </div>
            <EmailSending />
          </div>
          <div className="my-[25vh] ">
            <FormWebsite
              mainButton={tailwindCss.mainButton}
              buttonSpan={tailwindCss.buttonSpan}
            />
          </div>
          <GoogleMapComponent />
        </>
      )}
    </>
  );
}

export default App;
