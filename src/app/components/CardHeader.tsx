"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import ladyImage from "../../public/images/lady.png";
import shockImage from "../../public/images/shock.jpg";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import GreenButton from "./GreenButton";
import { useState } from "react";

const CardHeader = () => {
  const [imageIndex, setImageIndex] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(ladyImage.src);

  const handleArrowIcon = () => {
    const newImageIndex = !imageIndex;
    setImageIndex(newImageIndex);
    if (newImageIndex) {
      setBackgroundImage(shockImage.src);
    } else {
      setBackgroundImage(ladyImage.src);
    }
  };

  return (
    <div
      className="flex max-w-full md:flex md:w-full lg:w-full w-[464px] h-[520px] lg:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="lg:text-gray-800 text-white font-bold p-3 text-center lg:text-start justify-center flex flex-col lg:ml-0 ml-14 lg:pl-52">
        <h4 className="lg:text-1xl text-sm">SUMMER 2024</h4>
        <h1 className="lg:mt-20 mt-10 text-3xl lg:text-6xl">NEW COLLECTION</h1>
        <div className="lg:mt-20 mt-10 lg:text-lg   font-normal ">
          <p>We know large objects will act.</p>
          <p>but things on a small scale.</p>
        </div>
        {/* TODO add functionality to Button */}
        <div>
          <GreenButton>SHOP NOW</GreenButton>
        </div>
      </div>
      <div className="lg:flex items-end hidden lg:m-4">
        {imageIndex ? (
          <>
            <div className="lg:w-10 h-2 bg-slate-400"></div>
            <div className="lg:w-10 h-2 bg-white"></div>
          </>
        ) : (
          <>
            <div className="lg:w-10 h-2 bg-white "></div>
            <div className="lg:w-10 h-2 bg-slate-400"></div>
          </>
        )}
      </div>
      <button className="flex flex-grow justify-end items-center mr-5 lg:m-5">
        {imageIndex ? (
          <motion.div whileHover={{ scale: 1.5 }}>
            <MdOutlineKeyboardArrowLeft
              onClick={handleArrowIcon}
              size={70}
              className="fill-black"
            />
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.6 }}>
            <IoIosArrowForward
              onClick={handleArrowIcon}
              size={60}
              className="fill-white"
            />
          </motion.div>
        )}
      </button>
    </div>
  );
};

export default CardHeader;
