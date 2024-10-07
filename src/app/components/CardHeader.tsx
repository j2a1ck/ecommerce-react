"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

import ladyImage from "../../public/images/lady.png";
import shockImage from "../../public/images/shock.jpg";
import PrimaryButton from "./PrimaryButton";

const images = [ladyImage.src, shockImage.src];

interface ArrowButtonProps {
  imageIndex: number;
  handleArrowIcon: () => void;
}

interface ImageIndicatorProps {
  imageIndex: number;
}
const ArrowButton = ({ imageIndex, handleArrowIcon }: ArrowButtonProps) => {
  return (
    <button
      aria-label={imageIndex ? "Previous image" : "next image"}
      type="button"
      className="flex flex-grow justify-end items-center mr-5 lg:m-5"
    >
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
  );
};
const ImageIndicator = ({ imageIndex }: ImageIndicatorProps) => {
  return (
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
  );
};

const CardHeader = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleArrowIcon = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <section
      className="flex max-w-full md:flex md:w-full lg:w-full w-[464px] h-[520px] lg:min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${images[imageIndex]})` }}
    >
      <div className="lg:text-gray-800 text-white font-bold p-3 text-center lg:text-start justify-center flex flex-col lg:ml-0 ml-14 lg:pl-52">
        <h2 className="lg:text-1xl text-sm">SUMMER 2024</h2>
        <h2 className="lg:mt-20 mt-10 text-3xl lg:text-6xl">NEW COLLECTION</h2>
        <div className="lg:mt-20 mt-10 lg:text-lg   font-normal ">
          <p>We know large objects will act.</p>
          <p>but things on a small scale.</p>
        </div>
        <div>
          <PrimaryButton>SHOP NOW</PrimaryButton>
        </div>
      </div>
      <ImageIndicator imageIndex={imageIndex} />
      <ArrowButton imageIndex={imageIndex} handleArrowIcon={handleArrowIcon} />
    </section>
  );
};

export default CardHeader;
