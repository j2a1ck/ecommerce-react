import clsx from "clsx";

interface ShopButtonProps {
  children: React.ReactNode;
  isLarge?: boolean;
}

const ShopButton: React.FC<ShopButtonProps> = ({ isLarge, children }) => {
  return (
    <div className="flex items-end h-[500px]">
      <button
        aria-label="buy"
        className={clsx(
          "flex w-20 font-medium justify-center items-center rounded-lg h-10 bg-white",
          { "m-5": isLarge }
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default ShopButton;
