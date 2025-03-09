import React from "react";

function Blogs() {
  const data = [
    {
      image: "/first.jpeg",
      heading: "Jim Morisson Says when the musics over turn off the light",
      name: "Web Development",
      Description: `Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue.`,
    },
    {
      image: "/second.jpeg",
      heading: "Jim Morisson Says when the musics over turn off the light",
      name: "Web Development",
      Description: `Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue.`,
    },
    {
      image: "/third.jpeg",
      heading: "Jim Morisson Says when the musics over turn off the light",
      name: "Web Development",
      Description: `Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue.`,
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl text-orange-600">From My Blogs</h1>
        <h1 className="text-4xl my-4 font-medium">
          Our Recent Updates, Blog, Tips,
          <br className="hidden md:block" /> Tricks & More
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-[12vh]">
        {data.map((item, index) => (
          <div key={index} className="relative w-full max-w-[56vh] mx-auto">
            {/* Date Badge */}
            <div className="bg-green-500 w-14 sm:w-16 py-2 text-center text-white rounded-xl absolute right-4 top-4">
              <span className="text-lg sm:text-[22px] font-medium">23 </span>
              <br /> Dec
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt=""
              className="w-full h-[34vh] sm:h-[40vh] rounded-2xl object-cover"
            />

            {/* Blog Info */}
            <h1 className="text-lg sm:text-xl text-orange-500 my-2">
              {item.name}
            </h1>
            <h1 className="text-lg sm:text-xl font-medium my-2">
              {item.heading}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
