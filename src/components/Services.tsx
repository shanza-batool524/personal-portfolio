import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function Services() {
  const data = [
    {
      picture:
        "/mockup/2.png",
      name: "Native App",
      price: "$800",
      description:
        "A user-friendly e-commerce app designed to provide a seamless online shopping experience. The app allows users to effortlessly browse, search, and purchase products while ensuring secure payment integration for a smooth checkout process. ",
    },
    {
      picture:
        "/mockup/5.png",
      name: "Learning Management System",
      price: "$149",
      description:
        "A versatile LMS application designed to streamline learning and collaboration. It supports structured course management for different semesters, enabling students and teachers to manage assignments efficiently with submission and tracking features. ",
    },
    {
      picture:
        "/mockup/7.png",
      name: "Bina'a App",
      price: "$79",
      description:
        "A smart home management app designed to simplify household maintenance and service bookings. Whether it's a blocked drain, electrical issues, or the need for a plumber, painter, or electrician, users can find and book professional service providers directly through the app. ",
    },
    {
      picture:
        "/mockup/11.png",
      name: "Attendance App",
      price: "$129",
      description:
        "A comprehensive attendance tracking system designed for efficient workforce management. The app features three types of admins with varying access levels, allowing them to monitor and edit attendance records as needed. It enables project-based workforce planning, helping users determine the required number of employees for specific tasks, such as road construction. ",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: any) => {
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
    <div className="container mx-auto p-4 sm:p-6">
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-lg sm:text-2xl text-orange-600 font-semibold">Services</h1>
        <h1 className="text-3xl sm:text-5xl my-4 font-bold">What I Do for Clients</h1>
        <p className="text-gray-500 text-sm sm:text-xl my-4">
          I design and develop high-performance mobile apps with seamless functionality, intuitive UI/UX, and scalable solutions tailored to client needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mx-2 sm:mx-4 my-12">
        {data.map((item, index) => (
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
              <p className="text-base sm:text-lg font-bold text-indigo-600">{item.price}</p>
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
        <div className="relative bg-white p-4 sm:p-6 rounded-lg w-full sm:max-w-3xl flex flex-col sm:flex-row">
          <button
            className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-700 hover:text-red-500"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          {/* Image Section */}
          <div className="relative flex justify-center items-center p-4 sm:p-7 w-full sm:w-1/2">
            {/* <img
              src={data[currentIndex].picture}
              className="w-full max-h-[50vh] sm:max-h-[80vh] object-cover rounded-lg"
              alt="Preview"
            /> */}
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
          <div className="flex flex-col justify-center p-4 sm:p-10 bg-gray-100 w-full sm:w-1/2">
            <h2 className="text-xl sm:text-3xl font-semibold">{data[currentIndex].name}</h2>
            <p className="text-lg sm:text-2xl font-bold text-indigo-600 py-2 sm:py-4">{data[currentIndex].price}</p>
            <p className="text-gray-600 text-sm sm:text-base mt-2">{data[currentIndex].description}</p>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Services;
