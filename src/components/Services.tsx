import { useState } from "react";
import {  Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function Services() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      picture: "/mockup/1A.png",
      name: "Native App",
      price: "$800",
      modalPicture: ["/mockup/1.png", "/mockup/1A.png", "/mockup/1B.png"],
      description:
        "A user-friendly e-commerce app designed to provide a seamless online shopping experience. The app allows users to effortlessly browse, search, and purchase products while ensuring secure payment integration for a smooth checkout process. ",
    },
    {
      picture: "/mockup/2.png",
      name: "Learning Management System",
      price: "$149",
      description:
        "A versatile LMS application designed to streamline learning and collaboration. It supports structured course management for different semesters, enabling students and teachers to manage assignments efficiently with submission and tracking features. ",
    },
    {
      picture: "/mockup/3.png",
      name: "Bina'a App",
      price: "$79",
      description:
        "A smart home management app designed to simplify household maintenance and service bookings. Whether it's a blocked drain, electrical issues, or the need for a plumber, painter, or electrician, users can find and book professional service providers directly through the app. ",
    },
    {
      picture: "/mockup/4.png",
      name: "Attendance App",
      price: "$129",
      description:
        "A comprehensive attendance tracking system designed for efficient workforce management. The app features three types of admins with varying access levels, allowing them to monitor and edit attendance records as needed. It enables project-based workforce planning, helping users determine the required number of employees for specific tasks, such as road construction. ",
    },
  ];

  const modalData = [
    {
      picture: ["/mockup/1.png", "/mockup/1A.png", "/mockup/1B.png"],
      Description:
        "A user-friendly e-commerce app designed to provide a seamless online shopping experience. The app allows users to effortlessly browse, search, and purchase products while ensuring secure payment integration for a smooth checkout process",
      name: "Native App",
      price: "$800",
    },
    {
      picture: ["/mockup/2.png", "/mockup/2A.png", "/mockup/2A.png"],
      Description:
        "A versatile LMS application designed to streamline learning and collaboration. It supports structured course management for different semesters, enabling students and teachers to manage assignments efficiently with submission and tracking features.",
      name: "Learning Management System",
      price: "$149",
    },
    {
      picture: ["/mockup/3.png", "/mockup/3A.png", "/mockup/3B.png"],
      Description:
        "A smart home management app designed to simplify household maintenance and service bookings. Whether it's a blocked drain, electrical issues, or the need for a plumber, painter, or electrician, users can find and book professional service providers directly through the app.",
      name: "Bina'a App",
      price: "$79",
    },
    {
      picture: ["/mockup/4.png", "/mockup/4B.png", "/mockup/4C.png"],
      Description:
        "A comprehensive attendance tracking system designed for efficient workforce management. The app features three types of admins with varying access levels, allowing them to monitor and edit attendance records as needed. It enables project-based workforce planning, helping users determine the required number of employees for specific tasks, such as road construction.",
      name: "Attendance App",
      price: "$129",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: any) => {
    setCurrentIndex(index);
    setIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl text-orange-600 font-semibold">
          Services
        </h1>
        <h1 className="text-3xl sm:text-5xl my-4 font-bold">
          What I Do for Clients
        </h1>
        <p className="text-gray-500 text-sm sm:text-xl my-4">
          I design and develop high-performance mobile apps with seamless
          functionality, intuitive UI/UX, and scalable solutions tailored to
          client needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mx-2 sm:mx-4 my-12">
        {data.map((item: any, index: any) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row p-6 gap-4 sm:gap-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={item.picture}
              alt={item.name}
              className="h-40 sm:h-[30ch] w-full sm:w-48 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
              <p className="text-base sm:text-lg font-bold text-indigo-600">
                {item.price}
              </p>
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
        <div className="relative bg-white p-4 sm:p-6 rounded-lg w-full max-w-4xl h-full sm:h-auto flex flex-col sm:flex-row overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-700 hover:text-red-500"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="relative flex justify-center items-center w-full sm:w-1/2 h-1/2 sm:h-auto">
            <img
              src={modalData[index].picture[currentIndex]}
              className="w-full h-full object-cover rounded-lg"
              alt="Preview"
            />
            {/* Navigation Buttons */}
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
          <div className="flex flex-col justify-center p-4 sm:p-10 bg-gray-100 w-full sm:w-1/2 h-1/2 sm:h-auto">
            <h2 className="text-xl sm:text-3xl font-semibold">
              {modalData[index].name}
            </h2>
            <p className="text-lg sm:text-2xl font-bold text-indigo-600 py-2 sm:py-4">
              {modalData[index].price}
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              {modalData[index].Description}
            </p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Services;
