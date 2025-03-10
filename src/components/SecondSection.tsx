
function SecondSection() {
  const mapping = [
    {
      title: "Efficient Code",
      description:
        "Writing clean, scalable, and optimized code for high-performance applications.",
      image: "/1.png",
    },
    {
      title: "Seamless User Experience",
      description:
        "Building intuitive and user-friendly mobile apps with smooth navigation.",
      image: "/2.png",
    },
    {
      title: "Innovative Solutions",
      description:
        "Transforming ideas into powerful applications with cutting-edge technology.",
      image: "/3.png",
    },
  ];

  return (
    <div className="flex justify-center px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center max-w-6xl">
        {mapping.map((item, index) => (
          <div key={index} className="p-4">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 md:w-24 lg:w-28"
              />
            </div>

            {/* Title */}
            <div className="text-2xl md:text-3xl mt-4">{item.title}</div>

            {/* Description */}
            <div className="mt-3 text-[16px] text-gray-500 px-2">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;
