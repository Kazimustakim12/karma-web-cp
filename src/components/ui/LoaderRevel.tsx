import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LoaderRevel = () => {
  const revelSvgStart = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
  const revelSvgEnd = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
  const revelDiv = useRef(null);
  const revelOpentl = useRef();
  useGSAP(
    () => {
      revelOpentl.current = gsap
        .timeline({ paused: true })
        .to(".revel-overlayer", {
          duration: 0,
          clipPath: "polygon(0% 0% ,100% 0%, 100% 100% ,0% 100%)",
          ease: "Power2.easeOut",
          delay: -0.1,
        })
        .to(".bg-svg-ani", 0.8, {
          attr: { d: revelSvgStart },
          ease: "Power2.easeIn",
        })
        .to(".bg-svg-ani", 0.8, {
          attr: { d: revelSvgEnd },
          ease: "Power2.easeOut",
        });
      revelOpentl.current.play();
      //   revelOpentl.current.reverse();
    },
    { scope: revelDiv }
  );
  return (
    <div
      className="revel-overlayer  fixed top-0 left-0 w-full h-screen  bg-transparent z-30 flex flex-col"
      ref={revelDiv}
    >
      <svg
        className="transition  w-screen h-screen rotate-180"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="bg-svg-ani"
          stroke="#000"
          strokeWidth="2px"
          dur="10s"
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath xlinkHref="#path" />
        </animateMotion>
      </svg>
    </div>
  );
};

export default LoaderRevel;
