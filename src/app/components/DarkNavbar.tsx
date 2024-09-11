import React from "react";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const DarkNavbar = () => {
  return (
    <nav>
      <div className="bg-slate-900 text-white items-center md:flex lg:flex h-[46px] w-full text-sm font-semibold hidden ">
        <div className="flex gap-1 justify-start ml-5 mx-4 mt-1 items-center">
          <FiPhone />
          <h6>98234234</h6>
        </div>
        <div className="flex gap-1 items-center mx-3 mt-1 ">
          <TfiEmail />
          <h6>Jack.70aw@gmail.com</h6>
        </div>
        <div className="flex flex-grow justify-center items-center">
          <h6>Follow Us and get chance to win 80% off</h6>
        </div>
        {/* TODO fix link for social media */}
        <div className="flex justify-end items-center gap-3 mr-6 ">
          <h6>Follow Us : </h6>
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </nav>
  );
};

export default DarkNavbar;
