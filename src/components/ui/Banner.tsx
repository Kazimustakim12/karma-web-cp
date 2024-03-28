import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
import { LogoSvg } from "./IconsSVg";
import SplitType from "split-type";
gsap.registerPlugin(Flip);
const Banner = () => {
  const BannerSection = useRef(null);
  const revelbannerImg = useRef();

  //   const fadeUpImages = () => {
  //     return gsap.to(".img-revel-wrapper img", {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1,
  //       delay: 0.4,
  //       stagger: 0.02,
  //       ease: "power3.inOut",
  //     });
  //   };

  useEffect(() => {}, []);

  useGSAP(() => {
    const initial_img = document.querySelector(".imgWrapper");
    const myText = new SplitType(".head-text");
    const moveImgToCenter = () => {
      const state = Flip.getState(".imgWrapper .img-revel-wrapper");
      console.log(state, "state", initial_img, "initial");
      initial_img?.classList.remove("initial_img");
      initial_img?.classList.add("img_center");
      return Flip.from(state, {
        duration: 2,
        alpha: 1,
        stagger: 0.15,
        ease: "expo.inOut",
        onComplete: () => {
          moveImgToOrgin();
        },
      });
    };
    const moveImgToOrgin = () => {
      const state = Flip.getState(".imgWrapper .img-revel-wrapper");
      console.log(state, "state", initial_img, "initial");
      initial_img?.classList.remove("img_center");
      initial_img?.classList.add("origin_img");
      return Flip.from(state, {
        duration: 2,
        alpha: 1,
        stagger: 0.15,
        ease: "expo.inOut",
        onComplete: () => {},
      });
    };
    const revelText = () => {
      return gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 1,
        duration: 0.3,
      });
    };
    gsap.set(".img-revel-wrapper", { y: 150, opacity: 0 });
    const imageAnimation = gsap.timeline({
      defaults: {
        duration: 1.4,
        ease: "Power3.inOut",
        repeat: 0, //Disable to animate once
        yoyo: false,
        delay: 3,
      },
    });
    imageAnimation
      .from(
        ".img-revel-wrapper",
        {
          yPercent: -100,
          opacity: 0,
        },
        0
      )
      .from(
        ".img-revel-wrapper img",
        {
          yPercent: 100,
          scale: 1.15,
          opacity: 1,
        },
        0
      )
      .to(
        ".img-revel-wrapper",
        {
          opacity: 1,
          y: 0,
          onComplete: () => {
            moveImgToCenter();
            revelText();
          },
        },
        0
      );

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
          // onComplete: () => {
          //   logoChanger
          //     .to(
          //       [
          //         ".logo-changer .logo-animation-1",
          //         ".logo-changer .logo-animation-2",
          //       ],
          //       {
          //         // strokeDashoffset: "798.3514404296875px",
          //         attr: {
          //           d: "M 278 189 C 239 190 210 191 107.502 196.117 C 100 145 137.998 30.6171 256.5 21.6171 C 385.5 11.8197 431 122 437.002 188.117",
          //         },
          //         // scale: 9,
          //         fill: " #fff",
          //         stroke: "#FFF",
          //         duration: 3,
          //         ease: "Power3.inOut",
          //         yoyo: false,
          //         // delay: 3,
          //       }
          //     )
          //     .to(
          //       ".logo-changer",
          //       {
          //         scale: 9,
          //         fill: " #fff",
          //         stroke: "#FFF",
          //         // viewBox,
          //         attr: {
          //           // width: "100%",
          //           // height: "100%",
          //           // ViewBOx: " 0 0 1000 1000",
          //         },
          //       },
          //       "<"
          //     );
          // },
        }
      );
  });
  return (
    <>
      <div
        className="imgWrapper relative  h-screen overflow-hidden bg-red-500  flex items-center justify-center initial_img"
        ref={BannerSection}
      >
        <div className="img-revel-wrapper z-[3]">
          <img
            className="object-cover w-56 h-[20rem] "
            src="/assets/images/house-images/house-11.png"
          />
        </div>
        <div className="img-revel-wrapper z-[2]">
          <img
            className="object-cover w-56 h-[20rem] "
            src="/assets/images/house-images/house-12.png"
          />
        </div>
        <div className="img-revel-wrapper z-[1]">
          <img
            className="object-cover w-[34rem] h-[20rem]"
            src="/assets/images/house-images/house-13.png"
          />
        </div>
        <div className="img-revel-wrapper z-[0]">
          <img
            className="object-cover w-[22rem] h-[15rem] "
            src="/assets/images/house-images/house-14.png"
          />
        </div>
        <div className="img-revel-wrapper z-[-1]">
          <img
            className="object-cover w-[34rem] h-[20rem]"
            src="/assets/images/house-images/house-15.png"
          />
        </div>
        <div className="img-revel-wrapper z-[-1]">
          <img
            className="object-cover w-96 h-64 "
            src="/assets/images/house-images/house-16.png"
          />
        </div>

        <div className="absolute text-center flex flex-col justify-center items-center gap-5 z-10">
          <span>
            <LogoSvg
              className=" stroke-primary-500  
             drop-banner-shadow logo-changer"
            />
          </span>
          <h1 className="text-[20vh] text-primary-500 font-semibold uppercase tracking-[35px] leading-[170px] drop-banner-shadow font-bronova head-text">
            KARMA
          </h1>
          <p className="text-[6vh]  text-primary-500  tracking-[25px] font-soria leading-none head-text">
            REALL STATES
          </p>
        </div>
        {/* <div id="codeby" className="h-screen flex items-center justify-center ">
          <h4 data-cursor-text="karma" data-cursor="-color-accent-lilac">
            <span>Experience exceptional peace of mind with KARMA today!</span>
          </h4>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
