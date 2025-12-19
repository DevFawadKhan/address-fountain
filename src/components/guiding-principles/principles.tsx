import React from "react";
import { ShieldCheck, Handshake, Sparkles, Award } from "lucide-react";

type Principle = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const principles: Principle[] = [
  {
    title: "TRUST",
    description: "Building trust through honesty and reliability",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
  },
  {
    title: "INTEGRITY",
    description: "Delivering results through expertise",
    icon: <Handshake className="h-8 w-8 text-white" />,
  },
  {
    title: "PASSION",
    description: "Pursuing excellence with passion",
    icon: <Sparkles className="h-8 w-8  text-white" />,
  },
  {
    title: "EXPERIENCE",
    description: "Built on ethics, trust, and respect",
    icon: <Award className="h-8 w-8 text-white" />,
  },
];

const GuidingPrinciples: React.FC = () => {
  return (
    <section className="w-full lg:w-[90%] 2xl:w-[75%] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT – IMAGES */}
        <div className="relative w-[70%] xs:w-[80%] mx-auto lg:w-full flex lg:justify-center">
          <img
            src="/assets/guidingprinciples/image1.png"
            alt="Interior"
            className="w-[250px] h-[350px] md:w-[370px] lg:w-[400px] lg:h-[400px] object-cover rounded-3xl shadow-lg"
          />

          <img
            src="/assets/guidingprinciples/image2.png"
            alt="Interior"
            className="absolute right-0 bottom-0 w-[230px] h-[300px] xs:w-[250px] md:w-[350px] lg:w-[370px] 2xl:w-[400px]  object-cover rounded-3xl shadow-2xl translate-x-10 translate-y-10 xs:translate-x-5 md:-translate-x-16  lg:translate-x-10 lg:translate-y-12"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-3xl! mt-10 sm:mt-0  xs:text-4xl! lg:text-5xl! text-center lg:text-start font-serif font-bold text-black ">
            Our Guiding Principles
          </h2>

          <h6 className="mt-4 text-black m-auto w-[90%] xs:max-w-xl lg:m-0 lg:max-w-lg text-center lg:text-start">
            Principles that shape our vision and uphold our standard of
            excellence.
          </h6>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-10">
            {principles.map((item, index) => (
              <div key={index} className="flex  gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-[#0290DC] to-[#02B2E8] shrink-0">
                  {item.icon}
                </div>

                <div>
                  <h6 className="font-bold! tracking-wide text-black">
                    {item.title}
                  </h6>
                  <p className="text-sm text-black mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
