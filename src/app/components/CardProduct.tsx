import Product from "./Product";
const CardProduct = () => {
  return (
    <div>
      <div className="hidden lg:flex md:flex flex-col">
        <div className="flex justify-center flex-col items-center mt-[80px] mb-[80px]">
          <h3 className="text-gray-500 text-lg m-3 font-normal">
            Featured Products
          </h3>
          <h1 className="text-black font-medium text-2xl ">
            BESTSELLER PRODUCTS
          </h1>
          <h2 className="text-gray-500 text-base mt-3">
            Problems trying to resolve the conflict between
          </h2>
        </div>
        <div className="flex justify-center space-x-6">
          <Product item={0} />
          <Product item={1} />
          <Product item={2} />
          <Product item={3} />
        </div>
        <div className="flex justify-center space-x-6 mt-[80px] mb-[80px] ">
          <Product item={4} />
          <Product item={5} />
          <Product item={6} />
          <Product item={7} />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
