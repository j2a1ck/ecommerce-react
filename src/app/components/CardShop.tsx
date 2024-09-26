import men from "../../public/images/men.png";
import women from "../../public/images/women.png";
import accessories from "../../public/images/accessories.png";
import kids from "../../public/images/kids.png";
const CardShop = () => {
  return (
    <div className="lg:h-[770px] bg-slate-100 flex flex-col items-center">
      <div className="flex items-center flex-col">
        <h1 className="mt-[80px] text-2xl mb-[10px] font-bold">
          EDITOR’S PICK
        </h1>
        <h2 className="text-gray-600 text-lg  block lg:hidden font-normal">
          Problems trying to resolve <span className="hidden" > the conflict between </span>
          <span className="block lg:hidden justify-center flex">
            the conflict between
          </span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div
          className="mt-[48px] hidden lg:flex h-[500px]  w-[500px] bg-top  lg:bg-cover"
          style={{ backgroundImage: `url(${men.src})` }}
        >
          <div className="flex justify-start items-end h-[500px] p-5 ">
            <button className="flex ml-[9px] w-20 font-medium justify-center items-center rounded-lg h-10 bg-white  ">
              Men
            </button>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${women.src})` }}
          className="bg-cover w-[240px] mt-[48px] h-[500px] ml-[30px] "
        >
          <div className="flex justify-start items-end h-[500px] p-5 ">
            <button className="flex ml-[9px] w-20 font-medium justify-center items-center rounded-lg h-10 bg-white  ">
              Women
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            style={{ backgroundImage: `url(${accessories.src})` }}
            className="bg-cover w-[240px] mt-[48px] h-[242px] ml-[30px] "
          >
            <div className="flex justify-start items-end h-[242px] p-5 ">
              <button className="flex ml-[9px] w-28 justify-center font-medium items-center rounded-lg h-10 bg-white  ">
                Accessories
              </button>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${kids.src})` }}
            className="bg-cover w-[240px] mt-[16px] h-[242px] ml-[30px] "
          >
            <div className="flex justify-start items-end h-[242px] p-5 ">
              <button className="flex ml-[9px] w-20 font-medium justify-center items-center rounded-lg h-10 bg-white  ">
                Kids
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardShop;
