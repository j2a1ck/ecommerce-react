"use client";
import Image from "next/image";
import hug from "../../public/images/hug.png";
import GreenButton from "./GreenButton";

const CardAd = () => {
  return (
    <div>
      {/* desktop design */}
      <div className="mt-14 justify-center hidden md:hidden lg:flex">
        <div className="">
          <Image src={hug} alt={"ppl"} height={520} width={600} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-gray-400 font-medium">SUMMER 2024</h2>
          <div className="font-bold text-black text-4xl m-4">
            <h1 className="">Part of the Neural </h1>
            <h1>Universe</h1>
          </div>
          <div className="font-light text-gray-600">
            <h3>
              We know how large objects will act, but things on a small scale.
            </h3>
            <h3>but things on a small scale</h3>
          </div>
          <div className="flex gap-3">
            <GreenButton className="text-white">BUY NOW</GreenButton>
            <GreenButton className="text-green-600 bg-white border-green-600 border-2">
              READ MORE
            </GreenButton>
          </div>
        </div>
      </div>
      {/* mobile design */}
      <div className="flex flex-col lg:hidden items-center justify-center ml-10 text-center ">
        <h2 className="text-gray-300">SUMMER 2020</h2>
        <div className="text-gray-900 text-3xl font-bold mt-7 m-4">
          <h1>Part of the </h1>
          <h1>Neural </h1>
          <h1>Universe</h1>
        </div>
        <div className="text-gray-600 font-light">
          <h2>We know how large</h2>
          <h2>objects will act, but </h2>
          <h2>things on a small scale.</h2>
        </div>
        <div className="m-[30px] flex flex-col mt-2">
        <GreenButton className="bg-sky-500 text-white">
            BUY NOW
        </GreenButton>
        <GreenButton className="bg-white text-blue-400 border-2 border-blue-400">
          Read More
        </GreenButton>
        </div>
        <div>
        <Image src={hug} alt={"ppl"} height={400} width={400}/>
        </div>
      </div>
    </div>
  );
};
export default CardAd;
