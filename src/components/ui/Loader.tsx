import React from "react";
import { LogoSvg } from "./IconsSVg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Loader = () => {
  useGSAP(() => {
    const logoChanger = gsap.timeline({ repeat: 0, yoyo: false });
    logoChanger
      .set(
        [
          ".logo-changer  .logo-animation-1",
          ".logo-changer  .logo-animation-2",
        ],
        {
          strokeDasharray: "798.3514404296875px",
        }
      )
      .fromTo(
        [".logo-animation-1", ".logo-animation-2"],
        3,
        {
          strokeDashoffset: "798.3514404296875px",
        },
        {
          strokeDashoffset: "0px",
          onComplete: () => {
            logoChanger
              .to(".logo-changer", {
                scale: 15,
                opacity: 0,
                width: "160px",
                display: "none",
                rotate: 180,
                duration: 1,
                ease: "easeInOut",
              })
              .to(".loader-div", {
                opacity: 0,
                y: "-100%",
                display: "none",
                delay: 0.2,
                duration: 1,
                ease: "easeInOut",

                onComplete: () => {},
              });
          },
        }
      );
  }, []);

  return (
    <div className="z-10  w-full h-screen overflow-hidden flex items-center justify-center fixed inset-0 bg-text-black loader-div">
      <LogoSvg
        className=" stroke-primary-500  
 drop-banner-shadow logo-changer sm:w-60 w-40 scale-150"
      />
    </div>
  );
};

export default Loader;
