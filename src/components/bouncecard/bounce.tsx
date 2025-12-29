// "use client";
// import { useEffect } from "react";
// import { gsap } from "gsap";

// interface BounceCardsProps {
//   className?: string;
//   images?: string[];
//   containerWidth?: number;
//   containerHeight?: number;
//   animationDelay?: number;
//   animationStagger?: number;
//   easeType?: string;
//   transformStyles?: string[];
//   enableHover?: boolean;
// }

// export default function BounceCards({
//   className = "",
//   images = [],
//   containerWidth = 400,
//   containerHeight = 400,
//   animationDelay = 0.5,
//   animationStagger = 0.06,
//   easeType = "elastic.out(1, 0.8)",
//   transformStyles = [
//     "rotate(10deg) translate(-170px)",
//     "rotate(5deg) translate(-85px)",
//     "rotate(-3deg)",
//     "rotate(-10deg) translate(85px)",
//     "rotate(2deg) translate(170px)",
//   ],
//   enableHover = false,
// }: BounceCardsProps) {
//   useEffect(() => {
//     gsap.fromTo(
//       ".card",
//       { scale: 0 },
//       {
//         scale: 1,
//         stagger: animationStagger,
//         ease: easeType,
//         delay: animationDelay,
//       }
//     );
//   }, [animationDelay, animationStagger, easeType]);

//   const getNoRotationTransform = (transformStr: string): string => {
//     const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
//     if (hasRotate) {
//       return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
//     } else if (transformStr === "none") {
//       return "rotate(0deg)";
//     } else {
//       return `${transformStr} rotate(0deg)`;
//     }
//   };

//   const getPushedTransform = (
//     baseTransform: string,
//     offsetX: number
//   ): string => {
//     const translateRegex = /translate\(([-0-9.]+)px\)/;
//     const match = baseTransform.match(translateRegex);
//     if (match) {
//       const currentX = parseFloat(match[1]);
//       const newX = currentX + offsetX;
//       return baseTransform.replace(translateRegex, `translate(${newX}px)`);
//     } else {
//       return baseTransform === "none"
//         ? `translate(${offsetX}px)`
//         : `${baseTransform} translate(${offsetX}px)`;
//     }
//   };

//   const pushSiblings = (hoveredIdx: number) => {
//     if (!enableHover) return;

//     images.forEach((_, i) => {
//       const selector = `.card-${i}`;
//       gsap.killTweensOf(selector);

//       const baseTransform = transformStyles[i] || "none";

//       if (i === hoveredIdx) {
//         const noRotation = getNoRotationTransform(baseTransform);
//         gsap.to(selector, {
//           transform: noRotation,
//           duration: 0.4,
//           ease: "back.out(1.4)",
//           overwrite: "auto",
//         });
//       } else {
//         const offsetX = i < hoveredIdx ? -160 : 160;
//         const pushedTransform = getPushedTransform(baseTransform, offsetX);

//         const distance = Math.abs(hoveredIdx - i);
//         const delay = distance * 0.05;

//         gsap.to(selector, {
//           transform: pushedTransform,
//           duration: 0.4,
//           ease: "back.out(1.4)",
//           delay,
//           overwrite: "auto",
//         });
//       }
//     });
//   };

//   const resetSiblings = () => {
//     if (!enableHover) return;

//     images.forEach((_, i) => {
//       const selector = `.card-${i}`;
//       gsap.killTweensOf(selector);

//       const baseTransform = transformStyles[i] || "none";
//       gsap.to(selector, {
//         transform: baseTransform,
//         duration: 0.4,
//         ease: "back.out(1.4)",
//         overwrite: "auto",
//       });
//     });
//   };

//   return (
//     <div
//       className={`relative flex items-center justify-center ${className}`}
//       style={{
//         width: containerWidth,
//         height: containerHeight,
//       }}
//     >
//       {images.map((src, idx) => (
//         <div
//           key={idx}
//           className={`card card-${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[3px]  overflow-hidden  md:w-[270px] lg:w-[350px] 2xl:w-[450px]`}
//           style={{
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//             transform: transformStyles[idx] || "none",
//           }}
//           onMouseEnter={() => pushSiblings(idx)}
//           onMouseLeave={resetSiblings}
//         >
//           <img
//             className="w-full h-full object-cover"
//             src={src}
//             alt={`card-${idx}`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)",
  ],
  enableHover = false,
}: BounceCardsProps) {
  /* ------------------ ENTRY ANIMATION ------------------ */
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay,
      }
    );
  }, [animationDelay, animationStagger, easeType]);

  /* ------------------ HELPERS ------------------ */

  const getCardWidth = () => {
    if (typeof window === "undefined") return 200;
    if (window.innerWidth >= 1536) return 700; // 2xl
    if (window.innerWidth >= 1024) return 450; // lg
    if (window.innerWidth >= 768) return 320; // md
    return 200; // mobile
  };

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
    }
    return transformStr === "none"
      ? "rotate(0deg)"
      : `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (
    baseTransform: string,
    offsetX: number
  ): string => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = parseFloat(match[1]);
      return baseTransform.replace(
        translateRegex,
        `translate(${currentX + offsetX}px)`
      );
    }

    return baseTransform === "none"
      ? `translate(${offsetX}px)`
      : `${baseTransform} translate(${offsetX}px)`;
  };

  /* ------------------ HOVER LOGIC ------------------ */

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover) return;

    const cardWidth = getCardWidth();
    const gap = cardWidth * 0.6; // 👈 KEY FIX (responsive gap)

    images.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        gsap.to(selector, {
          transform: getNoRotationTransform(baseTransform),
          duration: 0.4,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      } else {
        const offsetX = i < hoveredIdx ? -gap : gap;
        const distance = Math.abs(hoveredIdx - i);

        gsap.to(selector, {
          transform: getPushedTransform(baseTransform, offsetX),
          duration: 0.4,
          delay: distance * 0.05,
          ease: "back.out(1.4)",
          overwrite: "auto",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    images.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      gsap.to(selector, {
        transform: transformStyles[i] || "none",
        duration: 0.4,
        ease: "back.out(1.4)",
        overwrite: "auto",
      });
    });
  };

  /* ------------------ RENDER ------------------ */

  return (
    <div
      className={`relative flex items-center justify-center overflow-visible ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`
            card card-${idx}
            absolute
            aspect-square
            border-8 border-white
            rounded-[3px]
            w-[200px]
            md:w-[270px]
            lg:w-[350px]
            2xl:w-[450px]
          `}
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transform: transformStyles[idx] || "none",
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            src={src}
            alt={`card-${idx}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
