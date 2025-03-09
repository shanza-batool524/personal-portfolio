
function SecondSection() {
  const mapping = [
    {
      title: "Pixel Perfect",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
      image: "1st.JPG",
    },
    {
      title: "High Quality",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
      image: "1st.JPG",
    },
    {
      title: "Awesome Idea",
      description:
        "Most common methods for designing websites that work well on desktop is responsive and adaptive design.",
      image: "1st.JPG",
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
