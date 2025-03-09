const EmailSending = () => {
    return (
     <>
     <div className="bg-[url('/purplebackground.jpeg')]  flex justify-center mx-[10%] bg-cover items-center py-[6%] rounded-3xl" >
         <div className="flex justify-between gap-[5%]  w-[85%]">
            <div className="text-white">
                <h1 className="text-xl ">Subscribe Now</h1>
                <h1 className="text-5xl font-medium my-6">Get My Newsletter</h1>
                <h1 className="text-xl ">Get latest news, updates, tips and trics in your inbox</h1>
            </div>
            <div className="flex justify-center items-center ">
            <input 
    type="text" 
    placeholder="Your email here" 
    className="text-xl text-gray-600 py-3 px-5 h-[10vh] w-full rounded-l-xl focus:outline-none"
  />
  <button className="bg-orange-600 h-[10vh] w-[15vw] text-xl  text-white rounded-r-xl shadow-md">
    Send Now
  </button>          </div>
         </div>
     </div>
     </>
    );
  };
  
  export default EmailSending;
  