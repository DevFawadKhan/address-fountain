import Moderncard from "../cards/Moderncard";
import { DollarSign } from "lucide-react";
import { FcHome } from "react-icons/fc";
import { IoIosFlash } from "react-icons/io";
import { ModernCardProps } from "@/components/cards/Moderncard";
import { IoStar } from "react-icons/io5";
import { AiOutlineFileSearch } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
export const modernCardData: ModernCardProps[] = [
  {
    title: "Dedicated Secure Entry",
    description:
      "Where security meets sophistication, creating a calm and effortless arrival.",
    centerIcon: FcHome,
    topIcon: DollarSign,
    bottomIcon: IoIosFlash,
  },

  {
    title: "Advanced Elevator Access",
    description:
      "An architectural masterpiece blending sophistication, tranquility, and innovation in every detail.",
    centerIcon: AiOutlineFileSearch,
    topIcon: DollarSign,
    bottomIcon: IoStar,
  },
  {
    title: "Grand Central Welcome",
    description:
      "Address Fountain redefines real estate with a perfect balance of prestige, performance, and permanence.",
    centerIcon: CiStar,
    topIcon: DollarSign,
    bottomIcon: IoIosFlash,
  },
];
function Modern() {
  return (
    <>
      <section className="mt-40">
        <div className=" text-center space-y-4 ">
          <h1
            className="text-3xl! font-medium! text-black max-w-2xl m-auto lg:text-6xl!
           "
          >
            Defining Modern Living. Perfected.
          </h1>
          <p className="max-w-lg m-auto text-black">
            Experience the seamless blend of design innovation, comfort, and
            distinction that elevates Address Fountain above the ordinary.
          </p>
        </div>
        <div className="bg-white rounded-[52px] w-[90%] m-auto flex flex-col justify-center items-center pt-10 space-y-10 shadow-2xl lg:w-[80%] flex-wrap md:space-y-8 lg:space-y-0 md:flex-row lg:gap-10 2xl:gap-44 2xl:p-20">
          {modernCardData.map((card, index) => (
            <Moderncard key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Modern;
