import { PRODUCT } from "../utils/config";
import Image from "next/image";
import clsx from "clsx";

interface ProductProps {
  item: number;
}

const Product = ({ item }: ProductProps) => {
  const { pic, title, category, price } = PRODUCT[item];

  return (
    <div className="flex flex-col items-center">
      <Image
        src={pic}
        alt={title}
        width={239}
        height={427}
        className="lg:m-0 m-5 mt-14"
      />
      <h2 className="text-lg font-medium text-black mt-4">{title}</h2>
      <h3 className="text-base text-gray-500 mt-2">{category}</h3>
      <h3 className="text-sm font-medium text-green-600 mt-2">
        <span className="text-gray-400 mr-1">$16.48</span>
        {price}
      </h3>
      <div className="flex space-x-1 mt-2">
        {["red-600", "green-600", "black"].map((color) => (
          <button
            aria-label="pick color"
            type="button"
            key={color}
            className={clsx("w-3 h-3 rounded-full", `bg-${color}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
