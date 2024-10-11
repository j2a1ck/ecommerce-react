import men from "../../public/images/men.png";
import women from "../../public/images/women.png";
import accessories from "../../public/images/accessories.png";
import kids from "../../public/images/kids.png";
import ShopButton from "./ShopButton";
const CardShop = () => {
  return (
    <section className="lg:h-[770px] h-[1330px] bg-slate-100 flex flex-col items-center">
      <div className="flex items-center flex-col">
        <h1 className="mt-[80px] text-2xl mb-[10px] font-bold">
          EDITOR’S PICK
        </h1>
        <div className="lg:flex">
          <h2 className="text-gray-600 text-lg font-normal">
            Problems trying to resolve
          </h2>
          <span className="hidden text-gray-600 text-lg  lg:flex">
            the conflict between
          </span>
        </div>
        <span className="block text-gray-600 text-lg lg:hidden">
          the conflict between
        </span>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div
          className="mt-[48px] hidden lg:flex h-[500px]  w-[500px] bg-top  lg:bg-cover"
          style={{ backgroundImage: `url(${men.src})` }}
        >
          <ShopButton isLarge={true}>Men</ShopButton>
        </div>
        <div
          style={{ backgroundImage: `url(${women.src})` }}
          className="bg-cover w-[240px] mt-[48px] h-[500px] ml-[30px] "
        >
          <ShopButton isLarge={true}>Women</ShopButton>
        </div>
        <div className="flex flex-col">
          <div
            style={{ backgroundImage: `url(${accessories.src})` }}
            className="bg-cover w-[240px] mt-[48px] h-[242px] ml-[30px] "
          >
            <div className="flex justify-start items-end h-[242px] p-5 text-xs ">
              <ShopButton>Accessories</ShopButton>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${kids.src})` }}
            className="bg-cover w-[240px] mt-[16px] h-[242px] ml-[30px] "
          >
            <div className="flex justify-start items-end h-[242px] p-5 ">
              <ShopButton>Kids</ShopButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardShop;
