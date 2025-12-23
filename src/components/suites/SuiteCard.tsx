'use client'



import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import ButtonSecondary from "@/components/ui/ButtonSecondary";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface Variant {
  size: string;
  price: string;
}

interface SuiteCardProps {
  imageSrc: string;
  title: string;
  description: string;
  variants: Variant[];
  contactLink?: string;
  detailsLink?: string;
}

const SuiteCard: React.FC<SuiteCardProps> = ({
  imageSrc,
  title,
  description,
  variants,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentVariant = variants[selectedVariantIndex];

  return (
    <div className="bg-white rounded-3xl p-5 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300 w-full max-w-[400px] flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 group shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <a href="#" className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-800 shadow-sm cursor-pointer hover:bg-white transition-colors">
          View 360 Tour
        </a>
      </div>

      {/* Content */}
      <div className="space-y-4 flex flex-col flex-1">
        <div>
          <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
          <p className="text-[#666666] text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Details Row */}
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex items-center gap-2 relative">
            <span className="text-[#0166A4] text-sm font-medium whitespace-nowrap">Total Space:</span>
            
            {/* Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 bg-[#F5F5F5] px-3 py-1 rounded-md cursor-pointer hover:bg-[#eaeaea] transition-colors"
              >
                <span className="text-sm font-bold text-[#1A1A1A]">{currentVariant.size}</span>
                <ChevronDown size={14} className={`text-[#666666] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20">
                  {variants.map((variant, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedVariantIndex(idx);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-[#1A1A1A] font-medium"
                    >
                      {variant.size}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Overlay to close dropdown */}
            {isDropdownOpen && (
               <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#0166A4] text-sm font-medium">Starting From :</span>
            <span className="text-sm font-bold text-[#1A1A1A]">{currentVariant.price}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          {/* Primary Action - View Details (Gradient Button) */}
          <Link href="/rooms" className="w-full">
            <ButtonSecondary className="w-full">
              View Details
            </ButtonSecondary>
          </Link>
          
          {/* Secondary Action - Contact Us (Dark Button) */}
           <Button 
             className="w-full bg-[#0A1A2F]! text-white! justify-center! shadow-md hover:shadow-lg! flex-row-reverse py-3! rounded-md! text-base!"
             icon={ArrowRight}
           >
             Contact Us
           </Button>
        </div>
      </div>
    </div>
  );
};

export default SuiteCard;
