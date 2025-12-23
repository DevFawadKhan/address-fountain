import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "left" | "right";
}

const CarouselButton: React.FC<CarouselButtonProps> = ({
  direction,
  className = "",
  ...props
}) => {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return (
    <button
      className={`
        w-12 h-12 rounded-full bg-white border border-gray-200 
        flex items-center justify-center 
        shadow-sm hover:shadow-md 
        transition-all duration-200 hover:-translate-y-0.5
        active:scale-95 active:shadow-sm
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        ${className}
      `}
      {...props}
    >
      <Icon size={24} className="text-[#1A1A1A]" />
    </button>
  );
};

export default CarouselButton;
