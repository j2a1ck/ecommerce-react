interface GreenButtonProps {
  children: React.ReactNode;
  className?: string;
}

const GreenButton: React.FC<GreenButtonProps> = ({ children, className }) => {
  return (
    <button className={`w-40 h-12 bg-green-500 rounded-md mt-8 ${className}`}>
      {children}
    </button>
  );
};

export default GreenButton;
