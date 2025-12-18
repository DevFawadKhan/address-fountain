/* src/components/ui/Button.tsx */
import React, { ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  className = "",
  ...props
}) => {
  const baseStyles = `
    bg-btn-navy 
    text-white 
    px-5 py-2.5 
    rounded-lg 
    text-sm font-medium 
    shadow-sm 
    flex items-center justify-center gap-2 
    transition-all duration-200
    hover:opacity-90 hover:shadow-md
    active:scale-95
    disabled:opacity-70 disabled:cursor-not-allowed
  `;

  const combinedClasses = `${baseStyles} ${className}`.trim();

  return (
    <button className={combinedClasses} {...props}>
      {/* Icon uses text-inherit to match button color */}
      {Icon && <Icon size={16} className="shrink-0 text-inherit" />}
      
      {/* Span uses text-inherit to match button color (White) */}
      <span className="text-inherit font-medium">{children}</span>
    </button>
  );
};

export default Button;