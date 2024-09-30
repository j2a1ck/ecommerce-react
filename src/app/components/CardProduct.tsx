import Product from "./Product";

const ProductGrid = () => {
  const num = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-x-8 lg:gap-y-[80px] mb-[80px]">
      {num.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </div>
  );
};

const ProductHighlight = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-[80px] lg:mb-[80px]">
      <p className="text-gray-500 text-lg m-3 font-normal">Featured Products</p>
      <h1 className="text-black hidden lg:flex font-medium text-2xl ">
        BESTSELLER PRODUCTS
      </h1>
      <div className="flex flex-col lg:hidden mt-2 mb-2 text-black font-medium text-2xl">
        <h2>
          BESTSELLER
          <br />
          PRODUCTS
        </h2>
      </div>
      <p className="text-gray-500 hidden lg:flex text-base mt-3">
        Problems trying to resolve the conflict between
      </p>
      <div className="flex text-center flex-col lg:hidden text-gray-500">
        <p>
          Problems trying to resolve the
          <br />
          conflict between
        </p>
      </div>
    </div>
  );
};

const CardProduct = () => {
  return (
    <section className="flex flex-col">
      <ProductHighlight />
      <ProductGrid />
    </section>
  );
};

export default CardProduct;
