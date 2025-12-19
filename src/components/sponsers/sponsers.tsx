import React from "react";
import LogoLoop from "@/components/LogoLoop";

const sponserLogos = [
  {
    src: "/assets/sponsers/nouman.png",
    href: "https://react.dev",
    alt: "nouman",
  },
  {
    src: "/assets/sponsers/hsq.png",
    href: "https://react.dev",
    alt: "hsq",
  },
  {
    src: "/assets/logo.webp",
    href: "https://react.dev",
    alt: "adddressfountain",
  },
  {
    src: "/assets/sponsers/zafar.png",
    href: "https://react.dev",
    alt: "zafar",
  },
];
function Sponsers() {
  return (
    <>
      <div className="bg-white w-full h-32 m-auto mt-10 rounded-xl pt-5 drop-shadow-2xl shadow-gray-200  lg:w-[75%] 2xl:w-[65%]">
        <LogoLoop
          logos={sponserLogos}
          speed={120}
          direction="right"
          logoHeight={50}
          gap={50}
          hoverSpeed={0}
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </>
  );
}

export default Sponsers;
