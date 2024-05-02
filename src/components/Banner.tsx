/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
import { LogoSvg } from "./ui/IconsSVg";
import SplitType from "split-type";
gsap.registerPlugin(Flip);
const Banner = () => {
  const BannerSection = useRef(null);

  useEffect(() => {}, []);

  useGSAP(() => {
    const htmlTag = document.querySelector("html.lenis");
    htmlTag?.classList.add("overflow-hidden");

    const pinBannerAndMOveImages = () => {
      return gsap
        .timeline({
          scrollTrigger: {
            trigger: "#ImgWrapper",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#ImgWrapper",
            scrub: 2.2,
          },
        })
        .to(".center-para", { y: "150px", opacity: 0 }, 0)
        .to(
          "#ImgWrapper #img6",
          { transform: "translateZ(700px)", top: "100%" },
          0
        )
        .to(
          "#ImgWrapper #img5",
          { transform: "translateZ(600px)", bottom: "100%" },
          0
        )
        .to(
          "#ImgWrapper #img4",
          { transform: "translateZ(300px)", bottom: "100%" },
          0
        )
        .to(
          "#ImgWrapper #img3",
          { transform: "translateZ(600px)", left: "100%" },
          0
        )
        .to(
          "#ImgWrapper #img2",
          { transform: "translateZ(400px)", top: "100%" },
          0
        )
        .to(
          "#ImgWrapper #img1",
          { transform: "translateZ(200px)", right: "100%" },
          0
        )
        .to("#codeby .para", { y: 0, opacity: 1, stagger: 0.2 }, 0.5);
    };

    const pinnListHorizontalCard = () => {
      const HorizontalSectionPin: HTMLElement | null =
        document.querySelector("#section_pin");
      if (HorizontalSectionPin) {
        gsap.to(HorizontalSectionPin, {
          scrollTrigger: {
            trigger: "#section_to-pin",
            start: "top top",
            end: () => "+=" + HorizontalSectionPin?.offsetWidth,
            pin: true,
            scrub: true,
          },
          x: () =>
            -(
              HorizontalSectionPin.scrollWidth -
              document.documentElement.clientWidth
            ) + "px",
          ease: "none",
        });
      }
    };

    const initial_img = document.querySelector(".imgWrapper");
    new SplitType(".head-text");
    const headerRevel = () => {
      return gsap.to(".menu-bar", {
        duration: 1,
        y: 0,
        opacity: 1,
      });
    };
    const moveImgToCenter = () => {
      const state = Flip.getState(".imgWrapper .img-revel-wrapper");
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
      initial_img?.classList.remove("img_center");
      initial_img?.classList.add("origin_img");
      return Flip.from(state, {
        duration: 2,
        alpha: 1,
        stagger: 0.15,
        ease: "expo.inOut",
        onComplete: () => {
          htmlTag?.classList.remove("overflow-hidden");
          pinBannerAndMOveImages();
          pinnListHorizontalCard();
        },
      });
    };

    const revelText = () => {
      return gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 1,
        duration: 0.3,
        onComplete: () => {
          headerRevel();
          gsap.to(".revel-logo", { y: 0, opacity: 1 });
        },
      });
    };
    gsap.set(".img-revel-wrapper", { y: 150, opacity: 0 });
    const imageAnimation = gsap.timeline({
      defaults: {
        duration: 1.4,
        ease: "Power3.inOut",
        repeat: 0,
        yoyo: false,
        delay: 1,
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
          boxShadow: "10px 0px 20px #000000a1",
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
  });
  return (
    <>
      <div
        id="ImgWrapper"
        className="imgWrapper relative   h-svh overflow-hidden bg-transparent  flex items-center justify-center initial_img"
        ref={BannerSection}
      >
        <div className="absolute text-center flex flex-col justify-center items-center  z-10 overflow-visible w-full h-svh img-wrraper-div">
          <div className="img-revel-wrapper z-[3]" id="img1">
            <img
              className="object-cover w-56 h-[20rem] "
              src="/assets/images/house-images/house-11.webp"
            />
          </div>
          <div className="img-revel-wrapper z-[2]" id="img2">
            <img
              className="object-cover w-56 h-[20rem] "
              src="/assets/images/house-images/house-12.webp"
            />
          </div>
          <div className="img-revel-wrapper z-[1]" id="img3">
            <img
              className="object-cover w-[34rem] h-[20rem]"
              src="/assets/images/house-images/house-13.webp"
            />
          </div>
          <div className="img-revel-wrapper z-[0]" id="img4">
            <img
              className="object-cover w-[22rem] h-[15rem] "
              src="/assets/images/house-images/house-14.webp"
            />
          </div>
          <div className="img-revel-wrapper z-[-1]" id="img5">
            <img
              className="object-cover w-[34rem] h-[20rem]"
              src="/assets/images/house-images/house-15.webp"
            />
          </div>
          <div className="img-revel-wrapper z-[-1]" id="img6">
            <img
              className="object-cover w-96 h-64 "
              src="/assets/images/house-images/house-16.webp"
            />
          </div>
          <div className="flex flex-col items-center justify-center center-para z-10">
            <LogoSvg className=" stroke-primary-500 drop-banner-shadow  xl:w-60 lg:w-[200px]  sm:w-[160px] w-[126px] h-auto opacity-0 translate-y-[50px] revel-logo mb-[30px]" />

            <h1 className="z-10 xl:text-[20vh] lg:text-[15vh] md:text-[10vh] text-[8vh] text-primary-500 font-semibold uppercase tracking-[15px] md:tracking-[35px] xl:leading-[160px]  drop-banner-shadow font-bronova head-text">
              KARMA
            </h1>
            <p className="z-10 xl:text-[6vh] lg:text-[3vh] text-xl text-primary-500 md:tracking-[25px] tracking-[10px] indent-[0px] font-soria leading-none head-text drop-banner-shadow">
              REAL ESTATES
            </p>
          </div>
        </div>
        <div
          id="codeby"
          className="h-svh flex items-center justify-center z-10"
        >
          <h4
            data-cursor-text="karma"
            className="opacity-0 para translate-y-[130px] xl:text-2xl lg:text-xl font-blinker font-bold text-primary-500 text-center 
            uppercase
            leading-[30.35px]
            tracking-[5px]"
            data-cursor="-color-accent-lilac"
          >
            Experience exceptional peace of mind with <br /> KARMA today!
          </h4>
        </div>
      </div>
    </>
  );
};

export default Banner;
