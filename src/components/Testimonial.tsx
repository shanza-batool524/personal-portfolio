
const Testimonial = () => {
  // const [slider, setSlider] = useState<Number>(0); 

  // const data:Data[] = [
  //   {
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum dolorum sed quaerat veniam perferendis corrupti omnis eum iusto, provident facere saepe maiores, voluptas cupiditate perspiciatis esse cum, minima asperiores!",
  //     image: "ajooba.jpeg",
  //     name: "Mike Anderson",
  //     studio: "Vivaco Studio",
  //   },
  //   {
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum dolorum sed quaerat veniam perferendis corrupti omnis eum iusto, provident facere saepe maiores, voluptas cupiditate perspiciatis esse cum, minima asperiores!",
  //     image: "ajooba.jpeg",
  //     name: "James Wills",
  //     studio: "Vivaco Studio",
  //   },
  //   {
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non rerum dolorum sed quaerat veniam perferendis corrupti omnis eum iusto, provident facere saepe maiores, voluptas cupiditate perspiciatis esse cum, minima asperiores!",
  //     image: "ajooba.jpeg",
  //     name: "Tonny Kakkar",
  //     studio: "Vivaco Studio",
  //   },
  // ];

  // // Handle slider functionality
  // const goNext = () => setSlider((prev) => (prev + 1) % data.length);
  // const goPrev = () => setSlider((prev) => (prev - 1 + data.length) % data.length);

  return (
    <div className="relative">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl text-orange-600">Testimonials</h1>
        <h1 className="text-5xl my-4">What My Clients Say</h1>
        <h1 className="text-gray-500 text-medium my-10">
        Feedback from satisfied clients! I take pride in delivering high-quality solutions, whether it's app <br />
        development, website creation, or social media management. Your success is my priority! 
        </h1>
      </div>

      {/* Quotes Image */}
      <div className="flex justify-center relative">
        <img src="/qoutes.JPG" className="py-4" alt="Quotes" />
      </div>

      <div className="hidden lg:flex absolute top-1/2 left-10 right-10 justify-between">
          <img src="/left.JPG" alt="Left" className="h-[70vh] cursor-pointer hover:opacity-80" />
          <img src="/right.JPG" alt="Right" className="h-[60vh]  cursor-pointer hover:opacity-80" />
      </div>

      {/* Testimonial Content with Animation */}
    
     
    


 
  

    </div>
  );
};

export default Testimonial;
