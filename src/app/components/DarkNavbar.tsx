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
      <div className="bg-slate-900 text-white flex ">
        <ol className="flex-row flex gap-4 justify-start">
          <li>
            <FiPhone />
          </li>
          <li>98234234</li>
          <TfiEmail />
          <li>sddfkjsd@gmail.com</li>
        </ol>
        <ol className="flex justify-center">
          <li>Follow us and get chance to win 80% off</li>
        </ol>
        <ol className="flex justify-end ">
          <li>Follow us:</li>
          <li><FaInstagram/></li>
          <li><FaYoutube/></li>
          <li><FaFacebook/></li>
          <li><FaTwitter/></li>
        </ol>
      </div>
    </nav>
  );
};

export default DarkNavbar;
