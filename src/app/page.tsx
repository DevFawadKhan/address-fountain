import Sponsers from "@/components/sponsers/sponsers";
import Hero from "@/components/hero/hero";
import GuidingPrinciples from "@/components/guiding-principles/principles";
import AmenitiesSection from "@/components/amanitiesSection/page";
import Modern from "@/components/modernliving/Modern";
import SuitesSection from "@/components/suites/SuitesSection";
import Gallery from "@/components/gallery-frames/Gallery";
import ExclusiveTour from "@/components/exclusivetour/Exclusivetour";
import Bouncecard from "@/components/bouncecard/Bouncecard";
export default function Home() {
  return (
    <>
      <Hero />
      <Sponsers />
      <GuidingPrinciples />
      <Modern />
      <AmenitiesSection />
      <Gallery />
      <ExclusiveTour />
      <SuitesSection />
      <Bouncecard />
    </>
  );
}
