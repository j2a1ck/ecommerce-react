import { PRODUCT } from "../utils/config";

const Product = ({item}: { item: number}) => {
  return (
          <div>
            <img
              src={PRODUCT[item].pic}
              alt="product"
              className="w-[239px] h-[427px]"
            />
            <div className="flex flex-col items-center mt-4">
              <h1 className="text-black font-medium text-lg ">
                {PRODUCT[item].title}
              </h1>
              <h2 className="text-gray-500 text-base mt-2">
                {PRODUCT[item].category}
              </h2>
              <h3 className="text-green-600 font-medium text-sm mt-2">
                <span className="text-gray-400 mr-1">$16.48</span>
                {PRODUCT[item].price}
              </h3>
              <button>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                  <div className="w-3 h-3 bg-black rounded-full mt-2"></div>
                </div>
              </button>
            </div>
          </div>
  );
};

export default Product;
