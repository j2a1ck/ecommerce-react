import Product from "./Product";
const CardProduct = () => {
  return (
    <div>
      <div className="flex  flex-col">
        <div className="flex justify-center flex-col items-center mt-[80px] lg:mb-[80px]">
          <h3 className="text-gray-500 text-lg m-3 font-normal">
            Featured Products
          </h3>
          <h1 className="text-black hidden lg:flex font-medium text-2xl ">
            BESTSELLER PRODUCTS
          </h1>
          <div className="flex flex-col lg:hidden mt-2 mb-2 text-black font-medium text-2xl">
            <h1>BESTSELLER</h1>
            <h1>PRODUCTS</h1>
          </div>
          <h2 className="text-gray-500 hidden lg:flex text-base mt-3">
            Problems trying to resolve the conflict between
          </h2>
          <div className="flex text-center flex-col lg:hidden text-gray-500">
            <h2>Problems trying to resolve the</h2>
            <h2>conflict between</h2>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row space-x-6">
          <Product item={0} />
          <Product item={1} />
          <Product item={2} />
          <Product item={3} />
        </div>
        <div className="flex justify-center flex-col lg:flex-row space-x-6 lg:mt-[80px] mb-[80px] ">
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
