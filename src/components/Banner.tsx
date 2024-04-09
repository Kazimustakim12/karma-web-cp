import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
import { LogoSvg } from "./ui/IconsSVg";
import SplitType from "split-type";
gsap.registerPlugin(Flip);
const Banner = () => {
  const BannerSection = useRef(null);
  const revelbannerImg = useRef();

  useEffect(() => {}, []);

  useGSAP(() => {
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
    const initial_img = document.querySelector(".imgWrapper");
    const myText = new SplitType(".head-text");
    const headerRevel = () => {
      return gsap.to(".menu-bar", {
        duration: 1,
        y: 0,
        opacity: 1,
      });
    };
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
        onComplete: () => {
          pinBannerAndMOveImages();
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
        delay: 4,
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
            logoChanger.to(".logo-changer", {
              scale: 1,
              opacity: 1,
              width: "160px",
              display: "block",
              rotate: 180,
              delay: 0.5,
            });
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
          onComplete: () => {
            logoChanger.to(".logo-changer", {
              scale: 15,
              opacity: 0,
              width: "160px",
              display: "none",
              rotate: 180,
            });
          },
        }
      );
  });
  return (
    <>
      <div
        id="ImgWrapper"
        className="imgWrapper relative  h-screen overflow-hidden bg-transparent  flex items-center justify-center initial_img"
        ref={BannerSection}
      >
        <div className="absolute text-center flex flex-col justify-center items-center  z-10 overflow-visible w-full h-screen">
          <div className="img-revel-wrapper z-[3]" id="img1">
            <img
              className="object-cover w-56 h-[20rem] "
              src="/assets/images/house-images/house-11.png"
            />
          </div>
          <div className="img-revel-wrapper z-[2]" id="img2">
            <img
              className="object-cover w-56 h-[20rem] "
              src="/assets/images/house-images/house-12.png"
            />
          </div>
          <div className="img-revel-wrapper z-[1]" id="img3">
            <img
              className="object-cover w-[34rem] h-[20rem]"
              src="/assets/images/house-images/house-13.png"
            />
          </div>
          <div className="img-revel-wrapper z-[0]" id="img4">
            <img
              className="object-cover w-[22rem] h-[15rem] "
              src="/assets/images/house-images/house-14.png"
            />
          </div>
          <div className="img-revel-wrapper z-[-1]" id="img5">
            <img
              className="object-cover w-[34rem] h-[20rem]"
              src="/assets/images/house-images/house-15.png"
            />
          </div>
          <div className="img-revel-wrapper z-[-1]" id="img6">
            <img
              className="object-cover w-96 h-64 "
              src="/assets/images/house-images/house-16.png"
            />
          </div>
          <div className="flex flex-col items-center justify-center center-para z-10">
            <div className="z-10 relative">
              <LogoSvg
                className=" stroke-primary-500  
             drop-banner-shadow logo-changer w-60  scale-150"
              />
            </div>
            <h1 className="z-10 text-[20vh] text-primary-500 font-semibold uppercase tracking-[35px] leading-[170px] drop-banner-shadow font-bronova head-text">
              KARMA
            </h1>
            <p className="z-10 text-[6vh]  text-primary-500 tracking-[25px] font-soria leading-none head-text drop-banner-shadow">
              REALL STATES
            </p>
          </div>
        </div>
        <div
          id="codeby"
          className="h-screen flex items-center justify-center z-10"
        >
          <h4
            data-cursor-text="karma"
            className="opacity-0 para translate-y-[130px] text-xl "
            data-cursor="-color-accent-lilac"
          >
            Experience exceptional peace of mind with KARMA today!
          </h4>
        </div>
      </div>
    </>
  );
};

export default Banner;
