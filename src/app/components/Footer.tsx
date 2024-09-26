import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col mt-10">
      <div className=" bg-slate-100 ">
        <div className="h-[142] max-w-full flex justify-between items-center m-[40px]">
          <div className="font-extrabold text-2xl font-mono">Bandage</div>
          <div className="flex gap-[10px] m-2  ">
            <FaFacebook size={17} className="fill-sky-700" />
            <FaInstagram size={17} className="fill-sky-700 " />
            <FaTwitter size={17} className="fill-sky-700" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row  justify-center text-start ml-10 lg:ml-0 lg:space-x-28  lg:h-[242px] max-w-full">
          <div className="flex flex-col justify-center mt-10 h-[262] lg:mt-2 bg-white ">
            <h1 className="mb-3 font-bold text-base">Company Info</h1>
            <h2 className="text-gray-400 font-medium text-sm m-1">About Us</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Carrier</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">We are hiring</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Blog</h2>
          </div>
          <div className="lg:flex flex-col justify-center max-w-full hidden h-[262] mt-2 bg-white ">
            <h1 className="mb-3 font-bold text-base">Legal</h1>
            <h2 className="text-gray-400 font-medium text-sm m-1">About Us</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Carrier</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">We are hiring</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Blog</h2>
          </div>
          <div className="lg:flex flex-col justify-center max-w-full hidden h-[262] mt-2 bg-white">
            <h1 className="mb-3 font-bold text-base">Features</h1>
            <h2 className="text-gray-400 font-medium text-sm m-1">
              Business Marketing
            </h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">User Analytic</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Live Chat</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">
              Unlimited Support
            </h2>
          </div>
          <div className="flex flex-col justify-center max-w-full mt-10  h-[262] lg:mt-2 bg-white ">
            <h1 className="mb-3 font-bold text-base">Resources</h1>
            <h2 className="text-gray-400 font-medium text-sm m-1">IOS & Android</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Watch a Demo</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">Customers</h2>
            <h2 className="text-gray-400 font-medium text-sm m-1">API</h2>
          </div>
          <div className="flex flex-col mt-10 lg:mt-0 justify-center">
            <div className="mb-3 font-bold text-base">Get In Touch</div>
            <div className="flex justify-start mt-4 lg:mt-0 mb-5 lg:mb-1">
              <input
                placeholder="Your Email"
                className="placeholder-gray-400 text-center w-32 h-12 bg-gray-200 rounded-sm"
              ></input>
              <button className="w-20 bg-sky-500 text-white rounded-sm h-12 text-xs font-medium ">
                Subscribe
              </button>
            </div>
            <h4 className="text-gray-400 hidden lg:flex font-light text-sm mt-1">
              what a good day :L
            </h4>
          </div>
        </div>
      </div>
      <div>
      <div className="h-[74px] flex-col justify-center bg-gray-100 flex">
        <h2 className="text-start ml-10 text-gray-400"> Made With Love By Finland All Right Reserved </h2>
      </div>
      </div>
    </div>
  );
};

export default Footer;
