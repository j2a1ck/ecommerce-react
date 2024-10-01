import clsx from "clsx";

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button
      aria-label="shopping"
      className={clsx("w-40 h-12 bg-green-500 rounded-md mt-8", className)}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
