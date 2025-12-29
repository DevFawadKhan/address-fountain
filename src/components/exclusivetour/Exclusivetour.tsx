import React from "react";
import ButtonSecondary from "@/components/ui/ButtonSecondary";

const ExclusiveTour = () => {
  return (
    <section className="px-4 lg:px-10 mt-10">
      <div
        className="
          relative
          overflow-hidden
         rounded-2xl
          sm:rounded-[55px]
          h-[400px]
          md:h-[290px]
          lg:h-[475px]
          2xl:min-h-[650px]
          flex
          items-center
          justify-center
        
        "
      >
        {/* Background Image */}
        <img
          src="/assets/exclusivebg/exclusivebg.png"
          alt="Exclusive Tour"
          className="absolute inset-0 w-full h-[500px]! lg:h-full! object-cover rounded-md"
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#0E172A]/80 opacity-10" /> */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center px-6 ">
          <h1
            className="
              text-white!
              font-serif
              text-[25px]!
              xs:text-[30px]!
              sm:text-3xl!
              lg:text-5xl!
              2xl:text-[65px]!
              leading-tight
            "
          >
            Experience Timeless Elegance <br />
            On An Exclusive On-Site Tour <br />
            Of Address Fountain
          </h1>

          <p className="mt-5 text-white/80 text-xs! sm:text-base max-w-2xl mx-auto 2xl:text-lg!">
            Experience the essence of refined living as you explore Address
            Fountain in person where every corner reflects sophistication and
            serene luxury.
          </p>

          <div className="mt-8 flex justify-center">
            <ButtonSecondary className="px-6 py-3 " children="Take Tour" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveTour;
