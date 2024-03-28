import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
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
      });
    };
    // moveImgToCenter();
    gsap.set(".img-revel-wrapper", { y: 150, opacity: 0 });
    const imageAnimation = gsap.timeline({
      defaults: {
        duration: 1.4,
        ease: "Power3.inOut",
        repeat: 0, //Disable to animate once
        yoyo: false,
      },
    });
    imageAnimation
      .from(
        ".img-revel-wrapper",
        {
          yPercent: -100,
          opacity: 1,
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
          },
        },

        0
      );
  });
  return (
    <>
      <div
        className="imgWrapper relative  h-screen overflow-hidden bg-red-500  flex items-center justify-center initial_img"
        ref={BannerSection}
      >
        <div className="img-revel-wrapper">
          <img
            className="object-cover w-44 h-64 "
            src=" https://picsum.photos/400/400?random=2"
          />
        </div>
        <div className="img-revel-wrapper z-[2]">
          <img
            className="object-cover w-48 h-72 "
            src="https://picsum.photos/400/400?random=1"
          />
        </div>
        <div className="img-revel-wrapper ">
          <img
            className="object-cover w-96 h-64"
            src="https://picsum.photos/400/400?random=3"
          />
        </div>
        <div className="img-revel-wrapper ">
          <img
            className="object-cover w-72 h-48"
            src="https://picsum.photos/400/400?random=5"
          />
        </div>
        <div className="img-revel-wrapper ">
          <img
            className="object-cover w-96 h-60"
            src="https://picsum.photos/400/400?random=6"
          />
        </div>
        <div className="img-revel-wrapper z-[1]">
          <img
            className="object-cover w-96 h-64 "
            src="https://picsum.photos/400/400?random=8"
          />
        </div>
        {/* <div className=" justify-start items-start inline-flex"> */}
        {/* <img
          className="w-44 h-64 left-[-12px] top-[100px] absolute"
          src="https://via.placeholder.com/174x261"
        />
        <img
          className="w-48 h-72 left-[57px] top-[304px] absolute"
          src="https://via.placeholder.com/184x277"
        />
        <img
          className="w-96 h-64 left-[148.55px] top-[270.93px] absolute"
          src="https://via.placeholder.com/383x255"
        />
        <img
          className="w-72 h-48 left-[329.73px] top-[100px] absolute"
          src="https://via.placeholder.com/289x193"
        />
        <img
          className="w-96 h-60 left-[91.63px] top-[56px] absolute"
          src="https://via.placeholder.com/416x234"
        />
        <img
          className="w-96 h-64 left-[469.29px] top-[210.93px] absolute"
          src="https://via.placeholder.com/386x257"
        /> */}
        <div id="codeby" className="h-screen flex items-center justify-center ">
          <h4 data-cursor-text="karma" data-cursor="-color-accent-lilac">
            <span>Experience exceptional peace of mind with KARMA today!</span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Banner;
