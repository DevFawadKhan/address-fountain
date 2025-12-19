import React, { ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        group relative flex items-center justify-center gap-3
        px-4 py-3 rounded-md
        bg-[radial-gradient(circle_at_center,#02B4E9_0%,#028CDA_100%)]
        text-white font-medium text-base shadow-lg
        transition-all duration-300
        hover:shadow-xl hover:scale-[1.02] active:scale-95
        disabled:opacity-70 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      <span className="tracking-wide">{children}</span>

      <div className="bg-white rounded-full p-1 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight
          size={16}
          className="text-[#02B4E9] font-bold"
          strokeWidth={3}
        />
      </div>
    </button>
  );
};

export default ButtonSecondary;
