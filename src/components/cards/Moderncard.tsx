import React from "react";
import { House, DollarSign, Zap } from "lucide-react";
import { BiSolidZap } from "react-icons/bi";
import { FiZap } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type IconProp = LucideIcon | IconType;
export interface ModernCardProps {
  title: string;
  description: string;

  centerIcon: IconProp;
  topIcon: IconProp;
  bottomIcon: IconProp;
}
function Moderncard({
  title,
  description,
  centerIcon: CenterIcon,
  topIcon: TopIcon,
  bottomIcon: BottomIcon,
}: ModernCardProps) {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* ICON CARD WRAPPER */}
        <div className="relative">
          {/* DOTTED PATTERN (BEHIND CARD) */}
          <div className="absolute right-12 bottom-5  translate-x-1/2 translate-y-1/2 grid grid-cols-9 gap-2 opacity-30 pointer-events-none z-0">
            {[...Array(45)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            ))}
          </div>
          {/* WHITE CARD */}
          <div className="relative z-10 bg-white h-44 w-44 rounded-[32px] drop-shadow-2xl flex justify-center items-center">
            {/* <FcHome className="w-28 h-24" /> */}
            <CenterIcon className="w-24 h-20" />
          </div>
          {/* Top badge */}
          <div className="absolute -top-6 right-1 z-20">
            <div className="h-12 w-12 bg-[#0166A4] flex justify-center items-center rounded-full">
              {/* <DollarSign color="#ffffff" strokeWidth={4} /> */}
              <TopIcon color="white" strokeWidth={4} />
            </div>
          </div>
          {/* Bottom badge */}
          <div className="absolute -bottom-5 -left-3 z-20">
            <div className="h-12 w-12 bg-[#BFE7FF] flex justify-center items-center rounded-full">
              {/* <FiZap className="w-8 h-8" strokeWidth={2} /> */}
              <BottomIcon className="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
          </div>
        </div>
        {/* TEXT */}
        <div className="mt-10 flex flex-col items-center ">
          <h2 className="text-lg! font-bold! lg:text-2xl! lg:w">{title}</h2>
          <p className="w-60   text-center text-[#4E5155] 2xl:w-72">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Moderncard;
