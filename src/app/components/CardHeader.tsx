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
      className="lg:flex md:flex hidden min-h-screen bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-gray-800 font-bold p-3 justify-center flex flex-col pl-52">
        <h4 className="text-1xl">SUMME 2024</h4>
        <h1 className="mt-20 text-6xl">NEW COLLECTION</h1>
        <div className="mt-20 text-lg font-normal ">
          <p>We know large objects will act.</p>
          <p>but things on a small scale.</p>
        </div>
        {/* TODO add functionality to Button */}
        <GreenButton>
          SHOP NOW
        </GreenButton>
      </div>
      <div className="flex items-end m-4 ">
        {imageIndex ? (
          <>
            <div className="w-10 h-2 bg-slate-400"></div>
            <div className="w-10 h-2 bg-white "></div>
          </>
        ) : (
          <>
            <div className="w-10 h-2 bg-white "></div>
            <div className="w-10 h-2 bg-slate-400"></div>
          </>
        )}
      </div>
      <button className="flex flex-grow justify-end items-center m-5">
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
