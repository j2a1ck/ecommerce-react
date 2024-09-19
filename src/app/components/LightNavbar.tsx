"use client"
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LiaBarsSolid } from "react-icons/lia";
import { useState } from "react";

const LightNavbar = () => {
  const [navToggle, setNavToggle] = useState(false);

      function toggleNav() {
        setNavToggle(!navToggle);
      }
  return (
    <>
      {/* Desktop navbar */}
      <div className="mt-[12px] lg:h-[58px] mb-[8px] ml-[38px] hidden lg:flex md:flex items-center">
        <div className="font-bold text-2xl mr-[113px] ">
          <a href="/">Bandege</a>
        </div>
        <div className="lg:gap-[15px] flex text-gray-500 font-bold mr-[471px] gap-[30px] flex-col lg:flex-row ">
          <a href="/">Home</a>
          {/* TODO make shop drop down */}
          <a href="/shop">Shop </a>
          <a href="/about" className="hidden lg:flex">
            About
          </a>
          <a href="/blog" className="hidden lg:flex">
            Blog
          </a>
          <a href="/contact">Contact</a>
          <a href="/pages">Pages</a>
        </div>
        <div className="items-center justify-end flex-grow lg:flex gap-2 hidden">
          {/* TODO add functionality to button */}
          <IoMdPerson className="fill-blue-600" />
          <button className="text-sky-600">Login / Register</button>
        </div>
        <div className="items-center flex gap-5 mr-10 ml-12">
          <button>
            <CiSearch className="fill-blue-600" />
          </button>
          <button>
            <FiShoppingCart className="fill-blue-600" />
          </button>
          <button>
            <FaRegHeart className="fill-blue-600" />
          </button>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="lg:hidden flex flex-col w-full">
        <div className="mt-[10px] flex items-center justify-between px-4 h-[60px]">
          <div className="font-bold text-2xl">
            <a href="/">Bandege</a>
          </div>
          <div className="flex gap-5 items-center">
            <button aria-label="Search">
              <CiSearch className="w-5 h-5" />
            </button>
            <button aria-label="Shopping Cart">
              <FiShoppingCart className="w-4 h-4" />
            </button>
            <button onClick={toggleNav} aria-label="Toggle Navigation">
              <LiaBarsSolid className="w-5 h-5" />
            </button>
          </div>
        </div>
        {navToggle && (
          <div className="mt-[23px] flex flex-grow gap-3 flex-col justify-center text-lg font-bold text-gray-600 items-center">
            <button className="">
              <a href="/">Home</a>
            </button>
            <button>
              <a href="/product">Product</a>
            </button>
            <button>
              <a href="/pricing">Pricing</a>
            </button>
            <button>
              <a href="/contact">Contact</a>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LightNavbar;
