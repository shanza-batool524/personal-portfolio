const EmailSending = () => {
  return (
    <div className="bg-[url('/purplebackground.jpeg')] bg-cover bg-center flex justify-center items-center mx-4 sm:mx-[10%] py-10 sm:py-[6%] rounded-3xl">
      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-[5%] w-full sm:w-[85%] px-6">
        {/* Text Section */}
        <div className="text-white text-center sm:text-left">
          <h1 className="text-lg sm:text-xl">Subscribe Now</h1>
          <h1 className="text-3xl sm:text-5xl font-medium my-4 sm:my-6">
            Get My Newsletter
          </h1>
          <h1 className="text-base sm:text-xl">
            Get the latest news, updates, tips, and tricks in your inbox
          </h1>
        </div>

        {/* Input & Button Section */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <input
            type="text"
            placeholder="Your email here"
            className="text-base sm:text-xl text-gray-600 py-3 px-4 w-full sm:w-[60%] rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none focus:outline-none"
          />
          <button className="bg-orange-600 py-3 px-6 lg:h-[52px] md:h-[52px] md:text-[14px] sm:h-[10vh] w-full sm:w-[40%] text-lg sm:text-xl text-white rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none shadow-md">
            Send Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSending;
