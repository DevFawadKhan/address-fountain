// import Image from "next/image";
import Sponsers from "@/components/sponsers/sponsers";
import Hero from "@/components/hero/hero";
import GuidingPrinciples from "@/components/guiding-principles/principles";
import AmenitiesSection from "@/components/amanitiesSection/page";
import Modern from "@/components/modernliving/Modern";
// import About from "@/app/about/page"
export default function Home() {
  return (
    <>
      <Hero />
      {/* <About/> */}
      <Sponsers />
      <GuidingPrinciples />
      <Modern />
      <AmenitiesSection />
    </>
  );
}
