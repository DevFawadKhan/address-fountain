'use client'

import React, { useState, useRef } from "react";
import SuiteCard from "./SuiteCard";
import { ArrowRight } from "lucide-react";
import ButtonSecondary from "@/components/ui/ButtonSecondary";
import CarouselButton from "@/components/ui/CarouselButton";
import { motion } from "framer-motion";
import Link from "next/link";

// Data based on the provided table
const SUITES_DATA = [
  {
    id: 1,
    title: "Studio Apartment",
    description: "Elegantly Designed With Modern Touches And Soothing Ambiance.",
    variants: [
      { size: "468 Sq Ft", price: "PKR 22,000" },
      { size: "1050 Sq Ft", price: "PKR 30,000" },
    ],
    imageSrc: "/assets/SuitesSection/suiteImages.webp", 
  },
  {
    id: 2,
    title: "Studio Apartment", // Second studio type from table
    description: "Elegantly Designed With Modern Touches And Soothing Ambiance.",
    variants: [
      { size: "551 Sq Ft", price: "PKR 22,000" },
    ],
    imageSrc: "/assets/SuitesSection/suiteImages.webp", 
  },
  {
    id: 3,
    title: "One Bed Apartment",
    description: "Elegantly Designed With Modern Touches And Soothing Ambiance.",
    variants: [
      { size: "684 Sq Ft", price: "PKR 22,000" },
    ],
    imageSrc: "/assets/SuitesSection/suiteImages.webp",
  },
  {
    id: 4,
    title: "Premium One Bed Apartment",
    description: "Elegantly Designed With Modern Touches And Soothing Ambiance.",
    variants: [
      { size: "1012 Sq Ft", price: "PKR 25,300" },
      
    ],
    imageSrc: "/assets/SuitesSection/suiteImages.webp",
  },
  {
    id: 5,
    title: "Premium Two Bed Apartment",
    description: "Elegantly Designed With Modern Touches And Soothing Ambiance.",
    variants: [
      { size: "1266 Sq Ft", price: "PKR 25,300" },
    ],
    imageSrc: "/assets/SuitesSection/suiteImages.webp", // Reusing image for 5th item
  },
];

const SuitesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="main-wrapper px-4 sm:px-6 lg:px-8">
        {/* Header content */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-heading text-[#1A1A1A]">
            Suites And Serviced Apartments
          </h2>
          <p className="text-[#666666] text-base lg:text-lg max-w-2xl">
            Experience refined living with comfort, style,
            <br className="hidden sm:block" /> and modern convenience.
          </p>
          
           <Link href="/rooms" className="mt-4">
             <ButtonSecondary className="px-8!">
               View All
             </ButtonSecondary>
           </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative">
           {/* Cards Scrollable Area */}
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SUITES_DATA.map((suite) => (
              <div key={suite.id} className="snap-center shrink-0 w-full sm:w-[350px] lg:w-[380px]">
                <SuiteCard
                  imageSrc={suite.imageSrc}
                  title={suite.title}
                  description={suite.description}
                  variants={suite.variants}
                />
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <CarouselButton direction="left" onClick={scrollLeft} />
            <div className="flex gap-2">
               {/* Pagination Dots (Visual Only for now) */}
               <div className="w-8 h-2 bg-[#009AE2] rounded-full"></div>
               <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            <CarouselButton direction="right" onClick={scrollRight} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuitesSection;
