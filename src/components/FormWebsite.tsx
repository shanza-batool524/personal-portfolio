import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type Props = {
  mainButton: string;
  buttonSpan: string;
};

const FormWebsite = ({ mainButton, buttonSpan }: Props) => {
  const [data, setData] = useState({
    fullName: "",
    Email: "",
    PhoneNumber: "",
    Subject: "",
    NewMessage: "",
  });

  const onchanging = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitButton = (e:any) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9hakcca", // Your EmailJS Service ID
        "template_qkx1dsl", // Your EmailJS Template ID
        data,
        "hBzJTnXBmIO9kpYNY" // Your EmailJS Public Key
      )
      .then(() => {
        alert("Email sent successfully!");
        setData({ fullName: "", Email: "", PhoneNumber: "", Subject: "", NewMessage: "" });
      })
      .catch(() => alert("Failed to send email!"));
  };

  return (
    <div className="px-6 lg:px-[10%] py-10">
      <div className="text-center">
        <h1 className="text-2xl text-orange-600">Contact Me</h1>
        <h1 className="text-4xl my-4 font-medium">I Want To Hear From You</h1>
        <p className="text-gray-600">Please fill out the form to contact me.</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start my-12 gap-10">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex gap-5 items-center">
            <div className="p-6 rounded-full text-red-500 bg-red-200 text-2xl">
              <CiLocationOn />
            </div>
            <div>
              <h1 className="text-3xl">Address</h1>
              <p className="text-gray-500 text-sm">20, Somewhere in world</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="p-6 rounded-full text-green-600 bg-green-100 text-2xl">
              <MdOutlineMailOutline />
            </div>
            <div>
              <h1 className="text-3xl">Email</h1>
              <p className="text-gray-500 text-sm">Syedaliabdullahshah5@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="p-6 rounded-full text-purple-500 bg-purple-100 text-2xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h1 className="text-3xl">Phone</h1>
              <p className="text-gray-500 text-sm">0342-5534689</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <form className="space-y-4" onSubmit={submitButton}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={data.fullName}
                className="border bg-gray-100 border-gray-300 h-12 w-full rounded-lg px-4"
                onChange={onchanging}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="Email"
                value={data.Email}
                className="border bg-gray-100 border-gray-300 h-12 w-full rounded-lg px-4"
                onChange={onchanging}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                name="PhoneNumber"
                value={data.PhoneNumber}
                className="border bg-gray-100 border-gray-300 h-12 w-full rounded-lg px-4"
                onChange={onchanging}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="Subject"
                value={data.Subject}
                className="border bg-gray-100 border-gray-300 h-12 w-full rounded-lg px-4"
                onChange={onchanging}
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              name="NewMessage"
              value={data.NewMessage}
              className="border bg-gray-100 border-gray-300 h-40 w-full rounded-lg px-4 py-3"
              onChange={onchanging}
              required
            ></textarea>
            <button className={`${mainButton}`} type="submit">
              <span className={buttonSpan}></span>
              <span className="relative z-10 group-hover:text-white duration-75">Submit Now</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormWebsite;
