import React from "react";

interface AmenityCardProps {
  label: string;
  isElevated?: boolean;
}

const AmenityCard: React.FC<AmenityCardProps> = ({
  label,
  isElevated = false,
}) => (
  <div
    className={`w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[220px] p-6 xs:p-8 flex flex-col items-center justify-center text-center min-h-[140px] xs:min-h-[160px] sm:min-h-[180px] transition-all duration-300 ${
      isElevated
        ? "bg-white rounded-2xl shadow-xl"
        : "bg-transparent rounded-none shadow-none"
    }`}
  >
    {/* Blue Circle Icon */}
    <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full bg-[radial-gradient(circle_at_center,#02B4E9_0%,#028CDA_100%)] mb-4 shadow-md" />
    {/* Label */}
    <p className="text-gray-800! font-bold text-xs xs:text-sm sm:text-base uppercase tracking-wider leading-tight mb-0">
      {label}
    </p>
  </div>
);

export default AmenityCard;
