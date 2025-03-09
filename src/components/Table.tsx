
function GridTable() {
  const data = [
    { name: "/gridImages/1.png" },
    { name: "/gridImages/2.png" },
    { name: "/gridImages/3.png" },
    { name: "/gridImages/4.png" },
    { name: "/gridImages/5.png" },
    { name: "/gridImages/6.png" },
    { name: "/gridImages/7.png" },
    { name: "/gridImages/8.png" },
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4   border border-gray-200 rounded-lg overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-4 flex justify-center items-center h-[15ch] sm:h-[20ch] border border-gray-200 relative group
            ${index === 0 ? "rounded-tl-lg" : ""}
            ${index === 3 ? "md:rounded-tr-lg" : ""}
            ${index === 4 ? "md:rounded-bl-lg" : ""}
            ${index === 7 ? "rounded-br-lg" : ""}`}
          >
            {/* Image */}
            <img
              src={item.name}
              alt={`Grid ${index}`}
              className="h-10 sm:h-12 transition-all duration-500 opacity-50 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridTable;
