import { IoIosArrowForward } from "react-icons/io";
const Card = () => {
  return (
    <div className="lg:flex hidden  bg-[url('../app/assets/lady.png')] h-[600px]">
      <div className="text-white font-bold p-3 justify-center  flex  flex-col pl-52 ">
        <h4 className="text-1xl">SUMME 2024</h4>
        <h1 className="mt-20 text-6xl">NEW COLLECTION</h1>
        <div className="mt-20 text-lg font-normal ">
          <p>We know large objects will act.</p>
          <p>but things on a small scale.</p>
        </div>
        {/* TODO add functionality to Button */}
        <div className="flex">
          <button className="w-40 h-12 bg-green-500 rounded-md mt-8">
            SHOP NOW
          </button>
        </div>
      </div>
      <button className="flex  flex-grow justify-end items-center m-5 ">
        <IoIosArrowForward size={60} className="fill-white" />
      </button>
    </div>
  );
};

export default Card;
