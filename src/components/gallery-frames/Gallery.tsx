import React from "react";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";

import ButtonSecondary from "@/components/ui/ButtonSecondary";

const xLoop = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const floatY = (
  delay = 0
): {
  animate: { y: number[] };
  transition: Transition;
} => ({
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

function Gallery() {
  return (
    <section className="">
      {/* Heading */}
      <div className="flex justify-center flex-col items-center mt-16">
        <h1>Every Frame Tells a Story</h1>
        <p className="w-xs text-center m-aut md:w-md lg:w-lg ">
          Explore captivating moments and architectural excellence that define
          our vision of modern mountain living.
        </p>
        <ButtonSecondary className="w-32">explore</ButtonSecondary>
      </div>
      {/* Animated Row */}
      <div className="mt-10 flex flex-row gap-2 justify-center lg:gap-5 lg:-mt-28 2xl:gap-7 ">
        {/* first frame */}
        <motion.div
          {...floatY(0)}
          className="hidden flex-col lg:flex space-y-5 rounded-md"
        >
          <Image
            src="/assets/galleryframes/frame1.png"
            alt="frame1"
            className="w-full lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]! rounded-md"
          />
          <Image
            src="/assets/galleryframes/frame2.png"
            alt="frame2"
            className=" w-full lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]! rounded-md"
          />
        </motion.div>

        {/* second */}
        <motion.div {...floatY(0.5)} className=" lg:mt-40">
          <Image
            alt="frame3"
            src="/assets/galleryframes/frame3.png"
            className="w-[1000px]! h-[220px]! rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
        </motion.div>

        {/* third */}
        <motion.div {...floatY(1)} className="mt-10 md:mt-14 lg:mt-72">
          <Image
            alt="frame4"
            src="/assets/galleryframes/frame4.png"
            className="w-[1000px]! h-[220px]! rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
        </motion.div>

        {/* fourth */}
        <motion.div {...floatY(1.5)} className=" mt-5 md:mt-2 lg:mt-52">
          <Image
            alt="frame5"
            src="/assets/galleryframes/frame5.png"
            className="w-[1000px]! h-[220px]! rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
        </motion.div>

        {/* fifth */}
        <motion.div {...floatY(2)} className="mt-10 md:mt-15 lg:mt-72">
          <Image
            alt="frame5"
            src="/assets/galleryframes/frame6.png"
            className="w-[1000px]! h-[220px]! rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
        </motion.div>

        {/* sixth */}
        <motion.div {...floatY(2.5)} className="lg:mt-44">
          <Image
            alt="frame7"
            src="/assets/galleryframes/frame7.png"
            className="w-[1000px]! h-[220px]! rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
        </motion.div>

        {/* seventh */}
        <motion.div
          {...floatY(3)}
          className="hidden flex-col lg:flex space-y-5"
        >
          <Image
            alt="frame8"
            src="/assets/galleryframes/frame8.png"
            className="rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
          <Image
            alt="frame9"
            src="/assets/galleryframes/frame9.png"
            className="rounded-md lg:w-[500px]! lg:h-[230px]! 2xl:h-[300px]!"
          />
        </motion.div>
      </div>
      ;
    </section>
  );
}

export default Gallery;
