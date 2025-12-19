import React from "react";
import Image from "next/image";
import ButtonSecondary from "../ui/ButtonSecondary";

export default function () {
  return (
    <section className="relative w-full flex flex-col items-center pt-[100px] pb-16 md:pb-20 lg:pb-24 overflow-visible bg-[#E8F3FF]">
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
        h-[250px]
        xs:h-[300px]
        sm:h-[400px] 
        md:h-[500px] 
        lg:h-[600px] 
        xl:h-[750px] 
        2xl:h-[900px]
      "
      >
        {/* Mobile Image - commented out for now
        <Image
          src="/assets/hero/building-hero4.png"
          alt="Address Fountain Exterior"
          fill
          className="object-cover object-top block md:hidden"
          priority
          sizes="100vw"
          quality={100}
          unoptimized
        />
        */}
        {/* Hero Image - responsive for all screens */}
        <Image
          src="/assets/hero/building-hero4.png"
          alt="Address Fountain Exterior"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          quality={95}
        />
        {/* --- Landscape Card Overlay --- */}
        <div className="hidden sm:block absolute bottom-0 left-[50%] xs:left-[52%] sm:left-[54%] md:left-[55%] lg:left-[58%] xl:left-[60%] 2xl:left-[62%] translate-y-1/2 z-10 w-[200px] xs:w-[240px] sm:w-[300px] md:w-[380px] lg:w-[450px] xl:w-[520px] 2xl:w-[600px] rounded-xl overflow-hidden">
          <Image
            src="/assets/hero/building-hero-landscape-card.png"
            alt="Address Fountain Landscape View"
            width={400}
            height={250}
            className="w-full h-auto"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
}
