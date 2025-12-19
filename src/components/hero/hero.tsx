"use client";
import React from "react";
import Image from "next/image";
import ButtonSecondary from "../ui/ButtonSecondary";
import { motion } from "framer-motion";
import { GiSeagull } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center pt-[250px] pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-[#E8F3FF]">
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Cloud 1: Left to Right */}
        <motion.div
          initial={{ left: "-20%" }}
          animate={{ left: "120%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[15%] w-[300px] md:w-[500px]"
        >
          <Image
            src="/assets/hero/clouds-hero.webp"
            alt="Cloud"
            width={500}
            height={300}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Cloud 2: Right to Left */}
        <motion.div
          initial={{ right: "-20%" }}
          animate={{ right: "120%" }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[25%] w-[400px] md:w-[600px]"
        >
          <Image
            src="/assets/hero/clouds-hero.webp"
            alt="Cloud"
            width={600}
            height={360}
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Flying Birds: Left to Right */}
        {/* <motion.div
          initial={{ left: "-10%" }}
          animate={{ left: "110%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute top-[10%] w-[150px] md:w-[250px] opacity-70 flex flex-wrap gap-2"
        >
          <div className="relative w-full h-20">
            <GiSeagull className="text-black absolute top-0 left-0 text-xl md:text-2xl" />
            <GiSeagull className="text-black absolute top-4 left-8 text-lg md:text-xl" />
            <GiSeagull className="text-black absolute top-[-5px] left-12 text-sm md:text-base" />
            <GiSeagull className="text-black absolute top-6 left-16 text-xs md:text-sm" />
            <GiSeagull className="text-black absolute top-2 left-24 text-lg md:text-xl" />
          </div>
        </motion.div> */}
      </div>

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
        z-10
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
