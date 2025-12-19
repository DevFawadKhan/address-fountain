import React from "react";
import Image from "next/image";
import ButtonSecondary from "../ui/ButtonSecondary";

export default function () {
  return (
    <section className="relative w-full flex flex-col items-center pt-[100px] overflow-hidden bg-[#E8F3FF]">
      {/* --- 1. TEXT CONTENT --- */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-center flex flex-col items-center mb-8">
        <span className="text-span-blue font-bold tracking-wider uppercase text-sm mb-3 block">
          Get To Know Us
        </span>

        <h1 className="mb-4">
          Where Luxury Rises <br className="hidden md:block" />
          With The Mountains
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Nestled in the heart of Murree, Address Fountain blends timeless
          elegance with natural beauty — offering a serene escape where every
          moment feels exceptional.
        </p>
        <ButtonSecondary>Contact Us</ButtonSecondary>
      </div>
      <div
        className="
        relative w-full mt-2 shadow-2xl
        h-[350px] 
        xs:h-[200px] 
        sm:h-[400px] 
        md:h-[600px] 
        lg:h-[700px] 
        xl:h-[800px] 
        2xl:h-[900px]
      "
      >
        <Image
          src="/assets/hero/building-hero.png"
          alt="Address Fountain Exterior"
          fill
          className="object-cover object-top z-50" /* Keeps the building top visible on all screens */
          priority
          sizes="100vw" /* Required for full-width responsive images */
          quality={95}
        />
      </div>
    </section>
  );
}
