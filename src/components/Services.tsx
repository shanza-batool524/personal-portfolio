import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


function Services() {
  const data = [
    {
      picture:
        "https://external-preview.redd.it/nNffPZTG2BVD2nsLU6Ra3PPvrsWw-6JDvckTd9Mj_jA.jpg?auto=webp&s=b36d93a15d52460ede3b35c475fe87f97f601409",
      name: "Creative Design",
      price: "$99",
      description:
        "We create innovative, effective websites that capture your brand, improve conversions, and maximize revenue.",
    },
    {
      picture:
        "https://preview.redd.it/my-first-attempt-at-customization-v0-5g0kwhnyikea1.jpg?width=1080&crop=smart&auto=webp&s=c39f01c981839b733af9b54f8546faea8b20d476",
      name: "Modern Web Development",
      price: "$149",
      description:
        "We build responsive and high-performance websites that drive engagement and sales.",
    },
    {
      picture:
        "https://preview.redd.it/my-first-attempt-at-customization-v0-5g0kwhnyikea1.jpg?width=1080&crop=smart&auto=webp&s=c39f01c981839b733af9b54f8546faea8b20d476",
      name: "UI/UX Optimization",
      price: "$79",
      description:
        "Enhance user experience with smooth, intuitive, and accessible web design solutions.",
    },
    {
      picture:
        "https://preview.redd.it/my-first-attempt-at-customization-v0-5g0kwhnyikea1.jpg?width=1080&crop=smart&auto=webp&s=c39f01c981839b733af9b54f8546faea8b20d476",
      name: "Brand Identity",
      price: "$129",
      description:
        "We help build a strong digital identity with engaging branding and visuals.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-6">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-2xl text-orange-600 font-semibold">Services</h1>
        <h1 className="text-5xl my-4 font-bold">What I Do for Clients</h1>
        <p className="text-gray-500 text-xl my-6">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 my-28">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex p-[70px]  gap-6 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={item.picture}
              alt={item.name}
              className="h-[30ch] w-48 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-lg font-bold text-indigo-600">{item.price}</p>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image Slider */}
      <Dialog
  open={isOpen}
  onClose={closeModal}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
>
  <div className="relative bg-white p-6 rounded-lg w-full h-full max-w-none flex flex-col">
    <button
      className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
      onClick={closeModal}
    >
      <X size={24} />
    </button>
    
    <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Image Section */}
      <div className="relative flex-1 flex justify-center items-center p-7">
        <img
          src={data[currentIndex].picture}
          className="h-[80vh] object-cover rounded-lg"
          alt="Preview"
        />
        <button
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={prevImage}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={nextImage}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Info Section */}
      <div className="flex flex-col justify-center p-10 bg-gray-100 w-full lg:w-[400px]">
        <h2 className="text-3xl font-semibold">{data[currentIndex].name}</h2>
        <p className="text-2xl font-bold text-indigo-600 py-4">{data[currentIndex].price}</p>
        <p className="text-gray-600 text-[16px] mt-2">{data[currentIndex].description}</p>
      </div>
    </div>
  </div>
</Dialog>

    </div>
  );
}

export default Services;
