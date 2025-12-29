import { div } from "framer-motion/client";
import BounceCards from "./bounce";

const images = [
  "/assets/bounceimage/image1.png",
  "/assets/bounceimage/image2.png",
  "/assets/bounceimage/image3.png",
  "/assets/bounceimage/image4.png",
  "/assets/bounceimage/image5.png",
];

const transformStyles = [
  "rotate(-5deg) translate(-170px) ",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

function Bouncecard() {
  return (
    <>
      <div className="flex justify-center">
        <BounceCards
          className=""
          images={images}
          containerWidth={400}
          containerHeight={250}
          animationDelay={2}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
    </>
  );
}

export default Bouncecard;
